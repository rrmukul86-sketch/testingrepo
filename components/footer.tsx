import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { contactDetails, navLinks, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="section-shell pb-10 pt-12">
      <div className="rounded-[2rem] border border-sky-100 bg-white px-6 py-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3 text-slate-950">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <div className="font-semibold">CompactSoft</div>
                <div className="text-sm text-slate-500">White-label ready SaaS-style corporate website.</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-600">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-sky-700">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 transition hover:text-sky-700"
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-sky-100 pt-6 text-sm text-slate-500 md:flex-row md:justify-between">
          <div>{contactDetails[0]?.value}</div>
          <div>{contactDetails[1]?.value}</div>
          <div>{contactDetails[2]?.value}</div>
        </div>
      </div>
    </footer>
  );
}
