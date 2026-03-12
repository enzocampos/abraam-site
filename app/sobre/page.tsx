import Link from "next/link";

const values = [
  { icon: "⚖️", title: "Ética", desc: "Atuação pautada pela integridade, transparência e responsabilidade profissional.", color: "#2683c1" },
  { icon: "🏆", title: "Excelência", desc: "Compromisso com os mais altos padrões de qualidade jurídica e institucional.", color: "#6aad45" },
  { icon: "💡", title: "Inovação", desc: "Abertura permanente a novas abordagens, tecnologias e metodologias jurídicas.", color: "#2683c1" },
  { icon: "🤝", title: "Colaboração", desc: "Construção coletiva de soluções, saberes e oportunidades para a classe.", color: "#6aad45" },
  { icon: "🏛️", title: "Independência Institucional", desc: "Atuação autônoma, livre de vínculos partidários ou interesses corporativos.", color: "#2683c1" },
];

const areas = [
  { title: "Educação Continuada", desc: "Cursos, webinars, grupos de estudo e materiais de capacitação para advogados em todas as fases da carreira." },
  { title: "Consultoria entre Associados", desc: "Rede de troca de experiências e conhecimentos especializados entre membros da associação." },
  { title: "Posicionamento Legislativo", desc: "Notas técnicas, pareceres e posicionamentos institucionais sobre temas relevantes do direito brasileiro." },
  { title: "Eventos e Conteúdo Exclusivo", desc: "Congressos, encontros e publicações voltados ao desenvolvimento estratégico da advocacia moderna." },
];

export default function SobrePage() {
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
            Institucional
          </span>
          <h1 className="fade-up delay-1 text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Sobre a ABRAAM
          </h1>
          <p className="fade-up delay-2 text-white/70 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
            Conheça a história, os valores e o propósito da Associação Brasileira de Advocacia Moderna.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1200 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M1200 0L0 72H1200V0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <span className="inline-flex items-center gap-3 text-[#6aad45] text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-8 h-px bg-[#6aad45] inline-block" />
              História
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a4a88] mb-8 leading-tight">
              Por que a ABRAAM foi fundada
            </h2>
            <div className="space-y-5 text-[#5a6a80] leading-relaxed font-light text-lg">
              <p>
                A advocacia brasileira vive um momento de profunda transformação. As mudanças tecnológicas, as novas demandas dos clientes e a evolução do próprio direito exigem uma nova postura dos profissionais jurídicos.
              </p>
              <p>
                Diante desse contexto, um grupo de advogados comprometidos com a excelência e a modernização da profissão fundou a Associação Brasileira de Advocacia Moderna — a ABRAAM.
              </p>
              <p>
                Nossa missão é criar um espaço institucional forte, onde o advogado moderno encontre capacitação, rede estratégica, representatividade e as ferramentas necessárias para prosperar no cenário jurídico contemporâneo.
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <div className="p-8 bg-[#f4f7fb] rounded-2xl border-l-4 border-[#2683c1]">
              <span className="inline-flex items-center gap-2 text-[#2683c1] text-xs font-bold tracking-widest uppercase mb-4">
                <span className="w-6 h-px bg-[#2683c1] inline-block" />
                Missão
              </span>
              <p className="text-[#1a4a88] font-semibold leading-relaxed text-lg">
                Promover a modernização, qualificação e fortalecimento da advocacia brasileira, por meio de educação, inovação e colaboração entre profissionais jurídicos.
              </p>
            </div>
            <div className="p-8 bg-[#f4f7fb] rounded-2xl border-l-4 border-[#6aad45]">
              <span className="inline-flex items-center gap-2 text-[#6aad45] text-xs font-bold tracking-widest uppercase mb-4">
                <span className="w-6 h-px bg-[#6aad45] inline-block" />
                Visão
              </span>
              <p className="text-[#1a4a88] font-semibold leading-relaxed text-lg">
                Ser referência nacional em inovação e desenvolvimento estratégico da advocacia, contribuindo para um sistema de justiça mais eficiente e acessível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-28 px-6 bg-[#f4f7fb]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-3 text-[#6aad45] text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-8 h-px bg-[#6aad45] inline-block" />
              Princípios
              <span className="w-8 h-px bg-[#6aad45] inline-block" />
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a4a88]">Nossos Valores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: v.color }} />
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-[#1a4a88] font-bold text-lg mb-3 group-hover:text-[#2683c1] transition-colors">
                  {v.title}
                </h3>
                <p className="text-[#5a6a80] text-sm leading-relaxed font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section
        className="py-28 px-6 relative"
        style={{ background: "linear-gradient(135deg, #1a4a88 0%, #0f2d57 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 40px), repeating-linear-gradient(#fff 0, #fff 1px, transparent 0, transparent 40px)" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-3 text-[#6aad45] text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-8 h-px bg-[#6aad45] inline-block" />
              Frentes
              <span className="w-8 h-px bg-[#6aad45] inline-block" />
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Áreas de Atuação</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {areas.map((area, index) => (
              <div
                key={area.title}
                className="p-8 rounded-2xl border border-white/10 hover:border-[#6aad45]/60 hover:bg-white/[0.04] transition-all duration-300 flex gap-6 group"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-extrabold text-[#6aad45] flex-shrink-0"
                  style={{ border: "2px solid rgba(106,173,69,0.35)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#6aad45] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed font-light">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #6aad45 0%, #4e8f38 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, white 0%, transparent 50%), radial-gradient(circle at 85% 20%, white 0%, transparent 40%)" }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
            Pronto para fazer parte?
          </h2>
          <p className="text-white/80 mb-10 font-light text-lg">
            A associação é gratuita. Basta preencher o cadastro e ser bem-vindo à rede.
          </p>
          <Link
            href="/associe-se"
            className="inline-flex px-10 py-4 bg-white text-[#6aad45] font-extrabold text-sm tracking-wide rounded-full hover:bg-white/95 transition-all shadow-xl hover:-translate-y-0.5"
          >
            Associe-se Gratuitamente
          </Link>
        </div>
      </section>
    </div>
  );
}
