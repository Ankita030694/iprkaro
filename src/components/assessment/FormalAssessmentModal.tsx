'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getUTMParameters } from '@/lib/utils';
import AssessmentProgress from './AssessmentProgress';
import MatterTypeStep from './MatterTypeStep';
import CaseDetailsStep, { CaseDetailsData } from './CaseDetailsStep';
import ContactDetailsStep, { ContactDetailsData } from './ContactDetailsStep';
import AssessmentSuccess from './AssessmentSuccess';

interface FormalAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMatter?: string;
}

const MATTER_NAMES: { [key: string]: string } = {
  'trademark-registration': 'Trademark Registration',
  'trademark-objection': 'Trademark Objection',
  'trademark-opposition': 'Trademark Opposition',
  'trademark-infringement': 'Trademark Infringement',
  'trademark-renewal': 'Trademark Renewal',
  'trademark-search': 'Trademark Search',
  'copyright-registration': 'Copyright Registration',
  'patent-consultation': 'Patent / IP Consultation',
  'other-ip-matter': 'Other IP Matter',
};

export default function FormalAssessmentModal({
  isOpen,
  onClose,
  initialMatter = 'trademark-registration',
}: FormalAssessmentModalProps) {
  // Wizard Steps: 1, 2, 3, 4 (4 = Success)
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedMatter, setSelectedMatter] = useState<string>(initialMatter);
  const [caseDetails, setCaseDetails] = useState<CaseDetailsData>({
    brandName: '',
    companyName: '',
    applicationNumber: '',
    hasSearchedBefore: 'No',
    proposedClass: '',
    examinationReportReceived: 'Yes',
    objectionStatus: '',
    oppositionStage: 'Received TM-O Notice (Defend)',
    opposingParty: '',
    isRegistered: 'Registered',
    workCategory: 'Software Code / App',
    isWorkPublished: 'Unpublished',
    developmentStage: 'Concept / Working Model',
    issueDescription: '',
  });
  const [contactData, setContactData] = useState<ContactDetailsData>({
    fullName: '',
    mobileNumber: '',
    email: '',
    preferredContactMethod: 'Phone',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string>('');

  // Update initial matter if passed
  useEffect(() => {
    if (initialMatter) {
      setSelectedMatter(initialMatter);
    }
  }, [initialMatter]);

  // Lock body scroll and handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleUpdateCaseDetails = useCallback((details: Partial<CaseDetailsData>) => {
    setCaseDetails((prev) => ({ ...prev, ...details }));
  }, []);

  const handleUpdateContactData = useCallback((data: Partial<ContactDetailsData>) => {
    setContactData((prev) => ({ ...prev, ...data }));
  }, []);

  const handleReset = useCallback(() => {
    setCurrentStep(1);
    setSubmissionError(null);
    setReferenceId('');
  }, []);

  // Final Form Submission
  const handleSubmit = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionError(null);

    // Generate formal reference number e.g. IPR-2026-78432
    const currentYear = new Date().getFullYear();
    const randomCode = Math.floor(10000 + Math.random() * 90000);
    const generatedRefId = `IPR-${currentYear}-${randomCode}`;

    const matterTitle = MATTER_NAMES[selectedMatter] || selectedMatter;

    // Build structured message summary for admin / email / CRM
    const messageLines = [
      `[FORMAL CASE ASSESSMENT INQUIRY - REF: ${generatedRefId}]`,
      `Matter Type: ${matterTitle}`,
      `Brand / Trademark: ${caseDetails.brandName || 'N/A'}`,
      caseDetails.companyName ? `Company: ${caseDetails.companyName}` : null,
      caseDetails.applicationNumber ? `Application No: ${caseDetails.applicationNumber}` : null,
      caseDetails.proposedClass ? `Proposed Class: ${caseDetails.proposedClass}` : null,
      caseDetails.hasSearchedBefore ? `Searched Before: ${caseDetails.hasSearchedBefore}` : null,
      caseDetails.examinationReportReceived ? `Exam Report: ${caseDetails.examinationReportReceived}` : null,
      caseDetails.objectionStatus ? `Objection Status: ${caseDetails.objectionStatus}` : null,
      caseDetails.oppositionStage ? `Opposition Stage: ${caseDetails.oppositionStage}` : null,
      caseDetails.opposingParty ? `Opposing Party: ${caseDetails.opposingParty}` : null,
      caseDetails.isRegistered ? `Registration Status: ${caseDetails.isRegistered}` : null,
      caseDetails.workCategory ? `Work Category: ${caseDetails.workCategory}` : null,
      caseDetails.issueDescription ? `Case Details / Issue: ${caseDetails.issueDescription}` : null,
      `Preferred Contact: ${contactData.preferredContactMethod}`,
    ].filter(Boolean);

    const message = messageLines.join('\n');

    // Extract Facebook cookies
    const cookies = typeof document !== 'undefined' ? document.cookie.split('; ') : [];
    const fbp = cookies.find((row) => row.startsWith('_fbp='))?.split('=')[1];
    const fbc = cookies.find((row) => row.startsWith('_fbc='))?.split('=')[1];

    try {
      // Save lead to Firestore 'leads' collection (identical destination as /contact-us)
      await addDoc(collection(db, 'leads'), {
        name: contactData.fullName.trim(),
        email: contactData.email.trim(),
        phone: contactData.mobileNumber.trim(),
        interest: `Formal Assessment - ${matterTitle}`,
        message,
        trademarkName: caseDetails.brandName || '',
        classNumber: caseDetails.proposedClass || '',
        preferredContactMethod: contactData.preferredContactMethod,
        referenceId: generatedRefId,
        source: 'Formal Case Assessment Wizard',
        caseDetails: {
          matterType: selectedMatter,
          matterTitle,
          ...caseDetails,
        },
        status: 'new',
        createdAt: serverTimestamp(),
        meta: {
          fbp: fbp || null,
          fbc: fbc || null,
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
          pageUrl: typeof window !== 'undefined' ? window.location.href : 'unknown',
          utm: getUTMParameters(),
        },
      });

      setReferenceId(generatedRefId);
      setCurrentStep(4); // Move to Success Screen
    } catch (err) {
      console.error('Error submitting formal assessment:', err);
      setSubmissionError(
        'Unable to submit your assessment right now. Please check your connection and try again, or call +91-9289707648 directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="formal-assessment-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 overflow-y-auto"
    >
      {/* Backdrop with subtle blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#0C002B]/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full h-full sm:h-auto sm:max-h-[92vh] sm:max-w-[640px] md:max-w-[680px] bg-white sm:rounded-2xl sm:rounded-[28px] shadow-[0_20px_60px_rgba(12,0,43,0.2)] border border-slate-200/90 overflow-hidden flex flex-col z-10"
      >
        {/* Top Accent Gradient Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#10B981] via-[#0066FF] to-[#1952C7]" />

        {/* Top Header Section */}
        <div className="p-4 sm:p-5 pb-3 sm:pb-3.5 border-b border-slate-100 bg-white relative">
          {/* Logo Branding */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#1952C7] flex items-center justify-center text-white font-black text-xs shadow-xs">
                IPR
              </div>
              <div className="leading-tight">
                <span className="font-nunito font-extrabold text-sm tracking-tight text-[#0C002B] block">
                  IPR KARO
                </span>
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold block -mt-0.5">
                  YOUR IP PARTNER
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-[#0C002B] flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Title & Subtitle */}
          {currentStep < 4 && (
            <div>
              <p
                id="formal-assessment-title"
                role="heading"
                aria-level={2}
                className="font-nunito text-lg sm:text-xl font-extrabold text-[#0C002B] leading-tight"
              >
                Schedule a Formal Case Assessment
              </p>
              <p className="text-slate-500 text-xs sm:text-[13px] mt-0.5 leading-snug font-normal">
                Share a few details about your requirement and our IP experts will get in touch with you for a personalized consultation.
              </p>
            </div>
          )}
        </div>

        {/* Wizard Body with Scrollable Area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {/* Step Progress Bar (Steps 1, 2, 3) */}
          {currentStep < 4 && <AssessmentProgress currentStep={currentStep} totalSteps={3} />}

          {/* Step Content */}
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <MatterTypeStep
                  selectedMatter={selectedMatter}
                  onSelectMatter={setSelectedMatter}
                  onNext={() => setCurrentStep(2)}
                />
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <CaseDetailsStep
                  selectedMatter={selectedMatter}
                  caseDetails={caseDetails}
                  onUpdateCaseDetails={handleUpdateCaseDetails}
                  onBack={() => setCurrentStep(1)}
                  onNext={() => setCurrentStep(3)}
                />
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <ContactDetailsStep
                  contactData={contactData}
                  onUpdateContactData={handleUpdateContactData}
                  onBack={() => setCurrentStep(2)}
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                  submissionError={submissionError}
                />
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
              >
                <AssessmentSuccess
                  referenceId={referenceId}
                  onReset={handleReset}
                  onClose={onClose}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
