"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/library", label: "Library" },
    { href: "/entrepreneurs", label: "For Entrepreneurs" },
    { href: "/investors", label: "For Investors" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      {/* Crimson brand accent bar */}
      <div className="h-0.5" style={{ background: "linear-gradient(to right, var(--cub-crimson-700), var(--cub-crimson), var(--cub-crimson-700))" }} />

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-horizontal.png"
            alt="Cub Investments"
            width={220}
            height={32}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                isActive(href)
                  ? "text-[var(--cub-crimson)] bg-[var(--cub-crimson-50)]"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="ml-4">
            <Link
              href="/contact"
              className="text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
              style={{ background: "var(--cub-crimson)" }}
              onMouseOver={(e) => (e.currentTarget.style.background = "var(--cub-crimson-700)")}
              onMouseOut={(e) => (e.currentTarget.style.background = "var(--cub-crimson)")}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-500 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive(href)
                  ? "bg-[var(--cub-crimson-50)] text-[var(--cub-crimson)]"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center transition-colors"
              style={{ background: "var(--cub-crimson)" }}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
