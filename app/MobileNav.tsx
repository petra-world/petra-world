"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/content", label: "Content" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/booking", label: "Booking" },
  { href: "/auth/signin", label: "Sign in" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/20 bg-white/10 text-white shadow-lg shadow-black/20 backdrop-blur transition hover:border-white/35 hover:bg-white/15"
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
          <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </span>
      </button>

      {isOpen ? (
        <nav className="absolute right-0 top-14 w-60 rounded-md border border-white/15 bg-[#1b0a12]/95 p-2 text-sm text-white shadow-2xl shadow-black/35 backdrop-blur-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-sm px-4 py-3 font-medium text-white/82 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
