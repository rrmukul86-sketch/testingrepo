import { SectionBadge } from "@/components/section-badge";

type PageHeroProps = {
  badge: string;
  title: string;
  description: string;
};

export function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="section-shell pt-16 md:pt-20">
      <div className="theme-transition rounded-[2rem] px-6 py-14 md:px-10 theme-surface-strong theme-ring">
        <SectionBadge>{badge}</SectionBadge>
        <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-[var(--heading)] md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-muted)] md:text-lg">{description}</p>
      </div>
    </section>
  );
}
