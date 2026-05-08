import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../data/portfolio";

export default function Testimonials() {
  return (
    <section
      id="references"
      data-testid="testimonials-section"
      className="relative py-24 md:py-36 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="label-mono text-muted-foreground mb-4">
              03 — References
            </p>
            <h2 className="font-heading font-bold tracking-[-0.03em] leading-[0.95] text-5xl sm:text-6xl">
              In their{" "}
              <span className="font-serif-display italic font-normal">
                own words
              </span>
              .
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-8 flex items-end">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              A handful of the people I've worked with closely — engineers,
              founders, fellow designers. Available on request for the rest.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              data-testid={`testimonial-${i}`}
              className={`relative p-8 md:p-10 rounded-2xl border border-border bg-card hover:bg-accent/40 transition-colors ${
                i % 3 === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <Quote className="h-6 w-6 text-muted-foreground/40 mb-4" />
              <blockquote className="font-serif-display text-2xl md:text-3xl leading-snug tracking-tight">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-foreground/10 grid place-items-center font-heading text-xs font-semibold">
                  {t.author
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div className="text-sm">
                  <div className="font-medium">{t.author}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
