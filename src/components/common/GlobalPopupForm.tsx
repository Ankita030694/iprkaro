'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';

export default function GlobalPopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Don't show on contact-us page or any page in the authority folder
    if (pathname === '/contact-us' || pathname.startsWith('/authority')) {
      setIsOpen(false);
      return;
    }

    // Check session storage to see if user already closed it in this session
    const isDismissed = sessionStorage.getItem('popupFormDismissed');
    if (isDismissed) {
      setHasBeenDismissed(true);
      return;
    }

    // 5 second delay
    const timer = setTimeout(() => {
      if (!hasBeenDismissed && pathname !== '/contact-us' && !pathname.startsWith('/authority')) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [pathname, hasBeenDismissed]);

  const handleClose = () => {
    setIsOpen(false);
    setHasBeenDismissed(true);
    sessionStorage.setItem('popupFormDismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md max-h-[95vh] flex flex-col"
          >
            {/* Close Button - Moved inside container context and styled better */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors z-[10000]"
              aria-label="Close popup"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>

            {/* The Form - Wrapped in a scrollable div */}
            <div className="w-full overflow-y-auto rounded-xl sm:rounded-2xl custom-scrollbar">
              <ContactForm isPopup={true} onSuccess={handleClose} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
