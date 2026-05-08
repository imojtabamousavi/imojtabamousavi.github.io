import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { profile, heroImages, skills } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="intro"
      data-testid="hero-section"
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 label-mono text-muted-foreground mb-12"
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for select projects · 2026
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <MapPin className="h-3 w-3" />
            {profile.location}
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              data-testid="hero-headline"
              className="font-heading font-bold tracking-[-0.04em] leading-[0.95] text-balance text-[3rem] sm:text-[4.2rem] md:text-[5.2rem] lg:text-[6rem]"
            >
              Hello there, I'm a{" "}
              <span className="font-serif-display italic font-normal text-muted-foreground">
                designer
              </span>{" "}
              who cares about making{" "}
              <span className="font-serif-display italic font-normal text-muted-foreground">
                beautiful
              </span>{" "}
              things that help people.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              data-testid="hero-subhead"
              className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                data-testid="hero-cta-work"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View selected work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                data-testid="hero-cta-contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* Right collage */}
          <div className="lg:col-span-5 relative h-[420px] sm:h-[500px] lg:h-[560px]">
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-2 w-[62%] h-[68%] rounded-2xl overflow-hidden border border-border shadow-2xl"
            >
              <img
                src={heroImages[1].src}
                alt={heroImages[1].alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 4 }}
              transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-16 w-[58%] h-[60%] rounded-2xl overflow-hidden border border-border shadow-2xl"
            >
              <img
                src={heroImages[0].src}
                alt={heroImages[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-[18%] bottom-0 w-[64%] h-[44%] rounded-2xl overflow-hidden border border-border shadow-2xl"
            >
              <img
                src={heroImages[2].src}
                alt={heroImages[2].alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
            </motion.div>

            {/* Numeric callout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -left-2 -bottom-4 px-3 py-2 rounded-full bg-background/80 backdrop-blur border border-border text-xs label-mono"
            >
              7+ yrs · 8 companies
            </motion.div>
          </div>
        </div>

        {/* Skills marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          data-testid="skills-marquee"
          className="mt-24 lg:mt-32 border-y border-border py-5 overflow-hidden relative"
        >
          <div className="flex gap-12 marquee whitespace-nowrap">
            {[...skills, ...skills].map((s, i) => (
              <span
                key={i}
                className="font-heading text-2xl md:text-3xl tracking-tight text-muted-foreground hover:text-foreground transition-colors"
              >
                {s}
                <span className="ml-12 opacity-40">✦</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
