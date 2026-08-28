const FEATURES = [
  {
    title: "Multi-canal",
    description: "WhatsApp, Telegram e mais num painel só, sem alternar entre apps.",
  },
  {
    title: "Multi-marketplace",
    description: "Mercado Livre, Amazon, Shopee e Magalu, cada um com seu link de afiliado certo.",
  },
  {
    title: "Automação completa",
    description: "Da oferta encontrada até o disparo, sem precisar tocar em nada no meio do caminho.",
  },
  {
    title: "Templates seus",
    description: "Monta a mensagem do seu jeito uma vez, o Aflyo repete em toda oferta nova.",
  },
  {
    title: "Vitrine pública",
    description: "Uma página com a sua cara pra reunir todas as ofertas ativas num link só.",
  },
  {
    title: "Painel de resultados",
    description: "Cliques, disparos e canais que mais convertem, tudo num lugar só.",
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-mint-700">
            Funcionalidades
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Tudo que um afiliado precisa pra escalar
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-line p-6 transition-colors hover:border-mint-200 hover:bg-ice/30"
            >
              <h3 className="text-base font-bold tracking-tight">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
