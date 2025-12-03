import Image from 'next/image';

interface CommunityCardProps {
  organization: string;
  role?: string;
  period?: string;
  description: string;
  logo?: string;
  note?: {
    before?: string;
    linkLabel: string;
    linkHref: string;
    after?: string;
  };
  projects?: { label: string; href?: string }[];
}

export default function CommunityCard({
  organization,
  role,
  period,
  description,
  logo,
  note,
  projects,
}: CommunityCardProps) {
  return (
    <div className="mb-6 pb-6">
      <div className="flex items-start gap-4">
        {logo && (
          <div className="relative h-28 w-28 flex-shrink-0">
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
          {(role || period) && (
            <p className="text-gray-700 mb-2">
              {role}
              {role && period ? ' ' : ''}
              {period}
            </p>
          )}
          <p className="text-gray-800 leading-relaxed whitespace-pre-line">
            <em>{description}</em>
          </p>
          {note && (
            <p className="text-gray-800 leading-relaxed mt-2">
              {note.before && `${note.before} `}
              <a
                href={note.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {note.linkLabel}
              </a>
              {note.after && ` ${note.after}`}
            </p>
          )}
          {projects && projects.length > 0 && (
            <div className="mt-3">
              <p className="text-gray-800 leading-relaxed mb-1">Projects include:</p>
              <ul className="list-none pl-10 space-y-0.5">
                {projects.map((project, idx) => (
                  <li key={idx} className="text-gray-800 leading-relaxed">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {project.label}
                      </a>
                    ) : (
                      project.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
