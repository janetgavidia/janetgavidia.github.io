import Image from 'next/image';

interface CommunityCardProps {
  organization: string;
  role?: string;
  period?: string;
  description: string;
  logo?: string;
}

export default function CommunityCard({
  organization,
  role,
  period,
  description,
  logo,
}: CommunityCardProps) {
  return (
    <div className="mb-6 pb-6 border-b border-gray-300 last:border-b-0">
      <div className="flex items-start gap-4">
        {logo && (
          <div className="relative h-16 w-16 flex-shrink-0">
            <Image
              src={logo}
              alt={organization}
              fill
              className="object-contain"
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1">{organization}</h3>
          {role && <p className="text-gray-700 mb-1">{role}</p>}
          {period && <p className="text-sm text-gray-600 mb-2">{period}</p>}
          <p className="text-gray-800 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

