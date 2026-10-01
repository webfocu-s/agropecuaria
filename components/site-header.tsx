"use client";

import Link from "next/link";
import { useState } from "react";
import { LogoMark } from "./logo-mark";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre nós" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-pasture-900/10 bg-terra-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark className="h-10 w-10 shrink-0" />
          <span className="font-display text-lg leading-tight text-pasture-900">
            Soluções
            <br className="hidden xs:block" /> AgroPecuária
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] text-ink-900/80 transition-colors hover:text-clay-600"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="rounded-full bg-pasture-800 px-5 py-2.5 text-[15px] text-terra-50 transition-colors hover:bg-pasture-700"
          >
            Pedir orçamento
          </Link>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-pasture-900/20 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-pasture-900/10 bg-terra-50 px-5 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[15px] text-ink-900/85 hover:bg-pasture-100"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-full bg-pasture-800 px-4 py-2.5 text-center text-[15px] text-terra-50"
          >
            Pedir orçamento
          </Link>
        </nav>
      )}
    </header>
  );
}
