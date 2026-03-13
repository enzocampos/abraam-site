import Link from "next/link";

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

      {/* EM BREVE */}
      <section className="py-36 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-[#f4f7fb] flex items-center justify-center mx-auto mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-[#2683c1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
          </div>
          <span className="inline-flex items-center gap-3 text-[#6aad45] text-xs font-bold tracking-widest uppercase mb-5">
            <span className="w-8 h-px bg-[#6aad45] inline-block" />
            Em Breve
            <span className="w-8 h-px bg-[#6aad45] inline-block" />
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a4a88] mb-6">
            Nossa agenda está sendo preparada
          </h2>
          <p className="text-[#5a6a80] text-lg font-light leading-relaxed mb-10">
            Em breve teremos congressos, webinars e grupos de estudo para os associados da ABRAAM. Associe-se gratuitamente para ser o primeiro a saber quando os eventos forem divulgados.
          </p>
          <Link
            href="/associe-se"
            className="inline-flex px-10 py-4 bg-[#6aad45] text-white font-extrabold text-sm tracking-wide rounded-full hover:bg-[#5a9a38] transition-all shadow-xl hover:-translate-y-0.5"
          >
            Associe-se Gratuitamente
          </Link>
        </div>
      </section>
    </div>
  );
}
