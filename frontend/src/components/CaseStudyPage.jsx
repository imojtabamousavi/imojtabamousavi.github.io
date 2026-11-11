import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const shell = "max-w-[1400px] mx-auto px-6 md:px-10";
const prose = "text-base md:text-lg leading-[1.8] text-muted-foreground max-w-3xl";

const tocLabels = ["Overview", "Research", "Design", "Product", "Outcomes"];

function tocGroup(section) {
  if (["overview", "problem"].includes(section.type)) return "Overview";
  if (["process", "research", "audience", "researchStats"].includes(section.type)) return "Research";
  if (["architecture", "wireframes", "visual", "timeline"].includes(section.type) || section.title === "Wireframing") return "Design";
  if (section.type === "product") return "Product";
  return "Outcomes";
}

function Section({ section, index, children, reducedMotion }) {
  return <section id={`study-section-${index}`} aria-labelledby={`study-heading-${index}`} className="border-t border-border py-16 md:py-24 scroll-mt-32">
    <motion.div className={shell} initial={reducedMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.45, ease: "easeOut" }}>
      <p className="label-mono text-muted-foreground mb-5">{String(index + 1).padStart(2, "0")} / {section.kicker || "Case study"}</p>
      <h2 id={`study-heading-${index}`} className="font-heading font-medium tracking-[-0.035em] text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-8">{section.title}</h2>
      {children}
    </motion.div>
  </section>;
}

function CardGrid({ items, columns = 3 }) {
  return <div className={`grid gap-4 md:gap-5 ${columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
    {items.map((item, i) => <div key={item.title || item.name} className="rounded-xl border border-border bg-card p-6 md:p-8">
      {item.number && <span className="label-mono text-muted-foreground">{item.number}</span>}
      <h3 className="font-heading text-xl md:text-2xl font-medium mt-3 mb-3">{item.title || item.name}</h3>
      {item.role && <p className="text-sm text-muted-foreground mb-4">{item.role}</p>}
      {(item.body || item.need) && <p className="text-muted-foreground leading-relaxed">{item.body || item.need}</p>}
    </div>)}
  </div>;
}

function ProductImage({ image }) {
  return <figure className="min-w-0">
    <div className="rounded-xl border border-border bg-muted overflow-hidden p-2 md:p-5">
      <img src={image.src} alt={image.alt} loading="lazy" className="block w-full h-auto rounded-md" />
    </div>
    <figcaption className="label-mono text-muted-foreground mt-4">{image.caption}</figcaption>
  </figure>;
}

function CaseStudyFooter({ current }) {
  const index = caseStudies.findIndex((study) => study.slug === current.slug);
  const next = caseStudies.length > 1 ? caseStudies[(index + 1) % caseStudies.length] : null;
  return <nav aria-label="Case study navigation" className={`${shell} border-t border-border pt-12 md:pt-16`}>
    <p className="label-mono text-muted-foreground mb-6">Continue exploring</p>
    <div className="grid gap-4 md:grid-cols-2">
      <a href="/#case-studies" className="group rounded-xl border border-border bg-card p-6 md:p-8 hover:bg-accent/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
        <span className="label-mono text-muted-foreground">Browse</span>
        <span className="mt-5 flex items-center justify-between gap-4 font-heading text-2xl md:text-3xl font-medium tracking-tight">All case studies <ArrowUpRight aria-hidden="true" className="w-6 h-6 flex-none" /></span>
        <span className="block text-muted-foreground mt-3 text-sm">Explore selected projects and design work.</span>
      </a>
      {next && <a href={`/#/case-studies/${next.slug}`} target="_blank" rel="noopener noreferrer" aria-label={`${next.title} case study (opens in a new tab)`} className="group rounded-xl border border-border bg-card p-6 md:p-8 hover:bg-accent/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
        <span className="label-mono text-muted-foreground">Next case study</span>
        <span className="mt-5 flex items-center justify-between gap-4 font-heading text-2xl md:text-3xl font-medium tracking-tight">{next.title} <ArrowUpRight aria-hidden="true" className="w-6 h-6 flex-none" /></span>
        <span className="block text-muted-foreground mt-3 text-sm">{next.description}</span>
      </a>}
    </div>
  </nav>;
}

function SectionContent({ section }) {
  switch (section.type) {
    case "overview": return <>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-12">
        <div><h3 className="font-heading text-2xl mb-4">About project</h3><p className={prose}>{section.about}</p></div>
        <div><h3 className="font-heading text-2xl mb-4">My role</h3><p className={prose}>{section.role}</p></div>
      </div>
      <h3 className="font-heading text-2xl mb-5">What I did</h3>
      <ul className="flex flex-wrap gap-2 mb-12">{section.contributions.map(x => <li className="rounded-full border border-border px-4 py-2 text-sm" key={x}>{x}</li>)}</ul>
      <div className="grid grid-cols-2 gap-4 border-t border-border pt-8 max-w-xl">{section.metrics.map(x => <div key={x.label}><strong className="font-heading text-3xl md:text-4xl font-medium">{x.value}</strong><p className="text-sm text-muted-foreground mt-1">{x.label}</p></div>)}</div>
    </>;
    case "problem": return <>
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-12"><div><h3 className="font-heading text-2xl mb-4">The problem</h3><p className={prose}>{section.problem}</p></div><div><h3 className="font-heading text-2xl mb-4">The goal</h3><p className={prose}>{section.goal}</p></div></div>
      <h3 className="font-heading text-2xl mb-5">Main pain points</h3><CardGrid items={section.points.map((x,i) => ({...x,number:String(i+1).padStart(2,"0")}))} />
      {section.solutions && <div className="mt-12"><h3 className="font-heading text-2xl mb-5">Solutions</h3><ul className="grid md:grid-cols-2 gap-3">{section.solutions.map(x => <li key={x} className="rounded-xl border border-border p-5 leading-relaxed">{x}</li>)}</ul></div>}
    </>;
    case "process": return <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">{section.steps.map((step,i) => <li key={step.title} className="rounded-xl border border-border p-6"><span className="font-heading text-4xl text-muted-foreground">{String(i+1).padStart(2,"0")}</span><h3 className="font-heading text-xl mt-8 mb-3">{step.title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p></li>)}</ol>;
    case "research": return <><p className={`${prose} mb-10`}>{section.intro}</p><CardGrid items={section.personas} /></>;
    case "audience": return <><p className={`${prose} mb-10`}>{section.intro}</p><CardGrid items={section.items.map((item,i) => ({title:item,number:String(i+1).padStart(2,"0")}))}/></>;
    case "researchStats": return <><p className={`${prose} mb-10`}>{section.intro}</p><h3 className="font-heading text-2xl mb-5">App modes</h3><div className="grid sm:grid-cols-3 gap-4 mb-10">{section.stats.map(x => <div key={x.label} className="rounded-xl border border-border p-6"><strong className="font-heading text-4xl font-medium">{x.value}</strong><p className="text-muted-foreground mt-2">{x.label}</p></div>)}</div><h3 className="font-heading text-2xl mb-5">Age groups</h3><div className="grid sm:grid-cols-3 gap-4">{section.ageStats.map(x => <div key={x.label} className="rounded-xl border border-border p-6"><strong className="font-heading text-4xl font-medium">{x.value}</strong><p className="text-muted-foreground mt-2">{x.label}</p></div>)}</div></>;
    case "architecture": return <><p className={`${prose} mb-10`}>{section.intro}</p>{section.image ? section.imageDisplay === "natural" ? <ProductImage image={{ src: section.image, alt: section.imageAlt, caption: section.title }} /> : <figure className="relative aspect-[2160/1244] overflow-hidden rounded-xl border border-border bg-white"><img src={section.image} alt={section.imageAlt} loading="lazy" className="absolute left-0 top-[-13%] w-full h-auto" /></figure> : <div className="grid md:grid-cols-3 gap-4">{section.groups.map(group => <div key={group.title} className="rounded-xl border border-border p-6 md:p-8"><h3 className="font-heading text-xl mb-6">{group.title}</h3><ul className="space-y-3">{group.items.map(item => <li key={item} className="border-t border-border pt-3 text-muted-foreground">{item}</li>)}</ul></div>)}</div>}</>;
    case "wireframes": return <><p className={`${prose} mb-10`}>{section.intro}</p><div className={`grid gap-6 ${section.layout === "full" ? "" : "md:grid-cols-2"}`}>{section.images.map(image => <ProductImage key={image.src} image={image}/>)}</div></>;
    case "visual": return <><p className={`${prose} mb-10`}>{section.intro}</p><CardGrid items={section.details} columns={2}/><div className="mt-10"><h3 className="font-heading text-2xl mb-5">Color styles</h3><div className="flex flex-wrap gap-3">{section.colors.map(color => <div key={color} className="w-24"><div className="h-16 rounded-lg border border-border" style={{backgroundColor:color}}/><span className="block mt-2 text-xs text-muted-foreground">{color}</span></div>)}</div></div></>;
    case "product": return <><p className={`${prose} mb-10 md:mb-14`}>{section.intro}</p><div className={section.layout === "phones" ? "flex flex-wrap gap-8 md:gap-12" : "grid gap-10"}>{section.images.map(image => <div key={image.src} className={section.layout === "phones" ? "w-full max-w-[340px]" : ""}><ProductImage image={image}/></div>)}</div></>;
    case "timeline": return <><p className={`${prose} mb-10`}>{section.intro}</p>{section.image && <ProductImage image={{ src: section.image, alt: section.imageAlt, caption: section.title }} />}</>;
    case "accessibility": return <><p className={`${prose} mb-10`}>{section.intro}</p><div className="grid sm:grid-cols-3 gap-4">{section.values.map(value => <div key={value} className="rounded-xl border border-border p-6"><strong className="font-heading text-3xl font-medium">{value}</strong><p className="text-sm text-muted-foreground mt-2">Contrast ratio in original presentation</p></div>)}</div></>;
    case "text": return <><p className={`${prose} mb-10`}>{section.body}</p>{section.image && <ProductImage image={{ src: section.image, alt: section.imageAlt, caption: section.title }} />}</>;
    case "closing": return <><p className={`${prose} mb-10`}>{section.body}</p><figure className="overflow-hidden rounded-xl border border-border bg-white"><img src={section.image} alt={section.imageAlt} loading="lazy" className="block w-full h-auto" /></figure></>;
    default: return null;
  }
}

export default function CaseStudyPage({ study }) {
  const [activeSection, setActiveSection] = useState(0);
  const reducedMotion = useReducedMotion();
  const tocItems = study ? tocLabels.map(label => ({ label, index: study.sections.findIndex(section => tocGroup(section) === label) })).filter(item => item.index !== -1) : [];
  const activeGroup = study ? tocGroup(study.sections[activeSection] || study.sections[0]) : null;
  useEffect(() => {
    if (!study) return;
    setActiveSection(0);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length) setActiveSection(Number(visible[0].target.id.replace("study-section-", "")));
    }, { rootMargin: "-130px 0px -65% 0px" });
    document.querySelectorAll('[id^="study-section-"]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [study]);
  if (!study) return <main className={`${shell} pt-32 pb-24`}><h1 className="font-heading text-5xl">Case study not found</h1><a className="inline-block mt-8 underline" href="/#case-studies">Back to case studies</a></main>;
  return <main className="pt-28 md:pt-36 pb-24">
    <article>
      <motion.header className={`${shell} pb-16 md:pb-24`} initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: "easeOut" }}>
        <a href="/#case-studies" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 focus-visible:outline focus-visible:outline-2"><ArrowLeft className="w-4 h-4"/> Back to case studies</a>
        <p className="label-mono text-muted-foreground mb-5">{study.eyebrow}</p>
        <h1 className="font-heading font-medium tracking-[-0.04em] leading-[0.95] text-6xl sm:text-7xl md:text-8xl">{study.title}</h1>
        <p className={`text-xl md:text-2xl text-muted-foreground leading-relaxed mt-7 ${study.slug === "yekzan" ? "max-w-none" : "max-w-2xl"}`}>{study.intro}</p>
        {study.projectUrl && <a href={study.projectUrl} target="_blank" rel="noopener noreferrer" className="group mt-8 mb-12 inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground" aria-label={`Visit ${study.title} website (opens in a new tab)`}>Visit project website <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>}
        <div className={study.projectUrl ? "" : "mt-12 md:mt-16"}>{study.heroImage ? (study.heroStyle === "phone" ? <div className="rounded-xl bg-[#5443af] flex justify-center overflow-hidden pt-10 md:pt-16"><img src={study.heroImage} alt={study.heroAlt} className="block w-[56%] max-w-[360px] h-auto" /></div> : study.heroStyle === "artwork" ? <div className="rounded-xl overflow-hidden border border-border"><img src={study.heroImage} alt={study.heroAlt} className="block w-full h-auto" /></div> : <ProductImage image={{src:study.heroImage,alt:study.heroAlt,caption:study.title}}/>) : <div className="rounded-xl bg-[#0a0854] min-h-64 md:min-h-96 flex flex-col items-center justify-center text-white text-center px-6"><span className="font-heading text-4xl md:text-6xl font-semibold">{study.title}</span><span className="mt-4 text-lg text-white/60">{study.intro}</span></div>}</div>
      </motion.header>
      <nav aria-label={`${study.title} table of contents`} className="sticky top-16 z-40 border-y border-border bg-background/95 backdrop-blur-md">
        <div className={`${shell} flex items-center gap-4 overflow-x-auto py-3`}>
          <span className="label-mono text-muted-foreground whitespace-nowrap hidden sm:block">On this page</span>
          {tocItems.map(({ label, index }) => <button key={label} type="button" onClick={() => document.getElementById(`study-section-${index}`)?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" })} aria-current={activeGroup === label ? "location" : undefined} className={`whitespace-nowrap rounded-full px-3 py-2 text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${activeGroup === label ? "bg-foreground text-background" : "text-muted-foreground hover:bg-accent hover:text-foreground"}`}>{label}</button>)}
        </div>
      </nav>
      {study.sections.map((section,index) => <Section key={`${section.title}-${index}`} section={section} index={index} reducedMotion={reducedMotion}><SectionContent section={section}/></Section>)}
      <CaseStudyFooter current={study} />
    </article>
  </main>;
}
