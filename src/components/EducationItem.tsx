import Image from 'next/image';

interface EducationItemProps {
  institution: string;
  degree?: string;
  field?: string;
  period?: string;
  logo?: string;
  description?: string;
}

const emojis = ['🎓', '📚', '🎨', '🍳', '🌍', '💼', '🎬', '📊'];

export default function EducationItem({
  institution,
  degree,
  field,
  period,
  logo,
  description,
}: EducationItemProps) {
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  
  return (
    <div className="flex items-start gap-4 mb-0 pl-24">
      <div className="flex-shrink-0 h-24 w-24 flex items-start justify-start text-3xl">
        {logo ? (
          <div className="relative h-full w-full">
            <Image
              src={logo}
              alt={institution}
              fill
              className="object-contain p-2"
            />
          </div>
        ) : (
          <span>{randomEmoji}</span>
        )}
      </div>
      <div className="flex-1 pb-0 text-[0.81rem] leading-tight space-y-1">
        <h3 className="text-lg font-semibold">{institution}</h3>
        {degree && <p className="text-gray-700 leading-tight">{degree}</p>}
        {field && <p className="text-gray-700 leading-tight">{field}</p>}
        {period && <p className="text-sm text-gray-600 leading-tight">{period}</p>}
        {description && (
          <p className="text-gray-800 mt-2 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
