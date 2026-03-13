"use client";

import { useState } from "react";

const inputClass =
  "w-full px-4 py-3.5 bg-[#f4f7fb] border-2 border-transparent rounded-xl text-[#1a4a88] font-medium placeholder-[#5a6a80]/50 focus:outline-none focus:border-[#6aad45] transition-colors text-sm";

const labelClass = "block text-sm font-bold text-[#1a4a88] mb-2";

export default function ContatoPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section
        className="relative pt-44 pb-28 px-6 text-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(160deg, rgba(26,74,136,0.95) 0%, rgba(26,74,136,0.88) 60%, rgba(38,131,193,0.92) 100%), url('/brand/background%20copy.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute top-0 right-0 w-1/3 h-full opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(-45deg, #6aad45 0, #6aad45 1px, transparent 0, transparent 20px)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="fade-in inline-flex items-center gap-2 px-5 py-2 border border-white/25 rounded-full text-white/75 text-xs font-bold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6aad45] inline-block" />
            Fale Conosco
          </span>
          <h1 className="fade-up delay-1 text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Contato
          </h1>
          <p className="fade-up delay-2 text-white/70 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
            Entre em contato com a equipe da ABRAAM. Respondemos em até 48 horas úteis.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1200 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M1200 0L0 72H1200V0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Info */}
          <div>
            <span className="inline-flex items-center gap-3 text-[#6aad45] text-xs font-bold tracking-widest uppercase mb-8">
              <span className="w-8 h-px bg-[#6aad45] inline-block" />
              Informações
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a4a88] mb-10 leading-tight">
              Como podemos ajudar?
            </h2>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#f4f7fb] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#2683c1] text-lg">✉</span>
                </div>
                <div>
                  <h3 className="text-[#1a4a88] font-bold text-base mb-1">E-mail</h3>
                  <a
                    href="mailto:contato@abraam.org.br"
                    className="text-[#2683c1] hover:underline text-sm font-medium"
                  >
                    contato@abraam.com.br
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#f4f7fb] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#2683c1] text-lg">📍</span>
                </div>
                <div>
                  <h3 className="text-[#1a4a88] font-bold text-base mb-1">Endereço</h3>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Avenida+das+Nações+Unidas+14401+São+Paulo+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5a6a80] text-sm leading-relaxed font-light hover:text-[#2683c1] transition-colors"
                  >
                    Avenida das Nações Unidas, Nº 14401<br />
                    Torre C2, 20º andar<br />
                    Chácara Santo Antônio — São Paulo/SP
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#f4f7fb] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#2683c1] text-lg">#</span>
                </div>
                <div>
                  <h3 className="text-[#1a4a88] font-bold text-base mb-3">Redes Sociais</h3>
                  <div className="flex gap-3 flex-wrap">
                    {[
                      { label: "Instagram", href: "https://www.instagram.com/abraam.oficial" },
                      { label: "LinkedIn", href: "#" },
                      { label: "WhatsApp", href: "#" },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border-2 border-[#e0e7ef] text-[#1a4a88] text-xs font-bold rounded-full hover:border-[#6aad45] hover:text-[#6aad45] transition-colors"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#f4f7fb] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#2683c1] text-lg">⚖</span>
                </div>
                <div>
                  <h3 className="text-[#1a4a88] font-bold text-base mb-1">Filiação</h3>
                  <p className="text-[#5a6a80] text-sm leading-relaxed font-light">
                    Para questões sobre filiação e benefícios, utilize a página de{" "}
                    <a href="/associe-se" className="text-[#6aad45] font-semibold hover:underline">
                      cadastro
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#f4f7fb] rounded-2xl p-8 md:p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(135deg, #6aad45, #5a9a38)" }}
                >
                  <span className="text-white text-3xl font-bold">✓</span>
                </div>
                <h3 className="text-[#1a4a88] font-extrabold text-2xl mb-3">Mensagem enviada!</h3>
                <p className="text-[#5a6a80] font-light leading-relaxed">
                  Retornaremos em breve pelo e-mail informado.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-[#1a4a88] font-extrabold text-xl mb-6">Envie sua mensagem</h3>
                <div>
                  <label className={labelClass}>
                    Nome <span className="text-[#6aad45]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Seu nome completo"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    E-mail <span className="text-[#6aad45]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="voce@email.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    Mensagem <span className="text-[#6aad45]">*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Como podemos ajudar?"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#6aad45] text-white font-extrabold text-sm tracking-wide rounded-full hover:bg-[#5a9a38] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
