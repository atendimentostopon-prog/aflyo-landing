import { SITE } from "@/lib/constants";

export default function FinalCta() {
  return (
    <section className="border-t border-line bg-graphite">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Teste o Aflyo por 7 dias, de graça.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
          Cria a conta, conecta seus canais e deixa o Aflyo disparar a primeira oferta hoje mesmo.
          Sem cartão de crédito pra começar.
        </p>
        <a
          href={SITE.signupUrl}
          className="mt-8 inline-block rounded-xl bg-mint-500 px-8 py-3.5 text-base font-bold text-graphite transition-transform hover:-translate-y-0.5"
        >
          Começar grátis por 7 dias
        </a>
      </div>
    </section>
  );
}
