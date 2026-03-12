import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, #0f2d57 0%, #1a4a88 100%)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/abraam-logo%20copy.png"
              alt="ABRAAM"
              className="h-12 object-contain mb-6"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-sm font-light">
              Associação Brasileira de Advocacia Moderna — promovendo a modernização,
              qualificação e fortalecimento da advocacia brasileira.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { label: "IG", aria: "Instagram" },
                { label: "LI", aria: "LinkedIn" },
                { label: "WA", aria: "WhatsApp" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.aria}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-[#6aad45] hover:bg-[#6aad45]/20 transition-all text-xs font-bold"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/sobre", label: "Sobre a ABRAAM" },
                { href: "/diretoria", label: "Diretoria" },
                { href: "/eventos", label: "Eventos" },
                { href: "/publicacoes", label: "Publicações" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#6aad45] text-sm font-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-5">
              Institucional
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/associe-se", label: "Associe-se" },
                { href: "/privacidade", label: "Política de Privacidade" },
                { href: "/termos", label: "Termos de Uso" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#6aad45] text-sm font-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-white/30 text-xs font-light">contato@abraam.org.br</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs font-light">
            © {new Date().getFullYear()} ABRAAM — Associação Brasileira de Advocacia Moderna. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs font-light">
            Entidade civil sem fins lucrativos
          </p>
        </div>
      </div>
    </footer>
  );
}
