export interface Education {
  institution: string;
  degree?: string;
  field?: string;
  period?: string;
  logo?: string;
  description?: string;
}

export const educationData: Education[] = [
  {
    institution: "IE Business School, Spain",
    degree: "",
    field: "MBA International Business, Corporate Strategy",
    logo: "/images/logos/ie-business-school.png",
  },
  {
    institution: "University of California, Los Angeles",
    degree: "",
    field: "Sociology, Film & Television Minor",
    logo: "/images/logos/ucla.png",
  },
  {
    institution: "Art Center at Night",
    degree: "",
    field: "Communication Studies, Digital Design, Typography, Environmental Design",
    logo: "/images/logos/art-center.png",
  },
  {
    institution: "Hofmann Culinary School",
    degree: "Especialidad en Fundamentos de Cocina",
    field: "",
    logo: "/images/logos/hofmann.png",
  },
];
