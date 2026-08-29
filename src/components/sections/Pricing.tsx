import { PLANS, SITE } from "@/lib/constants";

function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function Pricing() {
  return (
    <section id="planos" className="border-t border-line bg-surface-1">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-mint-700">Planos</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Comece grátis, escolha o plano depois
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-secondary">
            7 dias pra testar de verdade, com tudo liberado. Sem cartão de crédito pra começar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const price = plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-3xl border p-7 ${
                  plan.highlight
                    ? "border-mint-400 bg-surface-0 shadow-xl shadow-mint-500/10"
                    : "border-line bg-surface-0"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-mint-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-graphite">
                    Mais popular
                  </span>
                )}

                <h3 className="text-lg font-bold tracking-tight">{plan.name}</h3>
                <p className="mt-1 text-sm text-ink-secondary">{plan.tagline}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-sm font-bold text-ink-secondary">R$</span>
                  <span className="font-display text-4xl font-bold tracking-tight">
                    {formatPrice(price)}
                  </span>
                  <span className="text-sm text-ink-tertiary">/mês</span>
                </div>

                <a
                  href={SITE.signupUrl}
                  className={`mt-6 rounded-xl px-4 py-3 text-center text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                    plan.highlight ? "bg-graphite text-white" : "border border-line-strong text-ink"
                  }`}
                >
                  Começar grátis
                </a>

                <ul className="mt-7 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature.label} className="flex items-start gap-2.5 text-ink-secondary">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="mt-0.5 flex-shrink-0 text-mint-600"
                        aria-hidden="true"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {feature.label}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
