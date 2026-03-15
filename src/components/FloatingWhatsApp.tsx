'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WA_LINK = 'https://wa.me/+919414259587';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  // Appear after 2 seconds so it doesn't distract on first load
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
          aria-label="WhatsApp contact"
        >
          {/* Tooltip / mini card */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.95 }}
                transition={{ duration: 0.18, ease: 'easeOut' as const }}
                className="flex flex-col gap-1 rounded-lg px-4 py-3 shadow-lg bg-surface border border-border max-w-[220px]"
              >
                {/* Close tooltip */}
                <button
                  onClick={() => setShowTooltip(false)}
                  className="self-end -mt-0.5 -mr-1 text-text-muted"
                  aria-label="Close"
                >
                  <X size={13} />
                </button>
                <p className="font-body text-sm font-semibold text-text-primary leading-[1.3]">
                  Get a quick quote
                </p>
                <p className="font-body text-xs text-text-secondary leading-[1.5]">
                  Message us on WhatsApp — we reply within a few hours.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-md font-semibold transition-colors duration-150 bg-cta text-bg font-body text-xs no-underline"
                >
                  <MessageCircle size={13} aria-hidden="true" />
                  Open WhatsApp
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main floating button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3, ease: 'easeOut' as const }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setShowTooltip((v) => !v)}
            className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-cta shadow-[0_4px_20px_rgba(200,146,42,0.35)]"
            aria-label="Chat on WhatsApp"
          >
            {showTooltip
              ? <X size={22} className="text-bg" aria-hidden="true" />
              : <MessageCircle size={24} className="text-bg" aria-hidden="true" />
            }
          </motion.button>

          {/* Subtle pulse ring */}
          {!showTooltip && (
            <motion.div
              className="absolute bottom-0 right-0 w-14 h-14 rounded-full pointer-events-none bg-cta opacity-25"
              animate={{ scale: [1, 1.5, 1.5], opacity: [0.25, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
              aria-hidden="true"
            />
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
