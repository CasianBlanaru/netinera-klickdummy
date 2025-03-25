import React from "react";
import type { KeyboardEvent } from "react";

interface SearchIconProps {
  isOpen: boolean;
  onClick: () => void;
}

export function SearchIcon({ isOpen, onClick }: SearchIconProps) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClick();
    }
  };

  return (
    <button
      type="button"
      className={`w-10 h-10 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 cursor-pointer transition-colors ${
        isOpen ? "bg-gray-100" : ""
      }`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={isOpen ? "Suche schließen" : "Suche öffnen"}
    >
      <div className="relative flex justify-center items-center w-5 h-5">
        {/* Lupe */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={`absolute transition-all duration-300 ${
            isOpen 
              ? "opacity-0 rotate-90 scale-0" 
              : "opacity-100 rotate-0 scale-100"
          }`}
        >
          <g clipPath="url(#clip0_173_108)">
            <path
              d="M2 6.66667C2 7.2795 2.12071 7.88634 2.35523 8.45252C2.58975 9.01871 2.93349 9.53316 3.36683 9.9665C3.80018 10.3998 4.31462 10.7436 4.88081 10.9781C5.447 11.2126 6.05383 11.3333 6.66667 11.3333C7.2795 11.3333 7.88634 11.2126 8.45252 10.9781C9.01871 10.7436 9.53316 10.3998 9.9665 9.9665C10.3998 9.53316 10.7436 9.01871 10.9781 8.45252C11.2126 7.88634 11.3333 7.2795 11.3333 6.66667C11.3333 6.05383 11.2126 5.447 10.9781 4.88081C10.7436 4.31462 10.3998 3.80018 9.9665 3.36683C9.53316 2.93349 9.01871 2.58975 8.45252 2.35523C7.88634 2.12071 7.2795 2 6.66667 2C6.05383 2 5.447 2.12071 4.88081 2.35523C4.31462 2.58975 3.80018 2.93349 3.36683 3.36683C2.93349 3.80018 2.58975 4.31462 2.35523 4.88081C2.12071 5.447 2 6.05383 2 6.66667Z"
              stroke="#3E3842"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 14L10 10"
              stroke="#3E3842"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_173_108">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>

        {/* X-Symbol */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3E3842"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            isOpen 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 rotate-90 scale-0"
          }`}
        >
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </div>
    </button>
  );
}
