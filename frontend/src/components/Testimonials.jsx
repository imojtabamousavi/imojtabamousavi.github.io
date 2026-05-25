import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/portfolio";

const MAX_QUOTE_LENGTH = 300;

function formatQuote(quote) {
  if (quote.length <= MAX_QUOTE_LENGTH) {
    return quote;
  }

  return `${quote.slice(0, MAX_QUOTE_LENGTH - 3).trimEnd()}...`;
}

function getInitials(name) {
  return name
      .trim()
      .split(/\s+/)
      .map((part) => part[0])
      .slice(0, 2)
      .join("");
}

function AuthorAvatar({ author, imgSrc }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);

    if (!imgSrc) {
      return undefined;
    }

    const image = new Image();

    image.onload = () => setImageLoaded(true);
    image.onerror = () => setImageLoaded(false);
    image.src = imgSrc;

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [imgSrc]);

  return (
      <div className="h-8 w-8 rounded-full overflow-hidden bg-foreground/10 grid place-items-center font-heading text-xs font-semibold">
        {imageLoaded ? (
            <img
                src={imgSrc}
                alt={author}
                className="h-full w-full object-cover"
                onError={() => setImageLoaded(false)}
            />
        ) : (
            getInitials(author)
        )}
      </div>
  );
}


export default function Testimonials() {
  // duplicate the items so the X marquee loops seamlessly
  const loop = [...testimonials, ...testimonials];

  return (
      <section
          id="references"
          data-testid="testimonials-section"
          className="relative py-24 md:py-36 border-t border-border overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="label-mono text-muted-foreground mb-4">
                03 — References
              </p>
              <h2 className="font-heading font-medium tracking-[-0.03em] leading-[0.95] text-5xl sm:text-6xl">
                In their{" "}
                <span className="font-serif-display italic font-normal">
                own words
              </span>
                .
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-8 flex items-end justify-between gap-6">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                A handful of the people I've worked with closely — engineers,
                founders, fellow designers. Available on request for the rest.
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal smooth-scrolling marquee, edge-to-edge */}
        <div
            data-testid="testimonials-marquee"
            className="marquee-pause relative"
            style={{
              maskImage:
                  "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
              WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            }}
        >
          <div className="flex gap-6 md:gap-8 marquee-slow whitespace-nowrap will-change-transform px-6 md:px-10">
            {loop.map((t, i) => (
                <motion.figure
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6 }}
                    data-testid={`testimonial-${i}`}
                    className="relative shrink-0 w-[90vw] sm:w-[68vw] md:w-[52vw] lg:w-[44vw] xl:w-[38vw]
                         aspect-[16/10]
                         whitespace-normal p-8 md:p-10 rounded-2xl border border-border
                         bg-card/80 backdrop-blur-sm hover:bg-accent/40 transition-colors
                         flex flex-col justify-between"
                >
                  <div>
                    <Quote className="h-6 w-6 text-muted-foreground/40 mb-4" />
                    <blockquote className="font-serif-display text-xl md:text-2xl lg:text-[1.65rem] leading-snug tracking-tight text-balance">
                      "{formatQuote(t.quote)}"
                    </blockquote>
                  </div>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <AuthorAvatar author={t.author} imgSrc={t.imgSrc} />
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
