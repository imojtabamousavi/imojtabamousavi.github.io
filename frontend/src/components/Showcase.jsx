import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Curated UI/UX/Product visuals — split into 4 columns, each scrolls at its own rhythm.
const col1 = [
  { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=720&q=70", caption: "Analytics · Lumenswap" },
  { src: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=720&q=70", caption: "iOS Wallet · Nito Labs" },
  { src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=720&q=70", caption: "Mobile · Yekzan" },
  { src: "https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&w=720&q=70", caption: "Wireframes · LeQuest" },
];

const col2 = [
  { src: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=720&q=70", caption: "Dashboard · WhiteFox" },
  { src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=720&q=70", caption: "Component Library" },
  { src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=720&q=70", caption: "Workshop · Hamyar" },
  { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=720&q=70", caption: "Design Reviews" },
];

const col3 = [
  { src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=720&q=70", caption: "iOS · Ponisha" },
  { src: "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=720&q=70", caption: "Engineering Handoff" },
  { src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=720&q=70", caption: "Brand · Hamyar" },
  { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=720&q=70", caption: "Marketing Site" },
];

const col4 = [
  { src: "https://static.prod-images.emergentagent.com/jobs/dcf36b8e-5930-47f3-b98f-7f0fffa68a27/images/a91bdd2243f582536146028511c301c45d45233877cd616baa49c91e7a2216a6.png", caption: "Pool Liquidity · Lumenswap" },
  { src: "https://images.unsplash.com/photo-1776702683574-f91f73a3cd26?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBkZXNpZ24lMjBkYXJrJTIwbW9kZSUyMFVJfGVufDB8fHx8MTc3ODIyNTg4Mnww&ixlib=rb-4.1.0&q=85", caption: "Dark Mode · Wallet" },
  { src: "https://images.unsplash.com/photo-1760597371674-c5a412f2ae01?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwbW9iaWxlJTIwYXBwJTIwVUklMjBkZXNpZ258ZW58MHx8fHwxNzc4MjI1ODgyfDA&ixlib=rb-4.1.0&q=85", caption: "Onboarding Flows" },
  { src: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=720&q=70", caption: "Trade · Lumenswap" },
];

function Column({ items, duration, reverse = false, testId }) {
  // duplicate the array so the marquee loop is seamless
  const loop = [...items, ...items];
  return (
    <div
      data-testid={testId}
      className="relative overflow-hidden h-[140%] -my-[20%]"
      style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)" }}
    >
      <div
        className="flex flex-col gap-5 will-change-transform"
        style={{
          animation: `${reverse ? "marqueeY-rev" : "marqueeY"} ${duration}s linear infinite`,
        }}
      >
        {loop.map((it, i) => (
          <figure
            key={i}
            className="group relative rounded-xl overflow-hidden border border-border bg-muted/40 shadow-2xl"
          >
            <img
              src={it.src}
              alt={it.caption}
              loading="lazy"
              className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/75 to-transparent translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <span className="text-white text-xs label-mono">{it.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section
      id="showcase"
      data-testid="showcase-section"
      className="relative py-24 md:py-32 border-t border-border overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <p className="label-mono text-muted-foreground mb-4">— Showcase</p>
            <h2 className="font-heading font-bold tracking-[-0.03em] leading-[0.95] text-5xl sm:text-6xl md:text-7xl">
              Seven years of{" "}
              <span className="font-serif-display italic font-normal text-muted-foreground">
                shipped
              </span>{" "}
              pixels.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 lg:pl-8"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
              A glimpse at flows, dashboards and design-system surfaces from
              Lumenswap, Nito Labs, WhiteFox, Yekzan and more. Hover for context.
            </p>
            <a
              href="#contact"
              data-testid="showcase-cta"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium link-underline"
            >
              Request the full case studies
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Marquee mosaic */}
      <div
        data-testid="showcase-mosaic"
        className="relative h-[78vh] md:h-[88vh] grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 px-3 md:px-5"
      >
        <Column items={col1} duration={42} reverse={false} testId="showcase-col-1" />
        <Column items={col2} duration={56} reverse={true}  testId="showcase-col-2" />
        <Column items={col3} duration={48} reverse={false} testId="showcase-col-3" />
        <div className="hidden md:block">
          <Column items={col4} duration={62} reverse={true} testId="showcase-col-4" />
        </div>
      </div>
    </section>
  );
}
