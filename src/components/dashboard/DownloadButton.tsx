'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

interface DownloadButtonProps {
  trademark: string;
  classNumber: string;
}

export default function DownloadButton({ trademark, classNumber }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      
      const url = `/api/generate-pdf?trademark=${encodeURIComponent(trademark)}&class=${encodeURIComponent(classNumber)}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || errorData.details || 'Failed to generate PDF';
        console.error('PDF generation error:', errorData);
        throw new Error(errorMessage);
      }

      // Get the PDF blob
      const blob = await response.blob();
      
      // Create a download link
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `trademark-report-${trademark}-class-${classNumber}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error: any) {
      console.error('Error downloading PDF:', error);
      alert(`Failed to download PDF: ${error.message || 'Unknown error'}`);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#FFB703] hover:bg-[#e6a602] text-[#0C002B] font-nunito font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Download PDF Report"
    >
      <FontAwesomeIcon 
        icon={faDownload} 
        className={isDownloading ? 'animate-spin' : ''}
        aria-hidden="true"
      />
      <span>{isDownloading ? 'Generating PDF...' : 'Download PDF Report'}</span>
    </button>
  );
}

