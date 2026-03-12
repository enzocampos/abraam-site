import Link from "next/link";

const upcomingEvents = [
  {
    title: "I Congresso ABRAAM de Advocacia Moderna",
    day: "15",
    month: "ABR",
    year: "2026",
    time: "09h00 – 18h00",
    location: "Online — Transmissão ao Vivo",
    description:
      "O primeiro grande evento da ABRAAM reúne advogados de todo o Brasil para debater os rumos da advocacia moderna, inovação jurídica e tecnologia.",
    tag: "Congresso",
    tagColor: "#2683c1",
  },
  {
    title: "Webinar: LGPD na Prática Jurídica",
    day: "28",
    month: "MAR",
    year: "2026",
    time: "19h00 – 21h00",
    location: "Online",
    description:
      "Como aplicar a Lei Geral de Proteção de Dados no dia a dia do escritório. Casos práticos e orientações para advogados.",
    tag: "Webinar",
    tagColor: "#6aad45",
  },
  {
    title: "Grupo de Estudos: Direito Digital",
    day: "Toda",
    month: "QUI",
    year: "18h30",
    time: "Semanal",
    location: "Online — WhatsApp / Meet",
    description:
      "Encontros semanais para discussão de temas de Direito Digital, IA no direito e privacidade de dados.",
    tag: "Grupo de Estudos",
    tagColor: "#1a4a88",
  },
];

const pastEvents = [
  {
    title: "Webinar de Lançamento ABRAAM",
    date: "Fevereiro de 2026",
    description: "Apresentação oficial da ABRAAM para a comunidade jurídica brasileira.",
  },
  {
    title: "Mesa Redonda: Futuro da Advocacia",
    date: "Janeiro de 2026",
    description: "Debate com membros da diretoria fundadora sobre os desafios e oportunidades da advocacia moderna.",
  },
];

export default function EventosPage() {
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
            Agenda
          </span>
          <h1 className="fade-up delay-1 text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Eventos e Capacitação
          </h1>
          <p className="fade-up delay-2 text-white/70 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
            Congressos, webinars, grupos de estudo e debates promovidos pela ABRAAM.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1200 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M1200 0L0 72H1200V0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* PRÓXIMOS EVENTOS */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <span className="inline-flex items-center gap-3 text-[#6aad45] text-xs font-bold tracking-widest uppercase mb-5">
                <span className="w-8 h-px bg-[#6aad45] inline-block" />
                Em breve
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a4a88] leading-tight">
                Próximos Eventos
              </h2>
            </div>
            <p className="text-[#5a6a80] max-w-xs mt-5 md:mt-0 font-light text-sm">
              Associados têm acesso prioritário e gratuito a todos os eventos.
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-[#f4f7fb] rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col md:flex-row gap-6"
              >
                {/* Date block */}
                <div
                  className="flex-shrink-0 w-24 h-24 rounded-2xl flex flex-col items-center justify-center text-white self-center md:self-start mx-auto md:mx-0"
                  style={{ background: event.tagColor }}
                >
                  <span className="text-2xl font-extrabold leading-none">{event.day}</span>
                  <span className="text-xs font-bold tracking-widest mt-0.5">{event.month}</span>
                  <span className="text-xs font-light opacity-80">{event.year}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold"
                      style={{ background: event.tagColor }}
                    >
                      {event.tag}
                    </span>
                    <span className="text-[#5a6a80] text-xs">{event.time}</span>
                    <span className="text-[#5a6a80] text-xs">•</span>
                    <span className="text-[#5a6a80] text-xs">{event.location}</span>
                  </div>
                  <h3 className="text-[#1a4a88] font-extrabold text-xl mb-3">{event.title}</h3>
                  <p className="text-[#5a6a80] text-sm leading-relaxed font-light mb-5">
                    {event.description}
                  </p>
                  <button
                    className="px-6 py-2.5 text-white text-xs font-bold rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-sm"
                    style={{ background: event.tagColor }}
                  >
                    Inscrever-se
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTOS REALIZADOS */}
      <section className="py-28 px-6 bg-[#f4f7fb]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="inline-flex items-center gap-3 text-[#6aad45] text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-8 h-px bg-[#6aad45] inline-block" />
              Histórico
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a4a88]">
              Eventos Realizados
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-2xl p-7 border border-[#e0e7ef] opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="inline-block px-3 py-1 bg-[#f4f7fb] text-[#5a6a80] text-xs font-bold rounded-full mb-4 uppercase tracking-wide">
                  Realizado
                </span>
                <h3 className="text-[#1a4a88] font-bold text-lg mb-1">{event.title}</h3>
                <p className="text-[#6aad45] text-xs font-semibold mb-3">{event.date}</p>
                <p className="text-[#5a6a80] text-sm leading-relaxed font-light">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a4a88 0%, #0f2d57 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 40px), repeating-linear-gradient(#fff 0, #fff 1px, transparent 0, transparent 40px)" }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-3 text-[#6aad45] text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-8 h-px bg-[#6aad45] inline-block" />
            Associe-se
            <span className="w-8 h-px bg-[#6aad45] inline-block" />
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
            Acesse todos os eventos gratuitamente.
          </h2>
          <p className="text-white/60 mb-10 font-light text-lg">
            Associados têm acesso prioritário e gratuito a todos os eventos e capacitações da ABRAAM.
          </p>
          <Link
            href="/associe-se"
            className="inline-flex px-10 py-4 bg-[#6aad45] text-white font-extrabold text-sm tracking-wide rounded-full hover:bg-[#5a9a38] transition-all shadow-xl hover:-translate-y-0.5"
          >
            Associe-se e Participe
          </Link>
        </div>
      </section>
    </div>
  );
}
