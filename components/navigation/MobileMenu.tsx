"use client";
import React, { useEffect } from "react";
import { NavigationLinks } from "./NavigationLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        onKeyDown={() => {}}
        role="presentation"
        aria-hidden="true"
      />

      {/* Menu */}
      <div
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 h-full w-[300px] max-sm:w-full bg-white shadow-xl transform transition-all duration-300 ease-in-out z-50 ${
          isOpen 
            ? "translate-x-0 opacity-100" 
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4 pt-8">
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 text-zinc-700 hover:text-red-600"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-labelledby="closeIconTitle"
              >
                <title id="closeIconTitle">Close Icon</title>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className={`flex-1 px-4 py-6 transition-all duration-500 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <NavigationLinks isMobile />
          </div>
        </div>
      </div>
    </>
  );
}
