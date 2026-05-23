import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {profile} from "@/data/portfolio";

// Recent Dribbble shots split into 4 columns, each scrolls at its own rhythm.
const col1 = [
  { src: "https://cdn.dribbble.com/userupload/14042218/file/original-5c93a19e7434b1b37fec686a9f53e446.png?resize=400x0", caption: "Nito Labs website" },
  { src: "https://cdn.dribbble.com/userupload/31863578/file/original-5c715c9219f081e06ee5ae74abfc6fe7.png?resize=400x0", caption: "Crypto Donate App" },
  { src: "https://cdn.dribbble.com/userupload/30419959/file/original-9d2dfef01654907dab7eb821c10eba2d.png?resize=400x0", caption: "Sports Shop" },
  { src: "https://cdn.dribbble.com/userupload/26877910/file/original-5106ddc7e3f254e87437446f98f456a2.png?resize=400x0", caption: "O'teacher Landingpage" },
];

const col2 = [
  { src: "https://cdn.dribbble.com/userupload/36399448/file/original-0b7060ccbc390f06667d6ad50f83dc88.png?resize=400x0", caption: "Coworking space reservation app" },
  { src: "https://cdn.dribbble.com/userupload/31693596/file/original-5fd2b5b5f8f7f2d965087ecff26ab23d.png?resize=400x0", caption: "Daofin Landing page" },
  { src: "https://cdn.dribbble.com/userupload/30335896/file/original-e7ba251e2871fa0693f22964b4fce609.png?resize=400x0", caption: "Game Store" },
  { src: "https://cdn.dribbble.com/userupload/26734332/file/original-be156084bca35b31a7c1154746c7d606.png?resize=400x0", caption: "Sports Shop" },
];

const col3 = [
  { src: "https://cdn.dribbble.com/userupload/35945426/file/original-690ca90485ef11d767d09b3eeef19da3.png?resize=400x0", caption: "Coworking space reservation app" },
  { src: "https://cdn.dribbble.com/userupload/30766732/file/original-1e96e68edb3d466611d33ebd2b295988.png?resize=400x0", caption: "Flowia Studio" },
  { src: "https://cdn.dribbble.com/userupload/30248274/file/original-26114027bcd0ff7a305bf4cac823e92f.png?resize=400x0", caption: "My Cowork Space app concept" },
  { src: "https://cdn.dribbble.com/userupload/26310762/file/original-d1fffe23ea625926af52c459a18c4613.png?resize=400x0", caption: "Sketch Hero" },
];

const col4 = [
  { src: "https://cdn.dribbble.com/userupload/34623727/file/original-be2cad6759f9849dd9f76099988e1c41.png?resize=400x0", caption: "NFT Collection Landing page" },
  { src: "https://cdn.dribbble.com/userupload/30601272/file/original-95fb89488b59e389ad465299fd54ca1c.png?resize=400x0", caption: "Sketch Hero" },
  { src: "https://cdn.dribbble.com/userupload/27285135/file/original-b4f3e5d307e8c9b75e452ea83523fe6f.png?resize=400x0", caption: "Soft Galaxy Concept" },
  { src: "https://cdn.dribbble.com/userupload/26236884/file/original-092c7f1fb360fb8070ffc08f47796b4f.png?resize=400x0", caption: "Decorative shop app" },
];

function Column({ items, duration, reverse = false, testId }) {
  // Keep one animation cycle taller than the visible column on tablet layouts.
  const cycle = [...items, ...items];
  const loop = [...cycle, ...cycle];
  return (
    <div
      data-testid={testId}
      className="relative overflow-hidden h-[140%] -my-[20%]"
      style={{ maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, black 7%, black 93%, rgba(0,0,0,0.35) 100%)", WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, black 7%, black 93%, rgba(0,0,0,0.35) 100%)" }}
    >
      <div
        className="flex flex-col gap-5 transform-gpu will-change-transform hover:[animation-play-state:paused]"
        style={{
          animation: `${reverse ? "marqueeY-rev" : "marqueeY"} ${duration}s linear infinite`,
        }}
      >
        {loop.map((it, i) => (
          <figure
            key={i}
            className="group relative isolate rounded-xl overflow-hidden border border-border bg-muted/40 shadow-2xl"
          >
            <img
              src={it.src}
              alt={it.caption}
              loading="lazy"
              className="w-full h-auto aspect-[3/4] object-cover transform-gpu will-change-transform transition-transform duration-500 ease-out group-hover:scale-[1.035]"
            />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-black/80 via-black/45 to-transparent p-3 pt-12 opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <span className="block text-white text-xs label-mono translate-y-1 transition-transform duration-300 ease-out group-hover:translate-y-0">
                {it.caption}
              </span>
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
            <h2 className="font-heading font-medium tracking-[-0.03em] leading-[0.95] text-5xl sm:text-6xl md:text-7xl">
              Seven years of{" "} <br/>
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
              Lumenswap, Nito Labs, WhiteFox, Yekzan and more.
            </p>
            <a
              href={profile.behance}
              target="_blank"
              data-testid="showcase-cta"
              className="group mt-6 !inline-flex items-center gap-2 text-sm font-medium link-underline"
            >
              Show case studies
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Marquee mosaic */}
      <div
        data-testid="showcase-mosaic"
        className="relative h-[78vh] md:h-[88vh] grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 px-3 md:px-5"
      >
        <Column items={col1} duration={52} reverse={false} testId="showcase-col-1" />
        <Column items={col2} duration={68} reverse={true}  testId="showcase-col-2" />
        <div className="hidden lg:block">
          <Column items={col3} duration={60} reverse={false} testId="showcase-col-3" />
        </div>
        <div className="hidden lg:block">
          <Column items={col4} duration={76} reverse={true} testId="showcase-col-4" />
        </div>
      </div>
    </section>
  );
}
