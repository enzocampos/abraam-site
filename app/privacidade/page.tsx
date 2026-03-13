import Link from "next/link";

export default function PrivacidadePage() {
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
            Política de Privacidade
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
            <h2 className="text-xl font-extrabold text-[#1a4a88] mb-3">1. Quem somos</h2>
            <p>
              A ABRAAM — Associação Brasileira de Advocacia Moderna — é uma associação sem fins lucrativos voltada ao desenvolvimento e fortalecimento da advocacia brasileira. Esta política descreve como coletamos, utilizamos e protegemos os dados pessoais fornecidos por nossos associados e visitantes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#1a4a88] mb-3">2. Dados que coletamos</h2>
            <p>Coletamos os seguintes dados quando você se associa ou entra em contato conosco:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Nome completo</li>
              <li>CPF</li>
              <li>Número da OAB e Seccional (quando aplicável)</li>
              <li>E-mail e telefone</li>
              <li>Estado e cidade de atuação</li>
              <li>Área de atuação profissional</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#1a4a88] mb-3">3. Como utilizamos seus dados</h2>
            <p>Seus dados são utilizados exclusivamente para:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Processar e gerenciar sua filiação à ABRAAM</li>
              <li>Enviar comunicados institucionais e informativos (quando autorizado)</li>
              <li>Organizar e divulgar eventos para associados</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#1a4a88] mb-3">4. Compartilhamento de dados</h2>
            <p>
              A ABRAAM não vende, aluga ou compartilha seus dados pessoais com terceiros para fins comerciais. Os dados poderão ser compartilhados apenas quando exigido por lei ou por determinação judicial.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#1a4a88] mb-3">5. Armazenamento e segurança</h2>
            <p>
              Seus dados são armazenados em ambiente seguro e protegido. Adotamos medidas técnicas e organizacionais para prevenir acessos não autorizados, perda ou divulgação indevida das informações.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#1a4a88] mb-3">6. Seus direitos (LGPD)</h2>
            <p>Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar, corrigir ou atualizar seus dados</li>
              <li>Solicitar a exclusão dos seus dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>
            <p className="mt-3">
              Para exercer esses direitos, entre em contato pelo e-mail: <span className="text-[#2683c1] font-semibold">contato@abraam.com.br</span>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#1a4a88] mb-3">7. Contato</h2>
            <p>
              Em caso de dúvidas sobre esta política, entre em contato com a ABRAAM pelo e-mail <span className="text-[#2683c1] font-semibold">contato@abraam.com.br</span> ou acesse nossa{" "}
              <Link href="/contato" className="text-[#6aad45] font-semibold hover:underline">página de contato</Link>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
