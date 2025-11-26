export interface Community {
  organization: string;
  role?: string;
  period?: string;
  description: string;
  logo?: string;
}

export const communityData: Community[] = [
  {
    organization: "Themed Entertainment Association (TEA)",
    role: "Active Member",
    description: "Participate in industry events, networking, and knowledge sharing within the themed entertainment community. Contribute to discussions on innovation and best practices in attraction design and production.",
  },
  {
    organization: "Women in Animation",
    role: "Member",
    description: "Support and promote women working in animation and entertainment industries. Engage in mentorship programs and professional development initiatives.",
  },
  {
    organization: "Producers Guild of America",
    role: "Member",
    description: "Active participant in professional development programs and industry advocacy. Network with fellow producers across film, television, and new media.",
  },
];

