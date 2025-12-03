export interface Community {
  organization: string;
  role?: string;
  period?: string;
  description: string;
  logo?: string;
  note?: {
    before?: string;
    linkLabel: string;
    linkHref: string;
    after?: string;
  };
  projects?: { label: string; href?: string }[];
}

export const communityData: Community[] = [
  {
    organization: "Ryman Arts",
    role: "Board Member",
    period: "2025-2028",
    description: "Ryman Arts' mission is to transform lives by creating access and opportunity for a diverse community of young artists through rigorous education in fundamental art skills and mentoring.",
    note: {
      before: "Find out more at the",
      linkLabel: "Ryman Arts Website",
      linkHref: "https://www.rymanarts.org/",
      after: "or connect with me for a discussion on potential partnerships.",
    },
    logo: "/images/logos/ryman-arts.png",
  },
  {
    organization: "Themed Entertainment Association (TEA)",
    role: "Western Division Board Member",
    period: "2023-2024",
    description: "TEA’s mission is to connect, celebrate, and support the people who imagine, design, and build compelling places and experiences worldwide.",
    logo: "/images/logos/TEA.png",
  },
  {
    organization: "Social Gastronomy Movement",
    role: "Consultant / Advisor",
    period: "2020-2024",
    description: "The Social Gastronomy Movement’s mission is to harness the power of food to drive social change, uniting chefs, communities, and organizations around solutions that promote equity, sustainability, and dignity.",
    projects: [
      { label: "Heineken Worlds Together", href: "https://www.socialgastronomy.org/world-together-with-heineken" },
      { label: "Emergency Fund with 50 Best Restaurants", href: "https://www.socialgastronomy.org/sgm-fund" },
      { label: "United Nations Food Systems Summit", href: "https://www.socialgastronomy.org/un-food-systems-summit-with-griffith-foods" },
    ],
    logo: "/images/logos/SGM.png",
  },
];
