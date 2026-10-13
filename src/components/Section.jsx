export default function Section({ id, children }) {
  return (
    <section id={id} className="pt-32 sm:pt-44 first:pt-0">
      {children}
    </section>
  );
}
