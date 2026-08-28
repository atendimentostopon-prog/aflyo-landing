import { MessageCircle, Send } from "lucide-react";
import { SITE, TARGET_MARKETPLACES } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="border-b border-line bg-surface-1">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-mint-200 bg-ice px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-mint-800">
            <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
            Feito pra afiliado de marketplace
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Pare de postar oferta
            <br />
            link por link<span className="text-mint-500">.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-secondary">
            O Aflyo monitora as promoções que valem a pena e dispara sozinho pros seus canais.
            Você cadastra uma vez, ele repete todo dia.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE.signupUrl}
              className="rounded-xl bg-graphite px-7 py-3.5 text-center text-base font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              Começar grátis por 7 dias
            </a>
            <a
              href="#como-funciona"
              className="rounded-xl border border-line-strong px-7 py-3.5 text-center text-base font-bold text-ink transition-colors hover:bg-surface-0"
            >
              Ver como funciona
            </a>
          </div>

          <p className="mt-4 text-xs font-medium text-ink-tertiary">
            Sem cartão de crédito pra testar. Cancele quando quiser.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-ink-tertiary">
            <span className="text-xs font-bold uppercase tracking-wider text-ink-tertiary/80">
              Funciona com
            </span>
            {TARGET_MARKETPLACES.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>

        {/* Product mockup card */}
        <div className="rounded-2xl border border-line bg-surface-0 p-5 shadow-xl shadow-graphite/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-mint-500" />
              <span className="text-sm font-bold text-ink">Kindle Paperwhite 16GB</span>
            </div>
            <span className="rounded-full bg-ice px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-mint-800">
              Ativa
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-surface-1 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-ink-tertiary">Enviados</p>
              <p className="mt-1 text-lg font-bold text-ink">12.458</p>
            </div>
            <div className="rounded-xl bg-surface-1 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-ink-tertiary">Cliques</p>
              <p className="mt-1 text-lg font-bold text-ink">3.982</p>
            </div>
          </div>

          <div className="mt-3 rounded-xl bg-surface-1 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-ink-tertiary">Desempenho</p>
            <svg viewBox="0 0 240 48" className="mt-2 h-10 w-full" preserveAspectRatio="none">
              <polyline
                points="0,38 30,30 60,34 90,18 120,24 150,10 180,16 210,6 240,12"
                fill="none"
                stroke="#3dd98f"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-ink-secondary">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-1 text-mint-700">
              <MessageCircle size={13} strokeWidth={2.2} />
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-1 text-mint-700">
              <Send size={13} strokeWidth={2.2} />
            </span>
            <span>Disparado pra 4 canais</span>
          </div>
        </div>
      </div>
    </section>
  );
}
