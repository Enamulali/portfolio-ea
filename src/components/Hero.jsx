import profile from "../data/profile.json";
import Roadmap from "./Roadmap";

export default function Hero() {
  const { name, description } = profile;

  return (
    <header className="relative z-10 mx-auto w-full max-w-[38rem] px-6 pt-28 pb-32 sm:pt-36 sm:pb-44">
      <h1 className="display text-ink">{name}</h1>
      <p className="lede mt-7 text-ink-dim">{description}</p>

      <div className="mt-12">
        <Roadmap />
      </div>
    </header>
  );
}
