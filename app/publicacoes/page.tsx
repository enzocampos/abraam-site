"use client";

import { useState } from "react";

const categories = ["Todos", "Artigos", "Notas Técnicas", "Posicionamentos", "Estudos"];

const publications = [
  {
    title: "Inteligência Artificial e o Futuro da Advocacia Brasileira",
    category: "Artigos",
    date: "02 Mar 2026",
    author: "Dra. Ana Beatriz Lima",
    summary:
      "Uma análise sobre o impacto das ferramentas de IA na prática jurídica cotidiana e as oportunidades para advogados modernos.",
    color: "#2683c1",
  },
  {
    title: "Nota Técnica: LGPD e Escritórios de Advocacia",
    category: "Notas Técnicas",
    date: "18 Fev 2026",
    author: "Comissão de Direito Digital",
    summary:
      "Orientações práticas sobre a adequação de escritórios de advocacia às exigências da Lei Geral de Proteção de Dados.",
    color: "#6aad45",
  },
  {
    title: "Posicionamento ABRAAM sobre Regulamentação da IA no Brasil",
    category: "Posicionamentos",
    date: "05 Fev 2026",
    author: "Diretoria ABRAAM",
    summary:
      "Manifestação institucional da ABRAAM sobre o Projeto de Lei de regulamentação da Inteligência Artificial em tramitação no Congresso Nacional.",
    color: "#1a4a88",
  },
  {
    title: "O Advogado do Século XXI: Competências e Transformações",
    category: "Estudos",
    date: "22 Jan 2026",
    author: "Dr. Carlos Andrade",
    summary:
      "Estudo sobre as novas competências exigidas do profissional jurídico diante das transformações tecnológicas e sociais do século XXI.",
    color: "#2683c1",
  },
  {
    title: "Contratos Inteligentes e Segurança Jurídica",
    category: "Artigos",
    date: "10 Jan 2026",
    author: "Dr. Roberto Fonseca",
    summary:
      "Uma abordagem crítica sobre os contratos baseados em blockchain e os desafios para o ordenamento jurídico brasileiro.",
    color: "#6aad45",
  },
  {
    title: "Nota Técnica: Advocacia Remota e Regulamentação da OAB",
    category: "Notas Técnicas",
    date: "15 Dez 2025",
    author: "Comissão Jurídica",
    summary:
      "Análise das resoluções da OAB sobre o exercício remoto da advocacia e recomendações para a modernização normativa.",
    color: "#1a4a88",
  },
];

export default function PublicacoesPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? publications
      : publications.filter((p) => p.category === activeCategory);

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
            Conhecimento
          </span>
          <h1 className="fade-up delay-1 text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Publicações
          </h1>
          <p className="fade-up delay-2 text-white/70 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
            Artigos, notas técnicas, posicionamentos e estudos produzidos pela ABRAAM e seus associados.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1200 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M1200 0L0 72H1200V0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* FILTROS */}
      <section className="py-8 px-6 bg-white border-b border-[#e0e7ef] sticky top-[73px] z-40">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#1a4a88] text-white shadow-sm"
                  : "bg-[#f4f7fb] text-[#5a6a80] hover:bg-[#e8eef6] hover:text-[#1a4a88]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PUBLICAÇÕES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#5a6a80] font-light">Nenhuma publicação encontrada.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((pub) => (
                <article
                  key={pub.title}
                  className="bg-[#f4f7fb] rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative"
                >
                  <div className="h-1 w-full" style={{ background: pub.color }} />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold"
                        style={{ background: pub.color }}
                      >
                        {pub.category}
                      </span>
                      <span className="text-[#5a6a80] text-xs font-light">{pub.date}</span>
                    </div>
                    <h2 className="text-[#1a4a88] font-extrabold text-lg mb-3 leading-snug flex-1">
                      {pub.title}
                    </h2>
                    <p className="text-[#5a6a80] text-sm leading-relaxed font-light mb-5">
                      {pub.summary}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#e0e7ef]">
                      <span className="text-[#5a6a80] text-xs font-medium">{pub.author}</span>
                      <button
                        className="text-xs font-bold transition-all hover:gap-2 flex items-center gap-1"
                        style={{ color: pub.color }}
                      >
                        Ler mais →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
