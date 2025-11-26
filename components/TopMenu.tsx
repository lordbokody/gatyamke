"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TopMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Bevezető", href: "#block_bevezeto" },
    { label: "Linktár", href: "#block_linkek" },
    { label: "Vélemény", href: "#block_velemeny" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 120;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between py-6 fixed bg-white top-0 left-0 w-full lg:w-[1160px] lg:left-1/2 lg:-translate-x-1/2 px-6 lg:px-0 z-50">
      <Link href="/" className="flex-shrink-0" onClick={handleLogoClick}>
        <img
          src="/logo2.png"
          alt="Logo"
          width={150}
          height={150}
          className="h-auto w-[70px]"
        />
      </Link>

      {/* Desktop menü */}
      <ul className="hidden lg:flex gap-8">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-lg transition-opacity hover:opacity-70"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger gomb */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center z-50"
        aria-label="Menü"
      >
        <span
          className={`block h-0.5 w-full bg-black transition-transform duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-black transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-black transition-transform duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobil dropdown menü - jobb oldali */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-[98px] right-6 bg-white shadow-lg px-6 py-4 z-40 rounded-lg">
          <ul className="flex flex-col gap-4 items-end">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-lg transition-opacity hover:opacity-70 block whitespace-nowrap"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}