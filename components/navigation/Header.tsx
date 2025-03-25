"use client";
import React, { useState } from "react";
import { Logo } from "./Logo";
import { NavigationLinks } from "./NavigationLinks";
import { SearchIcon } from "./SearchIcon";
import { SearchField } from "./SearchField";
import { HamburgerButton } from "./HamburgerButton";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <header className="z-30 relative flex items-center gap-8 bg-white px-12 max-sm:px-4 max-md:px-6 py-6 max-sm:py-3 max-md:py-4 rounded-[48px] max-sm:rounded-3xl w-full h-24 max-sm:h-16 max-md:h-20">
      <div className="w-[255px] max-md:w-[150px]">
        <Logo />
      </div>
      <nav className="flex flex-1 justify-end items-center gap-16">
        <NavigationLinks />
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center hover:bg-gray-100 rounded-full w-10 h-10 transition-colors">
            <SearchIcon isOpen={isSearchOpen} onClick={toggleSearch} />
          </div>
          <HamburgerButton
            onClick={toggleMobileMenu}
            isOpen={isMobileMenuOpen}
          />
        </div>
      </nav>
      
      <SearchField isOpen={isSearchOpen} onClose={closeSearch} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}
