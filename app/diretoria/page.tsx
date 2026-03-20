import Link from "next/link";
import Image from "next/image";

const board = [
  {
    name: "Dr. Silvio P. Santello",
    role: "Presidente",
    initial: "S",
    photo: "/diretoria/DrSilvioSantello.jpeg",
    photoPosition: "center 10%",
    contribution: "Idealizador e fundador da ABRAAM, lidera as iniciativas estratégicas e institucionais da associação.",
    instagram: "https://www.instagram.com/silviosantello.adv",
  },
  {
    name: "Dr. Daniel Freitas",
    role: "Vice-Presidente",
    initial: "D",
    photo: "/diretoria/DrDanielFreitas.jpeg",
    photoPosition: "center 10%",
    contribution: "Coordena as iniciativas de inovação tecnológica e os grupos de estudo em Direito Digital.",
    instagram: "https://www.instagram.com/eusou.danielfreitas",
  },
  {
    name: "Dra. Caroline Oliva Bromerschenckel",
    role: "Diretor Jurídico e Compliance",
    initial: "C",
    photo: "/diretoria/DraCarolineOliva.jpeg",
    photoPosition: "center 10%",
    contribution: "Responsável pelas notas técnicas, posicionamentos institucionais e relações com o Poder Público.",
    instagram: "https://www.instagram.com/caroline.bromerschenckel",
  },
  {
    name: "Dra. Maria José de Almeida",
    role: "Diretor Financeiro e de Captação",
    initial: "M",
    photo: "/diretoria/DraMariaAlmeida.jpeg",
    photoPosition: "center 10%",
    contribution: "Coordena as atividades administrativas e os processos de filiação da ABRAAM.",
    instagram: "https://www.instagram.com/maria.almeida.adv",
  },
  {
    name: "Dra. Fabiana Lopes P. Santello",
    role: "Diretor Acadêmico e de Qualificação",
    initial: "F",
    photo: "/diretoria/DraFabianaSantello.jpeg",
    photoPosition: "center 20%",
    contribution: "Planeja e coordena os eventos, congressos e encontros promovidos pela ABRAAM.",
    instagram: "https://www.instagram.com/prof.fabianalopes",
  },
  {
    name: "Dr. Anderson Xavier de Campos",
    role: "Diretor Adjunto e Social",
    initial: "A",
    photo: "/diretoria/DrAndersonCampos.png",
    photoPosition: "center 10%",
    contribution: "Responsável pela presença institucional, publicações e comunicação da ABRAAM.",
    instagram: "https://www.instagram.com/andersoncampos.advogado",
  },
];

const gradients = [
  "linear-gradient(135deg, #1a4a88, #2683c1)",
  "linear-gradient(135deg, #2683c1, #6aad45)",
  "linear-gradient(135deg, #1a4a88, #2683c1)",
  "linear-gradient(135deg, #0f2d57, #1a4a88)",
  "linear-gradient(135deg, #2683c1, #1a4a88)",
  "linear-gradient(135deg, #1a4a88, #6aad45)",
];

export default function DiretoriaPage() {
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
            Liderança
          </span>
          <h1 className="fade-up delay-1 text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Nossa Diretoria
          </h1>
          <p className="fade-up delay-2 text-white/70 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
            Profissionais comprometidos com o desenvolvimento e o futuro da advocacia brasileira.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1200 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M1200 0L0 72H1200V0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* DIRETORIA GRID */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-3 text-[#6aad45] text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-8 h-px bg-[#6aad45] inline-block" />
              Diretoria Executiva
              <span className="w-8 h-px bg-[#6aad45] inline-block" />
            </span>
            <p className="text-[#5a6a80] max-w-xl mx-auto font-light">
              Conheça os advogados que fundaram e lideram a ABRAAM com visão, compromisso e excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {board.map((member, index) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col border border-[#e0e7ef]"
              >
                {/* Photo area */}
                <div className="relative h-72 overflow-hidden">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: member.photoPosition ?? "center" }}
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: gradients[index % gradients.length] }}
                    >
                      <div className="w-24 h-24 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center text-white text-4xl font-extrabold">
                        {member.initial}
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-[#1a4a88] font-extrabold text-lg mb-0.5">{member.name}</h3>
                  <p className="text-[#6aad45] text-xs font-bold tracking-widest uppercase mb-6">
                    {member.role}
                  </p>

                  <div className="text-sm flex-1">
                    <p className="text-[#5a6a80] font-light leading-relaxed">{member.contribution}</p>
                  </div>

                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 px-4 py-2 border-2 border-[#e0e7ef] text-[#1a4a88] text-xs font-bold rounded-full hover:border-[#E1306C] hover:text-[#E1306C] transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <circle cx="12" cy="12" r="4"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                      </svg>
                      Instagram
                    </a>
                  )}
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
            Conheça nossa proposta e faça parte.
          </h2>
          <p className="text-white/80 mb-10 font-light text-lg">
            A maior rede de advogados modernos do Brasil — gratuita, sem mensalidade.
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
