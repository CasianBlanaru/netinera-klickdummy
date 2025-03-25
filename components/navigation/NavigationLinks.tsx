import React from "react";

interface NavigationLinksProps {
  isMobile?: boolean;
}

export function NavigationLinks({ isMobile }: NavigationLinksProps) {
  const links = [
    { href: "#home", text: "Startseite" },
    { href: "#about", text: "Über uns" },
    { href: "#contact", text: "Kontakt" },
  ];

  const baseStyles =
    "text-sm font-semibold tracking-widest leading-4 uppercase text-zinc-700";
  const mobileStyles =
    "block py-3 hover:text-red-600 transition-colors duration-200";
  const desktopStyles = "";

  return (
    <nav
      className={
        isMobile
          ? "flex flex-col gap-2"
          : "flex gap-10 items-center max-md:hidden"
      }
    >
      {links.map((link, index) => (
        <a
          key={`nav-link-${link.href}-${index}`}
          href={link.href}
          className={`${baseStyles} ${isMobile ? mobileStyles : desktopStyles}`}
        >
          {link.text}
        </a>
      ))}
    </nav>
  );
}
