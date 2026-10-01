import type { Metadata } from "next";
import Link from "next/link";
import { HillDivider } from "@/components/hill-divider";
import { IconAdvice, IconVet, IconPlan } from "@/components/icons";

export const metadata: Metadata = {
  title: "Sobre nós | Soluções AgroPecuária",
  description:
    "Conheça a Soluções AgroPecuária: consultoria e serviços técnicos para explorações agrícolas e pecuárias em Angola.",
};

const values = [
  {
    icon: IconAdvice,
    title: "Rigor técnico",
    text: "Cada recomendação parte de uma avaliação real do terreno, do solo e do efectivo — nunca de uma fórmula genérica.",
  },
  {
    icon: IconVet,
    title: "Proximidade",
    text: "Acompanhamos o produtor de perto, do primeiro estudo à manutenção, em português claro e sem jargão desnecessário.",
  },
  {
    icon: IconPlan,
    title: "Visão de negócio",
    text: "Tratamos cada exploração como um negócio: o objectivo é produtividade e retorno, não apenas execução técnica.",
  },
];

export default function SobrePage() {
  return (
    <main>
      <section className="bg-terra-50  pt-16 sm:pt-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-medium tracking-wide text-clay-600">
            Sobre nós
          </p>
          <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.1] text-pasture-900 sm:text-5xl">
            Uma equipa técnica ao serviço da terra angolana
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-900/75">
            A Soluções AgroPecuária nasceu para responder a um problema comum:
            produtores com terra, vontade e capital, mas sem acompanhamento
            técnico suficiente para transformar isso em produção estável.
            Juntamos consultoria agrária, veterinária, fitossanidade e
            construção de infra-estruturas rurais numa só equipa, para que o
            produtor não precise de coordenar vários fornecedores diferentes.
          </p>
        </div>
        <div className="mt-14">
          <HillDivider />
        </div>
      </section>

      <section className="bg-pasture-700 py-16 text-terra-50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="font-display text-3xl">A nossa missão</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-terra-50/80">
                Cuidar da terra, das plantas e dos animais com o mesmo padrão
                técnico, para que cada exploração — pequena ou grande — produza
                mais, com menos perdas e menos improviso.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl">Como trabalhamos</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-terra-50/80">
                Começamos sempre no terreno. Só depois de perceber o solo, o
                espaço disponível e o efectivo existente é que propomos um
                plano, um tratamento ou um projecto de construção — nunca ao
                contrário.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-terra-50 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-3xl text-pasture-900 sm:text-4xl">
            O que orienta o nosso trabalho
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {values.map((v) => (
              <div key={v.title}>
                <v.icon className="h-8 w-8 text-clay-500" />
                <h3 className="mt-4 font-display text-lg text-pasture-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-900/65">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-clay-500 py-16 text-terra-50">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <h2 className="max-w-md font-display text-2xl sm:text-3xl">
            Quer perceber como podemos ajudar a sua exploração?
          </h2>
          <Link
            href="/contacto"
            className="rounded-full bg-pasture-900 px-7 py-3.5 text-[15px] font-medium text-terra-50 transition-colors hover:bg-pasture-800"
          >
            Fale connosco
          </Link>
        </div>
      </section>
    </main>
  );
}
