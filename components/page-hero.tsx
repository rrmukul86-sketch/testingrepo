import { SectionBadge } from "@/components/section-badge";

type PageHeroProps = {
  badge: string;
  title: string;
  description: string;
};

export function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="section-shell pt-16 md:pt-20">
      <div className="rounded-[2rem] border border-sky-100 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_45%,#dbeafe_100%)] px-6 py-14 shadow-[0_30px_80px_rgba(37,99,235,0.1)] md:px-10">
        <SectionBadge>{badge}</SectionBadge>
        <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">{description}</p>
      </div>
    </section>
  );
}
