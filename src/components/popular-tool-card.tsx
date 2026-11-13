import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface PopularToolCardProps {
  name: string;
  desc: string;
  href: string;
  icon: LucideIcon;
}

export function PopularToolCard({ name, desc, href, icon: Icon }: PopularToolCardProps) {
  return (
    <Link
      href={href}
      className="group relative p-6 rounded-3xl border border-border bg-card/50 hover:bg-card backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-1 transition-all duration-300 block"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 flex items-center justify-center">
          <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </div>
      <h3 className="font-semibold text-lg mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {name}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </Link>
  );
}
