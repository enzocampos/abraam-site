import Link from "next/link";

export default function TermosPage() {
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
          <span className="inline-flex items-center gap-2 px-5 py-2 border border-white/25 rounded-full text-white/75 text-xs font-bold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6aad45] inline-block" />
            Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Termos de Uso
          </h1>
          <p className="text-white/70 text-lg font-light max-w-2xl mx-auto">
            Última atualização: março de 2026
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1200 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M1200 0L0 72H1200V0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto prose prose-sm text-[#5a6a80] leading-relaxed space-y-10">

          <div>
            <h2 className="text-xl font-extrabold text-[#1a4a88] mb-3">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site da ABRAAM — Associação Brasileira de Advocacia Moderna — ou ao realizar sua filiação, você concorda com os presentes Termos de Uso. Caso não concorde com algum item, recomendamos que não utilize nossos serviços.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#1a4a88] mb-3">2. Sobre a ABRAAM</h2>
            <p>
              A ABRAAM é uma associação sem fins lucrativos que tem por objetivo promover o desenvolvimento, a qualificação e o fortalecimento da advocacia brasileira. A filiação é gratuita e não implica em qualquer vínculo empregatício ou representação legal.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#1a4a88] mb-3">3. Filiação</h2>
            <p>
              A filiação à ABRAAM é voluntária, gratuita e está aberta a advogados, bacharéis em Direito e demais profissionais ligados à área jurídica. A ABRAAM se reserva o direito de recusar ou cancelar filiações que violem suas normas internas ou o Código de Ética da OAB.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#1a4a88] mb-3">4. Uso do Site</h2>
            <p>É vedado ao usuário:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Usar o site para fins ilícitos ou que violem direitos de terceiros</li>
              <li>Reproduzir ou distribuir conteúdos da ABRAAM sem autorização expressa</li>
              <li>Inserir informações falsas no formulário de filiação</li>
              <li>Tentar acessar áreas restritas sem autorização</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#1a4a88] mb-3">5. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo disponibilizado no site da ABRAAM — incluindo textos, logotipos, imagens e materiais institucionais — é de propriedade exclusiva da associação e está protegido pela legislação de direitos autorais. A reprodução sem autorização é proibida.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#1a4a88] mb-3">6. Limitação de Responsabilidade</h2>
            <p>
              A ABRAAM não se responsabiliza por danos decorrentes do uso indevido do site, por interrupções temporárias no serviço ou por conteúdos de sites terceiros eventualmente linkados.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#1a4a88] mb-3">7. Alterações nos Termos</h2>
            <p>
              A ABRAAM pode atualizar estes Termos de Uso a qualquer momento. As alterações entram em vigor na data de sua publicação nesta página. Recomendamos a leitura periódica deste documento.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#1a4a88] mb-3">8. Foro e Legislação Aplicável</h2>
            <p>
              Estes Termos são regidos pelas leis brasileiras. Eventuais disputas serão submetidas ao foro da comarca de Brasília/DF, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#1a4a88] mb-3">9. Contato</h2>
            <p>
              Para dúvidas sobre estes Termos, entre em contato pelo e-mail <span className="text-[#2683c1] font-semibold">contato@abraam.com.br</span> ou acesse nossa{" "}
              <Link href="/contato" className="text-[#6aad45] font-semibold hover:underline">página de contato</Link>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
