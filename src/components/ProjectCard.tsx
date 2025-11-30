import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  image: string;
  description?: string;
}

export default function ProjectCard({ title, image }: ProjectCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white text-lg font-medium px-4 text-center">
          {title}
        </p>
      </div>
    </div>
  );
}

