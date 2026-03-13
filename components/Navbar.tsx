"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/diretoria", label: "Diretoria" },
  { href: "/eventos", label: "Eventos" },
  { href: "/publicacoes", label: "Publicações" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/abraam-logo%20copy.png"
            alt="ABRAAM"
            className="h-18 object-contain"
            style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors hover:text-[#6aad45] ${
                pathname === link.href
                  ? "text-[#6aad45]"
                  : scrolled
                  ? "text-[#1a4a88]"
                  : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/associe-se"
          className="hidden md:inline-flex items-center px-6 py-2.5 bg-[#6aad45] text-white text-sm font-bold rounded-full hover:bg-[#5a9a38] transition-all duration-200 shadow-sm"
        >
          Associe-se
        </Link>

        <button
          className={`md:hidden p-2 ${scrolled ? "text-[#1a4a88]" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl px-6 py-6 flex flex-col gap-4 border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#1a4a88] hover:text-[#6aad45] text-sm font-semibold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/associe-se"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#6aad45] text-white text-sm font-bold rounded-full hover:bg-[#5a9a38] transition-colors mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Associe-se Gratuitamente
          </Link>
        </div>
      )}
    </header>
  );
}
