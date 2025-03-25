import React, { useRef, useEffect } from "react";

interface SearchFieldProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchField({ isOpen, onClose }: SearchFieldProps) {
  const inputRef = useRef(null as HTMLInputElement | null);
  
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <div 
      className={`searchfield -inset-1 absolute left-0 right-0 top-full shadow-lg transition-all duration-300 ease-in-out mt-[-45px] p-0 min-h-[110px] before:bg-white before:absolute before:w-full before:h-full before:rounded-bl-[48px] before:rounded-br-[48px] before:max-sm:rounded-bl-3xl before:max-sm:rounded-br-3xl ${
        isOpen 
          ? "opacity-100 translate-y-0 h-16" 
          : "opacity-0 -translate-y-4 h-0 pointer-events-none"
      }`}
      style={{ zIndex: -1 }}
    >
      <div className="flex items-cente m-0 mx-auto px-4 pt-4 h-full container">
        <div className="relative flex items-center w-full">
          <input
            ref={inputRef}
            type="text"
            placeholder="Suchen..."
            className="pl-4 border border-gray-300 focus:border-transparent rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-600 w-full h-10"
            aria-label="Suchfeld"
          />
          <button
            type="button"
            onClick={onClose}
            className="right-3 absolute text-gray-500 hover:text-red-600 transition-colors"
            aria-label="Suche schließen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 