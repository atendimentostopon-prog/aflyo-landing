import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-1">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm space-y-3">
            <div className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 18L12 4L20 18" stroke="#3dd98f" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="14.5" r="1.6" fill="#3dd98f" />
              </svg>
              {SITE.name}
            </div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Automação de divulgação de ofertas pra afiliado de marketplace que quer parar de postar link por link.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:flex sm:gap-16">
            <div className="space-y-3">
              <p className="font-bold text-ink">Produto</p>
              <div className="flex flex-col gap-2 text-ink-secondary">
                <a href="#como-funciona" className="hover:text-ink">Como funciona</a>
                <a href="#funcionalidades" className="hover:text-ink">Funcionalidades</a>
                <a href="#planos" className="hover:text-ink">Planos</a>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-bold text-ink">Conta</p>
              <div className="flex flex-col gap-2 text-ink-secondary">
                <a href={SITE.signupUrl} className="hover:text-ink">Criar conta</a>
                <a href={SITE.loginUrl} className="hover:text-ink">Entrar</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-tertiary sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-ink-secondary">Termos de Uso</a>
            <a href="#" className="hover:text-ink-secondary">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
