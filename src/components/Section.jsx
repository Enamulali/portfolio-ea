export default function Section({ id, title, children }) {
  return (
    <section id={id} className="pt-32 sm:pt-44 first:pt-0">
      {title && <h2 className="text-ink font-medium mb-5">{title}</h2>}
      {children}
    </section>
  );
}
