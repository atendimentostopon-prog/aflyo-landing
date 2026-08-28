const TRUST_POINTS = [
  {
    title: "Dados protegidos",
    description: "Seus links de afiliado e credenciais ficam só com você, criptografados de ponta a ponta.",
  },
  {
    title: "Pagamento pela Stripe",
    description: "Nenhum dado de cartão passa pelo nosso servidor. A cobrança é feita direto pela Stripe.",
  },
  {
    title: "Suporte de verdade",
    description: "Sem robô de atendimento genérico. Fala com quem constrói o produto.",
  },
];

export default function SocialProof() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <p className="text-xs font-bold uppercase tracking-wider text-mint-700">
          Por que confiar no Aflyo
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Feito por quem também é do ramo
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-secondary">
          O Aflyo nasceu da mesma dor de quem hoje ainda posta oferta uma por uma.
          Construído pra durar, não pra sumir depois de um mês.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {TRUST_POINTS.map((point) => (
            <div key={point.title} className="rounded-2xl bg-surface-1 p-6 text-left">
              <h3 className="text-sm font-bold tracking-tight">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
