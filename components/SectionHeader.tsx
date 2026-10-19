type SectionHeaderProps = {
  kicker: string;
  title: string;
  description?: string;
};

export function SectionHeader({ kicker, title, description }: SectionHeaderProps) {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div className="max-w-xl">
        <p className="kicker">{kicker}</p>
        <h2 className="display mt-4 text-4xl sm:text-5xl">{title}</h2>
      </div>
      {description && (
        <p className="max-w-sm text-sm leading-relaxed text-ivory-muted sm:text-right">
          {description}
        </p>
      )}
    </div>
  );
}
