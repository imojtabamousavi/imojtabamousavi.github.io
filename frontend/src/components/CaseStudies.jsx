import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

function CaseStudyThumbnail({ study }) {
  if (!study.thumbnail) return <div className="aspect-[16/10] flex flex-col items-center justify-center gap-3 text-white" style={{ backgroundColor: study.thumbnailBackground }}><span className="font-heading text-3xl md:text-4xl font-semibold">{study.title}</span><span className="text-sm text-white/60">{study.intro}</span></div>;
  if (study.thumbnailStyle === "artwork") return <div className="aspect-[16/10] overflow-hidden" style={{ backgroundColor: study.thumbnailBackground }}><img src={study.thumbnail} alt={study.thumbnailAlt} loading="lazy" className="block w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.025]" /></div>;
  return <div className="relative aspect-[16/10] overflow-hidden" style={{ backgroundColor: study.thumbnailBackground }}>
    <div className="absolute left-[9%] right-[9%] top-[18%] rounded-t-[clamp(12px,2vw,28px)] bg-white border-[3px] md:border-[5px] border-white shadow-2xl overflow-hidden transition-transform duration-500 group-hover:translate-y-[-4px]">
      <div className="h-5 md:h-7 flex items-center gap-1 px-3 bg-[#f8f8f8] border-b border-[#ededed]" aria-hidden="true"><span className="w-1.5 h-1.5 rounded-full bg-[#f56b61]"/><span className="w-1.5 h-1.5 rounded-full bg-[#f9c94e]"/><span className="w-1.5 h-1.5 rounded-full bg-[#60c86a]"/></div>
      <img src={study.thumbnail} alt={study.thumbnailAlt} loading="lazy" className="block w-full h-auto" />
    </div>
  </div>;
}

export default function CaseStudies() {
  return <section id="case-studies" className="border-t border-border py-24 md:py-32 scroll-mt-16">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10">
      <p className="label-mono text-muted-foreground mb-4">— Selected projects</p>
      <h2 className="font-heading font-medium tracking-[-0.03em] leading-[0.95] text-5xl sm:text-6xl mb-12 md:mb-16">Work, <span className="font-serif-display italic font-normal">in context.</span></h2>
      <div className="grid gap-6 md:grid-cols-2">
        {caseStudies.map(study => <a key={study.slug} href={`#/case-studies/${study.slug}`} className="group block rounded-xl border border-border overflow-hidden bg-card transition-colors hover:bg-accent/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground">
          <CaseStudyThumbnail study={study} />
          <div className="p-6 md:p-8"><p className="label-mono text-muted-foreground mb-4">{study.eyebrow}</p><div className="flex items-center justify-between gap-4"><h3 className="font-heading text-3xl md:text-4xl font-medium tracking-tight">{study.title}</h3><ArrowUpRight aria-hidden="true" className="w-6 h-6" /></div><p className="text-muted-foreground leading-relaxed mt-3 max-w-lg">{study.description}</p></div>
        </a>)}
      </div>
    </div>
  </section>;
}
