interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  years: string;
  description: string;
}

export default function ExperienceCard({
  title,
  company,
  location,
  period,
  description,
}: ExperienceCardProps) {
  const hasMetadata = company || location || period;
  
  return (
    <div className="mb-8 pb-8 border-b border-gray-300 last:border-b-0">
      <div className="mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        {company && <p className="text-lg text-gray-700">{company}</p>}
      </div>
      {hasMetadata && (
        <div className="text-sm text-gray-600 mb-3">
          {location && <span>{location}</span>}
          {location && period && <span className="mx-2">•</span>}
          {period && <span>{period}</span>}
        </div>
      )}
      {description && (
        <p className="text-gray-800 leading-relaxed whitespace-pre-line">{description}</p>
      )}
    </div>
  );
}

