"use client";

import { useState } from "react";
import Link from "next/link";

const areas = [
  "Advogado",
  "Direito Civil", "Direito Empresarial", "Direito Tributário",
  "Direito Digital / LGPD", "Direito Constitucional", "Direito Trabalhista",
  "Direito de Família", "Direito Ambiental", "Direito Penal", "Bacharel", "Contador",
  "Servidor Público", "Profissionais Ligados ao Direito","Outra",
];

const noOabAreas = ["Bacharel", "Contador", "Servidor Público", "Profissionais Ligados ao Direito"];

const commissions = [
  "Comissão de Ética e Inovação",
  "Grupo de Estudos em Direito Digital",
  "Comitê de Ações Legislativas",
  "Núcleo de Advocacia Moderna",
];

const states = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG",
  "PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

const inputClass =
  "w-full px-4 py-3.5 bg-[#f4f7fb] border-2 border-transparent rounded-xl text-[#1a4a88] font-medium placeholder-[#5a6a80]/50 focus:outline-none focus:border-[#6aad45] transition-colors text-sm";

const labelClass = "block text-sm font-bold text-[#1a4a88] mb-2";

export default function AssociesePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", oab: "", seccional: "", cpf: "",
    email: "", phone: "", state: "", city: "", area: "",
    commissions: [] as string[], lgpd: false, newsletter: false,
  });

  const hideOab = noOabAreas.includes(form.area);

  function handleCommission(c: string) {
    setForm((prev) => ({
      ...prev,
      commissions: prev.commissions.includes(c)
        ? prev.commissions.filter((x) => x !== c)
        : [...prev.commissions, c],
    }));
  }

  function handleAreaChange(area: string) {
    setForm((prev) => ({
      ...prev,
      area,
      oab: noOabAreas.includes(area) ? "" : prev.oab,
      seccional: noOabAreas.includes(area) ? "" : prev.seccional,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-20 bg-white">
        <div className="max-w-lg w-full text-center">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ background: "linear-gradient(135deg, #6aad45, #4e8f38)" }}
          >
            <span className="text-white text-4xl font-bold">✓</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a4a88] mb-5">
            Seja bem-vindo à ABRAAM.
          </h1>
          <p className="text-[#5a6a80] leading-relaxed mb-3 font-light text-lg">
            Seu cadastro foi recebido com sucesso. Em breve você receberá as instruções de acesso e boas-vindas por e-mail.
          </p>
          <p className="text-[#5a6a80] text-sm font-light mb-10">
            Fique atento à sua caixa de entrada e pasta de spam.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-[#2683c1] text-sm font-bold hover:gap-5 transition-all duration-200"
          >
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section
        className="relative pt-44 pb-28 px-6 text-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(160deg, rgba(26,74,136,0.95) 0%, rgba(26,74,136,0.88) 60%, rgba(106,173,69,0.85) 100%), url('/brand/background%20copy.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute top-0 right-0 w-1/3 h-full opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(-45deg, white 0, white 1px, transparent 0, transparent 20px)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="fade-in inline-flex items-center gap-2 px-5 py-2 border border-white/25 rounded-full text-white/75 text-xs font-bold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
            Filiação Gratuita
          </span>
          <h1 className="fade-up delay-1 text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Associe-se à ABRAAM
          </h1>
          <p className="fade-up delay-2 text-white/80 text-lg leading-relaxed font-light max-w-xl mx-auto mb-10">
            Preencha o formulário abaixo. É rápido, gratuito e sem nenhuma mensalidade.
          </p>
          <div className="fade-up delay-3 flex flex-wrap items-center justify-center gap-6">
            {["100% Gratuito", "Sem mensalidade", "Sem taxa de adesão"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                {badge}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1200 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M1200 0L0 72H1200V0Z" fill="#f4f7fb" />
          </svg>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 px-6 bg-[#f4f7fb]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Atuação Profissional */}
              <div>
                <h3 className="text-[#1a4a88] font-extrabold text-lg mb-1">Atuação Profissional</h3>
                <div className="w-12 h-0.5 bg-[#6aad45] mb-6" />
              </div>

              <div>
                <label className={labelClass}>
                  Área de Atuação <span className="text-[#6aad45]">*</span>
                </label>
                <select
                  required value={form.area}
                  onChange={(e) => handleAreaChange(e.target.value)}
                  className={inputClass}
                >
                  <option value="">Selecione sua área</option>
                  {areas.map((a) => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>

              <div>
                <label className={`${labelClass} mb-3`}>
                  Interesse em Comissões <span className="text-[#5a6a80] font-normal text-xs">(opcional)</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {commissions.map((c) => {
                    const checked = form.commissions.includes(c);
                    return (
                      <label
                        key={c}
                        className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all border-2 ${
                          checked
                            ? "bg-[#6aad45]/10 border-[#6aad45]"
                            : "bg-[#f4f7fb] border-transparent hover:border-[#6aad45]/30"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => handleCommission(c)}
                          className="accent-[#6aad45] w-4 h-4 flex-shrink-0"
                        />
                        <span className={`text-sm font-medium leading-snug ${checked ? "text-[#1a4a88]" : "text-[#5a6a80]"}`}>
                          {c}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Dados Pessoais */}
              <div className="pt-4">
                <h3 className="text-[#1a4a88] font-extrabold text-lg mb-1">Dados Pessoais</h3>
                <div className="w-12 h-0.5 bg-[#6aad45] mb-6" />
              </div>

              <div>
                <label className={labelClass}>
                  Nome Completo <span className="text-[#6aad45]">*</span>
                </label>
                <input
                  type="text" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome completo"
                  className={inputClass}
                />
              </div>

              {!hideOab && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>
                      Número da OAB{" "}
                      <span className="text-[#5a6a80] font-normal text-xs">(opcional)</span>
                    </label>
                    <input
                      type="text" value={form.oab}
                      onChange={(e) => setForm({ ...form, oab: e.target.value })}
                      placeholder="Ex: 123456"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Seccional{" "}
                      <span className="text-[#5a6a80] font-normal text-xs">(opcional)</span>
                    </label>
                    <select
                      value={form.seccional}
                      onChange={(e) => setForm({ ...form, seccional: e.target.value })}
                      className={inputClass}
                    >
                      <option value="">Selecione</option>
                      {states.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className={labelClass}>
                  CPF <span className="text-[#6aad45]">*</span>
                </label>
                <input
                  type="text" required value={form.cpf}
                  onChange={(e) => setForm({ ...form, cpf: e.target.value })}
                  placeholder="000.000.000-00"
                  className={inputClass}
                />
              </div>

              {/* Contato */}
              <div className="pt-4">
                <h3 className="text-[#1a4a88] font-extrabold text-lg mb-1">Contato</h3>
                <div className="w-12 h-0.5 bg-[#6aad45] mb-6" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>
                    E-mail Profissional <span className="text-[#6aad45]">*</span>
                  </label>
                  <input
                    type="email" required value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="voce@escritorio.com.br"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    Telefone / WhatsApp <span className="text-[#6aad45]">*</span>
                  </label>
                  <input
                    type="tel" required value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(00) 00000-0000"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>
                    Estado <span className="text-[#6aad45]">*</span>
                  </label>
                  <select
                    required value={form.state}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">Selecione</option>
                    {states.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>
                    Cidade <span className="text-[#6aad45]">*</span>
                  </label>
                  <input
                    type="text" required value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    placeholder="Sua cidade"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Consentimentos */}
              <div className="pt-4 space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox" required checked={form.lgpd}
                    onChange={(e) => setForm({ ...form, lgpd: e.target.checked })}
                    className="accent-[#6aad45] w-4 h-4 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-[#5a6a80] text-sm leading-relaxed font-light">
                    Concordo com a{" "}
                    <a href="/privacidade" className="text-[#6aad45] font-semibold hover:underline">
                      Política de Privacidade
                    </a>{" "}
                    e autorizo o tratamento dos meus dados conforme a LGPD.{" "}
                    <span className="text-[#6aad45]">*</span>
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox" checked={form.newsletter}
                    onChange={(e) => setForm({ ...form, newsletter: e.target.checked })}
                    className="accent-[#6aad45] w-4 h-4 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-[#5a6a80] text-sm leading-relaxed font-light">
                    Desejo receber newsletters e comunicados institucionais da ABRAAM.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#6aad45] text-white font-extrabold text-sm tracking-wide rounded-full hover:bg-[#5a9a38] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-4"
              >
                Enviar Cadastro
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
