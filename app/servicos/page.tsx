import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site";
import { serviceIcons } from "@/lib/service-icons";

export const metadata: Metadata = {
  title: "Serviços | Soluções AgroPecuária",
  description:
    "Consultoria agrária, veterinária e nutrição animal, fitossanidade, venda de material agropecuário, construção de incubadoras, tanques, mangas de vacinação e jardinagem.",
};

export default function ServicosPage() {
  return (
    <main>
      <section className="bg-terra-50 pb-6 pt-16 sm:pt-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-medium tracking-wide text-clay-600">Serviços</p>
          <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.1] text-pasture-900 sm:text-5xl">
            Do estudo de viabilidade à manutenção no terreno
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-900/75">
            Oito áreas de trabalho, contratáveis em separado ou como um serviço contínuo de
            acompanhamento à sua exploração.
          </p>
        </div>
      </section>

      <section className="bg-terra-50 pb-20 pt-6">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="divide-y divide-pasture-900/10 border-t border-pasture-900/10">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.slug];
              return (
                <div
                  key={s.slug}
                  id={s.slug}
                  className="grid scroll-mt-24 gap-6 py-10 sm:grid-cols-[auto_1fr] sm:gap-10"
                >
                  <div className="flex items-start gap-4 sm:block">
                    <span className="font-display text-sm text-ink-900/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pasture-100">
                      <Icon className="h-6 w-6 text-pasture-700" />
                    </div>
                    <div className="max-w-2xl">
                      <h2 className="font-display text-2xl text-pasture-900">{s.title}</h2>
                      <p className="mt-3 text-[15px] leading-relaxed text-ink-900/70">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-pasture-900 py-16 text-terra-50">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <h2 className="max-w-md font-display text-2xl sm:text-3xl">
            Não encontrou o que precisa? Descreva o seu caso.
          </h2>
          <Link
            href="/contacto"
            className="rounded-full bg-clay-500 px-7 py-3.5 text-[15px] font-medium text-terra-50 transition-colors hover:bg-clay-600"
          >
            Pedir orçamento
          </Link>
        </div>
      </section>
    </main>
  );
}
