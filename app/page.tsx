import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Advocacia Moderna",
    description:
      "Promovemos práticas jurídicas atualizadas, alinhadas com as demandas do direito contemporâneo.",
    color: "#2683c1",
  },
  {
    number: "02",
    title: "Inovação e Tecnologia",
    description:
      "Integramos soluções tecnológicas ao exercício da advocacia para maior eficiência e alcance.",
    color: "#6aad45",
  },
  {
    number: "03",
    title: "Educação e Capacitação",
    description:
      "Cursos, webinars e grupos de estudo para o desenvolvimento contínuo dos associados.",
    color: "#2683c1",
  },
  {
    number: "04",
    title: "Networking Estratégico",
    description:
      "Uma rede de advogados modernos comprometidos com a excelência e a colaboração.",
    color: "#6aad45",
  },
];

const activities = [
  {
    title: "Eventos e Congressos",
    description: "Encontros presenciais e online com os principais nomes da advocacia brasileira.",
  },
  {
    title: "Notas Técnicas",
    description: "Posicionamentos institucionais sobre temas relevantes do cenário jurídico.",
  },
  {
    title: "Comissões Temáticas",
    description: "Grupos especializados em Direito Digital, Ética, Tributário e muito mais.",
  },
  {
    title: "Grupos de Estudo",
    description: "Ambientes colaborativos para aprofundamento de conhecimento jurídico.",
  },
  {
    title: "Parcerias Institucionais",
    description: "Acordos com instituições de ensino, tecnologia e entidades do setor jurídico.",
  },
];

const boardMembers = [
  {
    name: "Dr. Silvio Melo",
    role: "Presidente",
    bio: "Advogado com mais de 15 anos de atuação. Especialista em Direito Empresarial e Inovação Jurídica.",
    initial: "S",
  },
  {
    name: "Dra. Ana Beatriz Lima",
    role: "Vice-Presidente",
    bio: "Especialista em Direito Digital e LGPD. Professora e pesquisadora nas áreas de tecnologia e direito.",
    initial: "A",
  },
  {
    name: "Dr. Carlos Andrade",
    role: "Diretor Jurídico",
    bio: "Mestre em Direito Constitucional. Experiência em litígios estratégicos e atuação legislativa.",
    initial: "C",
  },
  {
    name: "Dra. Fernanda Rocha",
    role: "Secretária-Geral",
    bio: "Advogada tributarista com ampla experiência em consultoria para empresas de médio e grande porte.",
    initial: "F",
  },
];

const stats = [
  { number: "500+", label: "Associados" },
  { number: "12", label: "Comissões Ativas" },
  { number: "50+", label: "Eventos por Ano" },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "linear-gradient(160deg, rgba(26,74,136,0.95) 0%, rgba(26,74,136,0.88) 60%, rgba(38,131,193,0.92) 100%), url('/brand/background%20copy.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Diagonal pattern accent */}
        <div
          className="absolute top-0 right-0 w-2/5 h-full opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #6aad45 0, #6aad45 1px, transparent 0, transparent 20px)",
          }}
        />

        {/* Bottom diagonal cut */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            viewBox="0 0 1200 72"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-16 md:h-20"
          >
            <path d="M1200 0L0 72H1200V0Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto pt-24 pb-32">
          <div className="fade-in inline-flex items-center gap-2 px-5 py-2 border border-white/25 rounded-full text-white/75 text-xs font-bold tracking-widest uppercase mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6aad45] inline-block" />
            Entidade Civil Sem Fins Lucrativos
          </div>

          <h1 className="fade-up delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-[5.25rem] font-extrabold text-white leading-[1.04] tracking-tight mb-8">
            A Nova Era da{" "}
            <span className="text-[#6aad45]">Advocacia</span>
            <br />
            Começa Aqui.
          </h1>

          <p className="fade-up delay-2 text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            A ABRAAM nasce para fortalecer, modernizar e qualificar a advocacia brasileira.
            Faça parte de um movimento institucional de transformação.
          </p>

          <div className="fade-up delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/associe-se"
              className="px-10 py-4 bg-[#6aad45] text-white font-bold text-sm tracking-wide rounded-full hover:bg-[#5a9a38] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Associe-se Gratuitamente
            </Link>
            <Link
              href="/sobre"
              className="px-10 py-4 border-2 border-white/40 text-white font-semibold text-sm tracking-wide rounded-full hover:bg-white/10 hover:border-white/70 transition-all duration-200"
            >
              Conheça a ABRAAM
            </Link>
          </div>

          <div className="fade-up delay-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-16 pt-10 border-t border-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-white">{stat.number}</div>
                <div className="text-white/45 text-xs font-medium tracking-wide mt-1 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div>
            <span className="inline-flex items-center gap-3 text-[#6aad45] text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-8 h-px bg-[#6aad45] inline-block" />
              Sobre a Associação
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a4a88] mb-8 leading-[1.1]">
              Uma entidade fundada para transformar a advocacia brasileira
            </h2>
            <p className="text-[#5a6a80] leading-relaxed mb-5 text-lg font-light">
              A Associação Brasileira de Advocacia Moderna é uma entidade civil sem fins lucrativos
              que reúne advogados comprometidos com a modernização, inovação e fortalecimento
              da prática jurídica no Brasil.
            </p>
            <p className="text-[#5a6a80] leading-relaxed mb-10 font-light">
              Nascemos da necessidade de criar um espaço institucional forte, onde o advogado
              moderno encontre capacitação, rede estratégica e representatividade.
            </p>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-3 text-[#2683c1] text-sm font-bold hover:gap-5 transition-all duration-200"
            >
              Nossa história completa
              <span className="w-8 h-8 rounded-full border-2 border-[#2683c1] flex items-center justify-center text-xs flex-shrink-0">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              { label: "Modernização da Advocacia", icon: "⚖️", color: "#2683c1" },
              { label: "Capacitação Contínua", icon: "📚", color: "#6aad45" },
              { label: "Inovação Tecnológica", icon: "💡", color: "#6aad45" },
              { label: "Defesa Institucional da Classe", icon: "🏛️", color: "#2683c1" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-7 bg-[#f4f7fb] rounded-2xl hover:shadow-md transition-all duration-300 border-l-4 hover:-translate-y-0.5"
                style={{ borderLeftColor: item.color }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <p className="text-[#1a4a88] text-sm font-bold leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="py-28 px-6 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <span className="inline-flex items-center gap-3 text-[#6aad45] text-xs font-bold tracking-widest uppercase mb-5">
                <span className="w-8 h-px bg-[#6aad45] inline-block" />
                Nossos Pilares
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a4a88] leading-tight max-w-md">
                Os fundamentos da ABRAAM
              </h2>
            </div>
            <p className="text-[#5a6a80] max-w-xs mt-6 md:mt-0 font-light leading-relaxed text-sm">
              Quatro pilares que definem nossa missão e orientam cada ação da associação.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: pillar.color }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 font-extrabold text-sm"
                  style={{
                    background: pillar.color + "15",
                    color: pillar.color,
                  }}
                >
                  {pillar.number}
                </div>
                <h3
                  className="text-[#1a4a88] font-bold text-lg mb-3 transition-colors"
                  style={{ ["--hover-color" as string]: pillar.color }}
                >
                  {pillar.title}
                </h3>
                <p className="text-[#5a6a80] text-sm leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRETORIA */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-3 text-[#6aad45] text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-8 h-px bg-[#6aad45] inline-block" />
              Liderança
              <span className="w-8 h-px bg-[#6aad45] inline-block" />
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a4a88]">
              Diretoria Fundadora
            </h2>
            <p className="text-[#5a6a80] mt-4 max-w-xl mx-auto font-light">
              Profissionais comprometidos com o desenvolvimento da advocacia brasileira.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="p-7 bg-[#f4f7fb] rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 text-white text-2xl font-extrabold"
                  style={{ background: "linear-gradient(135deg, #1a4a88, #2683c1)" }}
                >
                  {member.initial}
                </div>
                <h3 className="text-[#1a4a88] font-bold text-base mb-1">{member.name}</h3>
                <p className="text-[#6aad45] text-xs font-bold tracking-widest uppercase mb-4">
                  {member.role}
                </p>
                <p className="text-[#5a6a80] text-sm leading-relaxed font-light">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/diretoria"
              className="inline-flex items-center gap-3 text-[#2683c1] text-sm font-bold hover:gap-5 transition-all duration-200"
            >
              Ver diretoria completa →
            </Link>
          </div>
        </div>
      </section>

      {/* O QUE FAZEMOS */}
      <section
        className="py-28 px-6 relative"
        style={{ background: "linear-gradient(135deg, #1a4a88 0%, #0f2d57 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 40px), repeating-linear-gradient(#fff 0, #fff 1px, transparent 0, transparent 40px)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <span className="inline-flex items-center gap-3 text-[#6aad45] text-xs font-bold tracking-widest uppercase mb-5">
                <span className="w-8 h-px bg-[#6aad45] inline-block" />
                Iniciativas
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                O que fazemos
              </h2>
            </div>
            <p className="text-white/45 max-w-xs mt-6 md:mt-0 font-light leading-relaxed text-sm">
              Atuamos em frentes estratégicas para o desenvolvimento da advocacia moderna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className="p-7 rounded-2xl border border-white/10 hover:border-[#6aad45]/60 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-extrabold mb-5 text-[#6aad45] flex-shrink-0"
                  style={{ border: "2px solid rgba(106,173,69,0.35)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#6aad45] transition-colors">
                  {activity.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed font-light">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="py-28 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #6aad45 0%, #4e8f38 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 50%, white 0%, transparent 50%), radial-gradient(circle at 85% 20%, white 0%, transparent 40%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, white 0, white 1px, transparent 0, transparent 16px)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-3 text-white/70 text-xs font-bold tracking-widest uppercase mb-8">
            <span className="w-8 h-px bg-white/40 inline-block" />
            Faça Parte
            <span className="w-8 h-px bg-white/40 inline-block" />
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
            Faça parte da transformação da advocacia brasileira.
          </h2>
          <p className="text-white/80 text-base md:text-xl mb-12 leading-relaxed font-light">
            Associação gratuita. Sem mensalidade. Sem taxa de adesão.
            <br />
            Apenas advogados comprometidos com o futuro da profissão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/associe-se"
              className="px-12 py-5 bg-white text-[#6aad45] font-extrabold text-sm tracking-wide rounded-full hover:bg-white/95 transition-all duration-200 shadow-2xl hover:-translate-y-0.5"
            >
              Quero me Associar
            </Link>
            <Link
              href="/contato"
              className="px-12 py-5 border-2 border-white/50 text-white font-bold text-sm tracking-wide rounded-full hover:bg-white/10 hover:border-white transition-all duration-200"
            >
              Fale Conosco
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10 border-t border-white/20">
            {["100% Gratuito", "Sem mensalidade", "Rede nacional"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white text-xs flex-shrink-0">
                  ✓
                </span>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
