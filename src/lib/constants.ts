export const SITE = {
  name: "Aflyo",
  url: "https://www.aflyo.com.br",
  appUrl: "https://app.aflyo.com.br",
  signupUrl: "https://app.aflyo.com.br/signup",
  loginUrl: "https://app.aflyo.com.br/login",
  description:
    "Automação de divulgação de ofertas para afiliados de marketplace. Monitora promoções e dispara automaticamente em múltiplos canais, sem postar link por link.",
} as const;

export interface PlanFeature {
  label: string;
}

export interface Plan {
  id: "starter" | "profissional" | "business";
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  highlight: boolean;
  tagline: string;
  features: PlanFeature[];
}

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 47.9,
    yearlyPrice: 479,
    highlight: false,
    tagline: "Pra começar a automatizar sem complicação.",
    features: [
      { label: "Monitora até 5 grupos de origem" },
      { label: "Até 3 conexões WhatsApp" },
      { label: "Até 2 conexões Telegram" },
      { label: "Até 20.000 ofertas ativas" },
      { label: "Disparo em massa + agendamento" },
      { label: "Analytics avançado" },
      { label: "Shopee, Amazon, Mercado Livre" },
    ],
  },
  {
    id: "profissional",
    name: "Profissional",
    monthlyPrice: 97,
    yearlyPrice: 970,
    highlight: true,
    tagline: "Pra quem já dispara todo dia e quer escalar.",
    features: [
      { label: "Monitora até 30 grupos de origem" },
      { label: "Até 5 conexões WhatsApp" },
      { label: "Até 3 conexões Telegram" },
      { label: "Ofertas ilimitadas" },
      { label: "Templates de mensagem customizados" },
      { label: "Remove a marca Aflyo da vitrine" },
      { label: "Tudo do Starter" },
    ],
  },
  {
    id: "business",
    name: "Business",
    monthlyPrice: 197,
    yearlyPrice: 1970,
    highlight: false,
    tagline: "Pra operação grande, com times e múltiplos canais.",
    features: [
      { label: "Grupos de origem ilimitados" },
      { label: "WhatsApp e Telegram ilimitados" },
      { label: "Ofertas ilimitadas" },
      { label: "Templates de mensagem customizados" },
      { label: "Remove a marca Aflyo da vitrine" },
      { label: "Tudo do Profissional" },
    ],
  },
];

export const NAV_LINKS = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#planos", label: "Planos" },
] as const;

export const TARGET_MARKETPLACES = [
  "Mercado Livre",
  "Amazon",
  "Shopee",
  "Magalu",
] as const;
