export default function Experience({ experience }) {
  const { date, title, company, description } = experience;

  return (
    <article className="pb-12 last:pb-0">
      <p className="text-ink-faint">{date}</p>
      <h3 className="text-ink font-medium mt-1">
        {title}
        <span className="text-ink-faint font-normal"> @&nbsp;{company}</span>
      </h3>
      <p className="text-ink-dim mt-3 leading-relaxed">{description}</p>
    </article>
  );
}
