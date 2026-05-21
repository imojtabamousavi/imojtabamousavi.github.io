import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { profile, headshot } from "@/data/portfolio";

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
                  <Phone className="h-3 w-3" /> Phone
                </div>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  data-testid="contact-phone"
                  className="text-sm font-medium link-underline"
                >
                  {profile.phone}
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
            <a
              href={`mailto:${profile.email}`}
              data-testid="contact-card-cta"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium link-underline"
            >
              <Mail className="h-4 w-4" />
              Say hello — usually replies within 24 hours
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
