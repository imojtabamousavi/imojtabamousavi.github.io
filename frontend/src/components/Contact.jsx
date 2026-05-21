import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Linkedin } from "lucide-react";
import { profile, headshot } from "@/data/portfolio";

function BehanceIcon(props) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M21.04 7.78h-5.19V6.24h5.19v1.54ZM7.1 11.4c1.24 0 2.01-.53 2.01-1.68 0-1.26-.95-1.61-2.01-1.61H3.67v3.29H7.1Zm.2 4.54c1.34 0 2.23-.48 2.23-1.89 0-1.38-1.01-1.86-2.23-1.86H3.67v3.75H7.3ZM0 5.2h7.56c2.73 0 4.58.88 4.58 3.71 0 1.42-.69 2.43-1.97 3.03 1.77.5 2.66 1.86 2.66 3.67 0 2.94-2.5 4.2-5.12 4.2H0V5.2Zm18.64 12.68c1.46 0 2.1-.73 2.27-1.4h2.7c-.86 2.63-2.7 3.74-5.07 3.74-3.41 0-5.53-2.35-5.53-5.69 0-3.23 2.24-5.72 5.53-5.72 3.69 0 5.47 3.1 5.26 6.45h-7.86c.08 1.88 1 2.62 2.7 2.62Zm2.34-4.5c-.27-1.5-.92-2.29-2.53-2.29-2.02 0-2.6 1.57-2.64 2.29h5.17Z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-36 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Big CTA */}
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label-mono text-muted-foreground mb-6"
            >
              05 — Contact
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              data-testid="contact-headline"
              className="font-heading font-medium tracking-[-0.04em] leading-[0.92] text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Have a problem
              <br />
              worth{" "}
              <span className="font-serif-display italic font-normal text-muted-foreground">
                solving
              </span>
              ?
            </motion.h2>

            <motion.a
              href={`mailto:${profile.email}`}
              data-testid="contact-email-link"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="group mt-10 inline-flex items-center gap-3 font-heading font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tight border-b border-border hover:border-foreground transition-colors pb-2"
            >
              {profile.email}
              <ArrowUpRight className="h-6 w-6 md:h-8 md:w-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            >
              <div>
                <div className="flex items-center gap-2 label-mono text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3" /> Based in
                </div>
                <div className="text-sm font-medium">{profile.location}</div>
              </div>
              <div>
                <div className="flex items-center gap-2 label-mono text-muted-foreground mb-2">
                  <BehanceIcon className="h-3 w-3" /> Behance
                </div>
                <a
                  href={profile.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-behance"
                  className="text-sm font-medium link-underline"
                >
                  View case studies
                </a>
              </div>
              <div>
                <div className="flex items-center gap-2 label-mono text-muted-foreground mb-2">
                  <Linkedin className="h-3 w-3" /> Social
                </div>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-linkedin"
                  className="text-sm font-medium link-underline"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Headshot card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            data-testid="contact-headshot"
            className="lg:col-span-4 relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-muted relative">
              <img
                src={headshot}
                alt={`Portrait of ${profile.name}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white/80 label-mono">Currently</p>
                <p className="text-white font-heading font-medium text-lg leading-tight mt-1">
                  Senior Product Designer at WhiteFox
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
