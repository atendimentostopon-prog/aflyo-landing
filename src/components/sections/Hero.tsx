import { SITE, TARGET_MARKETPLACES } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[560px] blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 30%, rgba(94,231,165,0.28), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-4 pb-20 pt-20 text-center sm:px-6 sm:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-mint-200 bg-ice px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-mint-800">
          <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
          Feito pra afiliado de marketplace
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          Pare de postar oferta
          <br />
          <span className="text-gradient-mint">link por link.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-secondary sm:text-xl">
          O Aflyo monitora as promoções que valem a pena e dispara sozinho pros seus canais.
          Você cadastra uma vez, ele repete todo dia.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={SITE.signupUrl}
            className="btn-gradient w-full rounded-xl px-7 py-3.5 text-base font-bold shadow-lg shadow-mint-500/25 transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Começar grátis por 7 dias
          </a>
          <a
            href="#como-funciona"
            className="w-full rounded-xl border border-line-strong px-7 py-3.5 text-base font-bold text-ink transition-colors hover:bg-surface-1 sm:w-auto"
          >
            Ver como funciona
          </a>
        </div>

        <p className="mt-4 text-xs font-medium text-ink-tertiary">
          Sem cartão de crédito pra testar. Cancele quando quiser.
        </p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-ink-tertiary">
          <span className="text-xs font-bold uppercase tracking-wider text-ink-tertiary/80">
            Funciona com
          </span>
          {TARGET_MARKETPLACES.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
