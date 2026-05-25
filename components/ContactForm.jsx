"use client";

import { useState } from "react";
import { contact } from "@/data/site";

export default function ContactForm() {
  const [fields, setFields] = useState({ name: "", phone: "", email: "", goal: "", message: "" });

  function handleChange(e) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const lines = [
      `Olá! Vim pelo site da English Solution.`,
      ``,
      `*Nome:* ${fields.name || "—"}`,
      `*WhatsApp:* ${fields.phone || "—"}`,
      `*E-mail:* ${fields.email || "—"}`,
      `*Objetivo:* ${fields.goal || "—"}`,
    ];
    if (fields.message) {
      lines.push(``, `*Mensagem:* ${fields.message}`);
    }
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`${contact.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[var(--bg-elevated)] border border-white/5 rounded-3xl p-8 lg:p-10 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-semibold text-white mb-2 block">Nome</span>
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            className="input-dark w-full"
            placeholder="Seu nome completo"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-white mb-2 block">WhatsApp</span>
          <input
            type="tel"
            name="phone"
            value={fields.phone}
            onChange={handleChange}
            className="input-dark w-full"
            placeholder="(61) 99999-9999"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-semibold text-white mb-2 block">E-mail</span>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
          className="input-dark w-full"
          placeholder="seu@email.com"
        />
      </label>

      <label className="block">
        <span className="text-sm font-semibold text-white mb-2 block">Qual seu objetivo?</span>
        <select
          name="goal"
          value={fields.goal}
          onChange={handleChange}
          className="input-dark w-full"
        >
          <option value="" disabled>Selecione…</option>
          <option>Aula experimental</option>
          <option>Curso para mim</option>
          <option>Curso para meu time / empresa</option>
          <option>Outro</option>
        </select>
      </label>

      <label className="block">
        <span className="text-sm font-semibold text-white mb-2 block">Mensagem</span>
        <textarea
          name="message"
          value={fields.message}
          onChange={handleChange}
          rows={4}
          className="input-dark w-full resize-none"
          placeholder="Conta um pouco sobre o que você procura…"
        />
      </label>

      <p className="text-xs text-[var(--text-muted)]">
        Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.
      </p>

      <button type="submit" className="btn-primary w-full justify-center">
        Enviar pelo WhatsApp →
      </button>
    </form>
  );
}
