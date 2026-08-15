import { FadeIn } from "@/components/ui/Motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  label?: string;
  title: string;
  description?: React.ReactNode;
  className?: string;
}

export function PageHero({ label, title, description, className }: PageHeroProps) {
  return (
    <section className={cn("pt-32 pb-16 md:pt-40 md:pb-24 section-padding bg-white", className)}>
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          {label && <p className="label-caps mb-4">{label}</p>}
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl font-medium text-black text-balance max-w-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg md:text-xl text-graphite leading-relaxed max-w-2xl text-balance">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray";
}

export function ContentSection({
  children,
  className,
  background = "white",
}: ContentSectionProps) {
  return (
    <section
      className={cn(
        "section-padding py-16 md:py-24",
        background === "gray" ? "bg-gray-50" : "bg-white",
        className
      )}
    >
      <div className="mx-auto max-w-[1400px]">{children}</div>
    </section>
  );
}

interface ContentBlockProps {
  title: string;
  children: React.ReactNode;
}

export function ContentBlock({ title, children }: ContentBlockProps) {
  return (
    <FadeIn>
      <div className="max-w-3xl">
        <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">
          {title}
        </h2>
        <div className="prose-algorithec">{children}</div>
      </div>
    </FadeIn>
  );
}
