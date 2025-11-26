export interface Project {
  title: string;
  image: string;
  description?: string;
}

export const projectsData: Project[] = [
  {
    title: "The Wizarding World of Harry Potter",
    image: "/images/projects/harry-potter.jpg",
    description: "Theme park attraction development and production",
  },
  {
    title: "Transformers: The Ride",
    image: "/images/projects/transformers.jpg",
    description: "Immersive attraction experience",
  },
  {
    title: "Universal Studios Theme Park",
    image: "/images/projects/universal.jpg",
    description: "Location-based entertainment development",
  },
];

