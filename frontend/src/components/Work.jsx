import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { work } from "../data/portfolio";

export default function Work() {
  return (
    <section
      id="work"
      data-testid="work-section"
      className="relative py-24 md:py-36 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <p className="label-mono text-muted-foreground mb-4">01 — Work</p>
            <h2 className="font-heading font-medium tracking-[-0.03em] leading-[0.95] text-5xl sm:text-6xl">
              A decade of
              <br />
              <span className="font-serif-display italic font-normal">careful</span>{" "}
              practice.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-8 flex items-end">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Selected roles across fintech, healthcare and ed-tech — agencies,
              startups and platforms. The work is varied, the philosophy is the
              same: solve the right problem, then sweat the details.
            </p>
          </div>
        </div>

        <div className="border-t border-border">
          {work.map((job, i) => (
            <motion.article
              key={job.company + job.dates}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              data-testid={`work-item-${job.company.toLowerCase().replace(/\s+/g, "-")}`}
              className="group grid grid-cols-12 gap-4 md:gap-6 py-10 md:py-14 border-b border-border hover:bg-accent/40 transition-colors px-2 md:px-4 -mx-2 md:-mx-4 rounded-md"
            >
              <div className="col-span-12 md:col-span-3 flex items-start gap-3">
                <div className="h-10 w-10 rounded-full grid place-items-center border border-border bg-background font-heading font-bold text-xs">
                  {job.icon}
                </div>
                <div>
                  <div className="label-mono text-muted-foreground">
                    {job.dates}
                  </div>
                  <div className="text-sm mt-1">{job.location}</div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                  <span className="label-mono text-muted-foreground">
                    {job.company}
                  </span>
                </div>
                <h3 className="font-heading font-medium tracking-tight text-3xl md:text-5xl leading-[1.05] mb-4 flex items-baseline gap-3">
                  {job.role}
                  <ArrowUpRight className="h-6 w-6 md:h-8 md:w-8 opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-500" />
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {job.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
