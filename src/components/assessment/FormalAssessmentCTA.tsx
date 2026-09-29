'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getUTMParameters } from '@/lib/utils';
import AssessmentProgress from './AssessmentProgress';
import MatterTypeStep from './MatterTypeStep';
import CaseDetailsStep, { CaseDetailsData } from './CaseDetailsStep';
import ContactDetailsStep, { ContactDetailsData } from './ContactDetailsStep';
import AssessmentSuccess from './AssessmentSuccess';

interface FormalAssessmentCTAProps {
  headingTag?: 'h2' | 'h3' | 'h4';
}

const MATTER_NAMES: { [key: string]: string } = {
  'trademark-registration': 'Trademark Registration',
  'trademark-objection': 'Trademark Objection',
  'trademark-opposition': 'Trademark Opposition',
  'trademark-infringement': 'Trademark Infringement',
  'trademark-renewal': 'Trademark Renewal',
  'trademark-search': 'Trademark Search',
};

export default function FormalAssessmentCTA({ headingTag = 'h3' }: FormalAssessmentCTAProps) {
  const HeadingTag = headingTag;

  // Wizard Steps: 1, 2, 3, 4 (4 = Success)
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedMatter, setSelectedMatter] = useState<string>('trademark-registration');
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
      caseDetails.stageLabel ? `Case Stage / Status: ${caseDetails.stageLabel}` : null,
      caseDetails.brandName ? `Brand / Trademark: ${caseDetails.brandName}` : null,
      caseDetails.companyName ? `Company: ${caseDetails.companyName}` : null,
      caseDetails.applicationNumber ? `Application No: ${caseDetails.applicationNumber}` : null,
      caseDetails.proposedClass ? `Proposed Class: ${caseDetails.proposedClass}` : null,
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
        source: 'Homepage Formal Case Assessment',
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

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1040px] mx-auto">
        {/* Main Embedded Form Container */}
        <div className="relative rounded-2xl sm:rounded-[28px] bg-white border border-slate-200/90 p-5 sm:p-8 md:p-10 shadow-[0_4px_30px_rgba(25,82,199,0.06)] overflow-hidden">
          
          {/* Top Accent Line (Brand Gradient: Emerald to Blue) */}
          <div className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-[#10B981] via-[#0066FF] to-[#1952C7]" />

          {/* Section Header */}
          <div className="mb-5 sm:mb-7 space-y-2">
            {/* Blue Brand Pill Badge (No Yellow) */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FC] border border-[#BFDBFE] text-[#1952C7]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1952C7] animate-pulse" />
              <span className="text-[10.5px] sm:text-[11px] font-extrabold tracking-wider uppercase font-nunito">
                IPR KARO • ADVOCATE INTAKE
              </span>
            </div>

            <HeadingTag className="font-nunito text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#0C002B] tracking-tight leading-tight">
              Schedule a Formal Case Assessment
            </HeadingTag>

            <p className="text-slate-600 font-nunito text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
              Consult directly with experienced IP attorneys for trademark registration, objections, opposition defense, copyright protection, and patent advisory.
            </p>
          </div>

          {/* Step Progress Bar (Steps 1, 2, 3) */}
          {currentStep < 4 && <AssessmentProgress currentStep={currentStep} totalSteps={3} />}

          {/* Interactive Steps Content */}
          <div className="mt-2">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
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
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.18 }}
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
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.18 }}
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
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <AssessmentSuccess
                    referenceId={referenceId}
                    onReset={handleReset}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
