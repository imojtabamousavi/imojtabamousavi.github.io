import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import { accolades, press } from "../data/portfolio";

export default function AccoladesPress() {
  return (
    <section
      id="press"
      data-testid="accolades-press-section"
      className="relative py-24 md:py-36 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Accolades */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label-mono text-muted-foreground mb-3"
            >
              04 — Accolades
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-heading font-bold tracking-[-0.02em] text-4xl md:text-5xl mb-10"
            >
              Selected outcomes.
            </motion.h2>

            <ul className="border-t border-border" data-testid="accolades-list">
              {accolades.map((a, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  data-testid={`accolade-${i}`}
                  className="group py-5 border-b border-border flex items-start justify-between gap-6 hover:px-2 transition-all"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5">
                      <Award className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                      <h3 className="font-heading font-semibold text-lg tracking-tight">
                        {a.project}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground ml-6">
                      {a.note}
                    </p>
                  </div>
                  <span className="label-mono text-muted-foreground shrink-0 mt-1">
                    {a.year}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Press */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label-mono text-muted-foreground mb-3"
            >
              05 — Press
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-heading font-bold tracking-[-0.02em] text-4xl md:text-5xl mb-10"
            >
              <span className="font-serif-display italic font-normal">Featured</span> in.
            </motion.h2>

            <ul className="border-t border-border" data-testid="press-list">
              {press.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  data-testid={`press-${i}`}
                  className="group py-5 border-b border-border flex items-start justify-between gap-6"
                >
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg tracking-tight flex items-center gap-2">
                      {p.outlet}
                      <ArrowUpRight className="h-4 w-4 opacity-30 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {p.title}
                    </p>
                  </div>
                  <span className="label-mono text-muted-foreground shrink-0 mt-1">
                    {p.date}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
