"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Falha ao enviar o pedido.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Falha ao enviar o pedido.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-pasture-500/30 bg-pasture-100 p-8">
        <h3 className="font-display text-xl text-pasture-900">Pedido enviado</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-pasture-900/80">
          Obrigado pelo contacto. A nossa equipa vai analisar o seu pedido e responder por
          email ou telefone o mais rápido possível.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-medium text-pasture-800 underline underline-offset-4"
        >
          Enviar outro pedido
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome completo" name="name" required autoComplete="name" />
        <Field label="Telefone" name="phone" type="tel" required autoComplete="tel" />
      </div>

      <Field label="Email" name="email" type="email" required autoComplete="email" />

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-pasture-900">
          Serviço pretendido
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="mt-2 w-full rounded-xl border border-pasture-900/15 bg-white px-4 py-3 text-[15px] text-ink-900 outline-none focus:border-clay-500"
        >
          <option value="" disabled>
            Escolha um serviço
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Outro">Outro / não sei ainda</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-pasture-900">
          Descreva o seu pedido
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Local da exploração, dimensão, prazo desejado e qualquer outro detalhe relevante."
          className="mt-2 w-full resize-none rounded-xl border border-pasture-900/15 bg-white px-4 py-3 text-[15px] text-ink-900 outline-none placeholder:text-ink-900/40 focus:border-clay-500"
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl bg-clay-100 px-4 py-3 text-sm text-clay-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-clay-500 px-7 py-3.5 text-[15px] font-medium text-terra-50 transition-colors hover:bg-clay-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "A enviar..." : "Enviar pedido"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-pasture-900">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-xl border border-pasture-900/15 bg-white px-4 py-3 text-[15px] text-ink-900 outline-none placeholder:text-ink-900/40 focus:border-clay-500"
      />
    </div>
  );
}
