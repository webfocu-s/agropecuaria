import Link from "next/link";
import { HillDivider } from "@/components/hill-divider";
import { IconChicken, IconGoat, IconCattle } from "@/components/icons";
import { services } from "@/lib/site";
import { serviceIcons } from "@/lib/service-icons";

const pillars = [
  {
    title: "Terra",
    text: "Estudos de viabilidade e consultoria agrária para decidir com segurança o que plantar e como preparar o solo.",
  },
  {
    title: "Plantas",
    text: "Fitoterapia e fitossanidade para proteger a cultura das pragas e doenças que reduzem a colheita.",
  },
  {
    title: "Animais",
    text: "Veterinária, nutrição e infra-estruturas de maneio para um efectivo saudável e produtivo.",
  },
];

const steps = [
  {
    n: "1",
    title: "Diagnóstico no terreno",
    text: "Visitamos a exploração para perceber o solo, o espaço e o efectivo antes de propor seja o que for.",
  },
  {
    n: "2",
    title: "Plano à medida",
    text: "Desenhamos o plano de negócio, o calendário técnico ou o projecto de construção adequado ao seu orçamento.",
  },
  {
    n: "3",
    title: "Execução acompanhada",
    text: "Construímos, tratamos ou vacinamos com acompanhamento técnico até à entrega.",
  },
  {
    n: "4",
    title: "Seguimento contínuo",
    text: "Ficamos disponíveis para consultoria e manutenção depois da entrega, ao longo das colheitas e campanhas.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-terra-50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div>
            <p className="text-sm font-medium tracking-wide text-clay-600">
              Consultoria e serviços agropecuários em Angola
            </p>
            <h1 className="mt-4 max-w-xl font-display text-[2.6rem] leading-[1.08] text-pasture-900 sm:text-5xl">
              Cuidamos da terra, das plantas e dos animais.
            </h1>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink-900/75">
              Da elaboração do plano de negócio à construção de tanques e mangas de vacinação:
              acompanhamos a sua exploração agrícola ou pecuária do primeiro estudo à
              manutenção no terreno.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contacto"
                className="rounded-full bg-clay-500 px-7 py-3.5 text-[15px] font-medium text-terra-50 shadow-sm shadow-clay-600/20 transition-colors hover:bg-clay-600"
              >
                Pedir orçamento
              </Link>
              <Link
                href="/servicos"
                className="text-[15px] font-medium text-pasture-800 underline decoration-clay-400 decoration-2 underline-offset-4 hover:text-pasture-900"
              >
                Ver todos os serviços
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-pasture-900/10 pt-6 text-sm text-ink-900/70">
              <li>Consultoria agrária</li>
              <li>Veterinária e nutrição animal</li>
              <li>Construção rural</li>
              <li>Jardinagem</li>
            </ul>
          </div>

          <div className="relative mx-auto flex h-[340px] w-full max-w-md items-center justify-center rounded-[2rem] bg-pasture-100 sm:h-[400px]">
            <div className="absolute inset-x-6 bottom-6 top-6 overflow-hidden rounded-[1.6rem] bg-gradient-to-b from-terra-50 to-pasture-100">
              <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <circle cx="310" cy="80" r="42" fill="var(--color-clay-100)" />
                <path
                  d="M0 230c60-40 110 10 170-10s110-40 170-10 60 20 60 20v170H0Z"
                  fill="var(--color-pasture-600)"
                />
                <path
                  d="M0 270c70-30 120 20 180-5s100-35 160-5 60 15 60 15v130H0Z"
                  fill="var(--color-pasture-800)"
                />
              </svg>
              <div className="absolute left-6 top-10">
                <IconChicken className="h-14 w-14 drop-shadow-sm" />
              </div>
              <div className="absolute bottom-24 right-8">
                <IconGoat className="h-16 w-16 drop-shadow-sm" />
              </div>
              <div className="absolute bottom-10 left-10">
                <IconCattle className="h-20 w-20 drop-shadow-sm" />
              </div>
            </div>
          </div>
        </div>
        <HillDivider />
      </section>

      {/* Pillars */}
      <section className="bg-pasture-700 py-16 text-terra-50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {pillars.map((p) => (
              <div key={p.title}>
                <h2 className="font-display text-2xl italic text-clay-400">{p.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-terra-50/85">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-terra-50 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-lg">
            <h2 className="font-display text-3xl text-pasture-900 sm:text-4xl">
              Um único parceiro para a sua exploração
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-900/70">
              Oito áreas de trabalho que cobrem o ciclo completo, da ideia à colheita e do
              curral ao aviário.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-pasture-900/10 bg-pasture-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => {
              const Icon = serviceIcons[s.slug];
              return (
                <div key={s.slug} className="group bg-terra-50 p-6 transition-colors hover:bg-white">
                  <Icon className="h-7 w-7 text-clay-500" />
                  <h3 className="mt-4 font-display text-[17px] leading-snug text-pasture-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-900/65">{s.short}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-clay-600 hover:text-clay-700"
            >
              Explorar todos os serviços em detalhe
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-pasture-900 py-20 text-terra-50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="max-w-md font-display text-3xl sm:text-4xl">Como trabalhamos</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="relative pl-1">
                <span className="font-display text-4xl text-clay-400/70">{s.n}</span>
                <h3 className="mt-3 text-[17px] font-medium text-terra-50">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-terra-50/70">{s.text}</p>
                {i < steps.length - 1 && (
                  <span className="mt-6 hidden h-px w-full bg-terra-50/10 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-clay-500 py-16 text-terra-50">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <h2 className="max-w-md font-display text-2xl sm:text-3xl">
            Fale connosco sobre a sua exploração
          </h2>
          <Link
            href="/contacto"
            className="rounded-full bg-pasture-900 px-7 py-3.5 text-[15px] font-medium text-terra-50 transition-colors hover:bg-pasture-800"
          >
            Preencher pedido
          </Link>
        </div>
      </section>
    </main>
  );
}
