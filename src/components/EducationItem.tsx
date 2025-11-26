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
    <div className="flex items-start gap-6 mb-6">
      <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center bg-gray-100 rounded-lg text-3xl">
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
      <div className="flex-1 pb-6 border-b border-gray-300">
        <h3 className="text-xl font-semibold mb-1">{institution}</h3>
        {degree && <p className="text-gray-700">{degree}</p>}
        {field && <p className="text-gray-700">{field}</p>}
        {period && <p className="text-sm text-gray-600 mt-1">{period}</p>}
        {description && (
          <p className="text-gray-800 mt-2 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}

