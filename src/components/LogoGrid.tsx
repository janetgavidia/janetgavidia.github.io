import Image from 'next/image';

interface Logo {
  name: string;
  src: string;
  width?: number;
  height?: number;
}

interface LogoGridProps {
  logos: Logo[];
}

export default function LogoGrid({ logos }: LogoGridProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 items-center justify-items-center">
      {logos.map((logo, index) => (
        <div key={index} className="relative h-12 w-24 grayscale hover:grayscale-0 transition-all duration-300">
          <Image
            src={logo.src}
            alt={logo.name}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}

