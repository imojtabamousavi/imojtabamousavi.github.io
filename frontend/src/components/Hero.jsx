import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, MapPin } from "lucide-react";
import { profile, skills } from "@/data/portfolio";

/**
 * Hero — animated aurora canvas with editorial typography on top.
 * 4 drifting color blobs, slow hue rotation, subtle noise grain.
 * No images; the color *is* the visual.
 */
export default function Hero() {
  return (
      <section
          id="intro"
          data-testid="hero-section"
          className="relative min-h-screen overflow-hidden flex items-center"
      >
        {/* Animated aurora background */}
        <div
            aria-hidden="true"
            data-testid="hero-aurora"
            className="aurora-canvas absolute inset-0 pointer-events-none"
        >
          {/* Amber */}
          <div
              className="aurora-blob"
              style={{
                top: "-12%",
                left: "-10%",
                width: "70vmin",
                height: "70vmin",
                background:
                    "radial-gradient(circle at 30% 30%, rgba(251, 191, 36, 0.85), transparent 60%)",
                animation: "blob-a 22s ease-in-out infinite",
              }}
          />
          {/* Coral */}
          <div
              className="aurora-blob"
              style={{
                top: "-6%",
                right: "-12%",
                width: "76vmin",
                height: "76vmin",
                background:
                    "radial-gradient(circle at 60% 40%, rgba(244, 114, 182, 0.8), transparent 60%)",
                animation: "blob-b 28s ease-in-out infinite",
              }}
          />
          {/* Cobalt */}
          <div
              className="aurora-blob"
              style={{
                bottom: "-18%",
                left: "10%",
                width: "84vmin",
                height: "84vmin",
                background:
                    "radial-gradient(circle at 45% 55%, rgba(59, 130, 246, 0.85), transparent 60%)",
                animation: "blob-c 26s ease-in-out infinite",
              }}
          />
          {/* Emerald */}
          <div
              className="aurora-blob"
              style={{
                bottom: "-10%",
                right: "0%",
                width: "66vmin",
                height: "66vmin",
                background:
                    "radial-gradient(circle at 50% 50%, rgba(45, 212, 191, 0.75), transparent 60%)",
                animation: "blob-d 32s ease-in-out infinite",
              }}
          />
          {/* Soft vignette so center text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40" />
          {/* Noise grain */}
          <div
              className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
              style={{
                backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 py-32 md:py-40">
          {/* Top meta */}
          <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 label-mono text-foreground/70 mb-12 md:mb-16"
          >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {/*Focused on current work · 2026*/}
            Designing in Figma
          </span>
            <span className="hidden sm:flex items-center gap-1.5">
            <MapPin className="h-3 w-3" />
              {profile.location}
          </span>
            <span className="hidden md:inline-block">
              {/*User-centered • Data-informed*/}
            № 01 — Portfolio · {new Date().getFullYear()}
          </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              data-testid="hero-headline"
              className="font-heading font-medium tracking-[-0.045em] leading-[0.92] text-balance
                     text-[3.2rem] sm:text-[5rem] md:text-[6.4rem] lg:text-[7.2rem] xl:text-[7.8rem]"
          >
            Hello there, I'm a{" "}
            <span className="font-serif-display italic font-normal opacity-80">
            designer
          </span>{" "}
            crafting solutions that make the simple feel{" "}
            <span className="font-serif-display italic font-normal opacity-80">
            beautiful
          </span>{" "}
            .
          </motion.h1>

          {/* Sub + CTAs */}
          <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
          >
            <p
                data-testid="hero-subhead"
                className="lg:col-span-7 max-w-2xl text-base sm:text-lg text-foreground/80 leading-relaxed"
            >
              {profile.summary}
            </p>

            <div className="lg:col-span-5 flex flex-wrap items-center gap-3 lg:justify-end">
              <a
                  href={profile.behance}
                  target="_blank"
                  data-testid="hero-cta-work"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View case studies
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                  href="#contact"
                  data-testid="hero-cta-contact"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/30 bg-background/40 backdrop-blur-md px-6 py-3 text-sm font-medium hover:bg-background/70 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </motion.div>

          {/* Bottom row: scroll cue + skills marquee */}
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-20 md:mt-28 flex flex-col gap-6"
          >
            <a
                href="#showcase"
                data-testid="hero-scroll-cue"
                className="inline-flex items-center gap-2 label-mono text-foreground/70 hover:text-foreground transition-colors group w-fit"
            >
              <span className="h-px w-12 bg-current group-hover:w-20 transition-all duration-500" />
              Scroll for work
              <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <div
                data-testid="skills-marquee"
                className="border-y border-foreground/15 py-4 overflow-hidden relative backdrop-blur-[2px]"
            >
              <div className="flex gap-12 marquee whitespace-nowrap">
                {[...skills, ...skills].map((s, i) => (
                    <span
                        key={i}
                        className="font-heading text-xl md:text-2xl tracking-tight text-foreground/70 hover:text-foreground transition-colors"
                    >
                  {s}
                      <span className="ml-12 opacity-40">✦</span>
                </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
}
