const STEPS = [
  {
    title: "Monitora as ofertas",
    description:
      "Você aponta as fontes (grupos, canais, sites) e o Aflyo fica de olho 24h, identificando as promoções que realmente valem a pena.",
  },
  {
    title: "Gera a divulgação pronta",
    description:
      "Título, preço, cupom e link de afiliado organizados automaticamente num template que você já configurou do seu jeito.",
  },
  {
    title: "Dispara nos seus canais",
    description:
      "WhatsApp, Telegram e mais, tudo de uma vez. Você só acompanha o resultado no painel.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="border-t border-line bg-surface-1">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-mint-700">
            Como funciona
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Três passos e o resto é automático
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-line bg-surface-0 p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ice font-display text-base font-bold text-mint-800">
                {index + 1}
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
