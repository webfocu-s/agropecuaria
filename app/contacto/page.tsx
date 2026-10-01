import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto | Soluções AgroPecuária",
  description: "Peça um orçamento ou fale com a nossa equipa técnica.",
};

export default function ContactoPage() {
  return (
    <main className="bg-terra-50">
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-20">
        <p className="text-sm font-medium tracking-wide text-clay-600">Contacto</p>
        <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.1] text-pasture-900 sm:text-5xl">
          Vamos falar sobre a sua exploração
        </h1>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-900/75">
          Preencha o formulário com o máximo de detalhe possível. O pedido chega directamente
          à nossa equipa por email.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-lg text-pasture-900">Morada</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-900/70">{site.address}</p>
            </div>
            <div>
              <h2 className="font-display text-lg text-pasture-900">Telefones</h2>
              <ul className="mt-2 space-y-1 text-[15px] text-ink-900/70">
                {site.phones.map((p) => (
                  <li key={p}>
                    <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-clay-600">
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-lg text-pasture-900">Email</h2>
              <p className="mt-2 text-[15px] text-ink-900/70">
                <a href={`mailto:${site.email}`} className="hover:text-clay-600">
                  {site.email}
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-pasture-900/10 bg-white p-6 shadow-sm shadow-pasture-900/5 sm:p-9">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
