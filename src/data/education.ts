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
    institution: "Sociology, Film & Television Minor",
    degree: "",
    field: "",
    logo: "/images/logos/ucla.png",
  },
  {
    institution: "Art Center At Night Courses",
    degree: "",
    field: "Communication Studies, Digital Design, Typography, Environmental Design",
    logo: "/images/logos/art-center.png",
  },
  {
    institution: "MBA",
    degree: "",
    field: "International Business, Corporate Strategy",
    logo: "/images/logos/ie-business-school.png",
  },
  {
    institution: "Diploma Hofmann",
    degree: "Especialidad Cocina",
    field: "",
    logo: "/images/logos/hofmann.png",
  },
];

