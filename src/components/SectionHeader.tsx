interface SectionHeaderProps {
  children: React.ReactNode;
  id?: string;
}

export default function SectionHeader({ children, id }: SectionHeaderProps) {
  return (
    <h2 id={id} className="inline-block bg-yellow-highlight px-3 py-1 text-2xl md:text-3xl font-extrabold font-sans">
      {children}
    </h2>
  );
}
