export interface Project {
  title: string;
  image: string;
  description?: string;
  // Modal-specific fields
  logo?: string;
  mainImage?: string;
  location?: string;
  openingDate?: string;
  role?: string;
  roleDescription?: string | string[];
  responsibilities?: string[];
  galleryImages?: string[];
}

export const projectsData: Project[] = [
  {
    title: "Super Nintendo World Japan",
    image: "/images/projects/super-nintendo-world-japan.jpg",
    logo: "/images/projects/super-nintendo-world-logo.png",
    mainImage: "/images/projects/super-nintendo-world-main-image.png",
    location: "Universal Studios Japan, Osaka, Japan",
    openingDate: "March 18, 2021",
    role: "SHOW PRODUCER",
    roleDescription: `As a Show Producer I was responsible for liaising with the Creative, Fabrication, and Construction teams for the SNW area at Universal Studios Japan. 
      This included vendor reviews, client presentations and walkthroughs, play-testing, and live entertainment rehearsals through to opening day.  
      I was also the lead Producer on Placemaking for USJ which consisted of seasonal and specially branded overlays throughout the park inclusive of Japanese IPs such as Sailor Moon, One Piece, Lupin, Conan, Evangelion, etc. coordinating heavily with the operations and internal USJ teams to ensure brand consistency across all departments.`,
    responsibilities: [
      'IP & Brand Management',
      'Scope Management',
      'Vendor Management',
      'Asset Tracking', 
      'Executive Reporting', 
      'Cross-Departmental Coordination',
      'Marketing', 
      'Entertainment', 
      'Park Operations',
      'Merchandising', 
      'Food and Beverage',
      'Technology',
    ],
    galleryImages: [
      "/images/projects/super-nintendo-world-image-1.jpg",
      "/images/projects/super-nintendo-world-image-2.jpg",
      "/images/projects/super-nintendo-world-image-3.jpg",
      "/images/projects/super-nintendo-world-image-4.png",
      "/images/projects/super-nintendo-world-image-5.webp",
      "/images/projects/super-nintendo-world-image-6.jpg",
    ],
  },
  {
    title: "Warner Bros. World Abu Dhabi",
    image: "/images/projects/warner-bros-world-abu-dhabi.jpg",
    logo: "/images/projects/warner-bros-world-logo.jpg",
    mainImage: "/images/projects/warner-bros-world-main-image.png",
    location: "Yas Island, Abu Dhabi, UAE",
    openingDate: "",
    role: "DESIGN MANAGER / PROJECT COORDINATOR",
    roleDescription: `I started this project as a Project Coordinator on the attractions team, overseeing 12 ride/attractions across the DC Comics and Cartoon Junction themed areas.
      A year after Schematic Design, I was promoted to Design Manager with a main role being client and team communications, IP management and production quality assurance.
      Working closely with designers, show set teams, artists, and fabrication teams I liaised with the on-site production teams to ensure assets were delivered on time and within brand guidelines and standards. `,
    responsibilities: [
      'IP & Brand Management', 
      'Approval Tracking', 
      'Design Management', 
      'Media & Fabrication Management',
      'Concept Development', 
      'Schematic and Detail Design Team Management', 
      'Client Presentations and Reviews',
    ],
    galleryImages: [
      "/images/projects/warner-bros-world-image-1.jpg",
      "/images/projects/warner-bros-world-image-2.jpg",
      "/images/projects/warner-bros-world-image-3.jpg",
      "/images/projects/warner-bros-world-image-4.jpg",
      "/images/projects/warner-bros-world-image-5.jpg",
      "/images/projects/warner-bros-world-image-6.jpg",
    ],
  },
  {
    title: "The Making of Harry Potter, London",
    image: "/images/projects/making-of-harry-potter-london.jpg",
    logo: "/images/projects/harry-potter-london-logo.png",
    mainImage: "/images/projects/harry-potter-london-main-image.png",
    location: "London, UK",
    openingDate: "March 31, 2017 (Forbidden Forest)",
    role: "PORTFOLIO MANAGER & PRODUCER",
    roleDescription: `Working directly with Studio Executives in both Los Angeles and London, I led all Warner Bros. project teams at Thinkwell Group.
      As the main point of contact for the studios, our scope included both the London and Hollywood Tour, seasonal and special events, blue sky concepts for new projects and expansions, production management and on-going strategy sessions with further IP development.
      I worked directly with The Blair Partnership on brand initiatives and approvals while managing our agency design team deliverables and pitches.
      Outside of Wizarding World projects and tours, I worked closely with WB Executives on explorations of other IP related projects.`,
    responsibilities: [
      'Portfolio Management',
      'IP & Brand Management',
      'Creative Development',
      'Vendor Management',
      'Executive Reporting', 
      'IP Strategy',
      'Presentations and Pitching', 
    ],
    galleryImages: [
      "/images/projects/harry-potter-london-image-1.jpg",
      "/images/projects/harry-potter-london-image-2.jpg",
      "/images/projects/harry-potter-london-image-3.jpg",
      "/images/projects/harry-potter-london-image-4.jpg",
      "/images/projects/harry-potter-london-image-5.jpg",
      "/images/projects/harry-potter-london-image-6.jpg",
    ],
  },
];

