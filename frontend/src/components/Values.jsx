import { motion } from "framer-motion";
import { values } from "@/data/portfolio";

export default function Values() {
  return (
    <section
      id="values"
      data-testid="values-section"
      className="relative py-24 md:py-36 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="label-mono text-muted-foreground mb-6"
            >
              02 — Values
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="font-heading font-medium tracking-[-0.03em] leading-[0.95] text-5xl sm:text-6xl md:text-7xl"
            >
              Useful
              <br />
              <span className="font-serif-display italic font-normal text-muted-foreground">
                Considered
              </span>
              <br />
              Beautiful
              <br />
              <span className="font-serif-display italic font-normal text-muted-foreground">
                Well-made
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <div className="space-y-12">
              {values.map((v, i) => (
                <motion.div
                  key={v.word}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  data-testid={`value-card-${v.word.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group border-t border-border pt-8 grid grid-cols-12 gap-4"
                >
                  <div className="col-span-12 md:col-span-3">
                    <div className="label-mono text-muted-foreground">
                      0{i + 1}
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight mt-1">
                      {v.word}
                    </h3>
                  </div>
                  <p className="col-span-12 md:col-span-9 text-base md:text-lg text-muted-foreground leading-relaxed">
                    {v.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
