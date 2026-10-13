export default function TimelineItem({ experience }) {
  const { date, title, company, description, achievements } = experience;

  return (
    <article className="pb-12 last:pb-0">
      <p className="text-ink-faint">{date}</p>
      <h3 className="text-ink font-medium mt-1">
        {title}
        {company ? <span className="text-ink-faint font-normal"> {company}</span> : null}
      </h3>

      {description ? (
        <p className="text-ink-dim mt-3 leading-relaxed max-w-[62ch]">{description}</p>
      ) : null}

      {achievements?.length ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {achievements.map((a) => (
            <li
              key={a}
              className="rounded-full border border-[var(--edge)] px-3 py-1 text-ink-dim"
            >
              {a}
            </li>
          ))}
        </ul>
      ) : null}

    </article>
  );
}
