import Link from "next/link";
import { LogoMark } from "./logo-mark";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-pasture-900 text-terra-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="h-10 w-10" />
            <span className="font-display text-lg">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-terra-50/70">
            &ldquo;{site.tagline}&rdquo;
          </p>
        </div>

        <div>
          <h3 className="font-display text-base text-clay-400">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm text-terra-50/80">
            <li><Link href="/" className="hover:text-terra-50">Início</Link></li>
            <li><Link href="/sobre" className="hover:text-terra-50">Sobre nós</Link></li>
            <li><Link href="/servicos" className="hover:text-terra-50">Serviços</Link></li>
            <li><Link href="/contacto" className="hover:text-terra-50">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-clay-400">Contactos</h3>
          <ul className="mt-4 space-y-2 text-sm text-terra-50/80">
            <li>{site.address}</li>
            {site.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-terra-50">{p}</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-terra-50">{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-terra-50/10 px-5 py-5 text-center text-xs text-terra-50/50 sm:px-8">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
