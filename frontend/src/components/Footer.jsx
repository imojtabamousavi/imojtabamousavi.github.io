import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-border py-10 mt-8"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="label-mono text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 label-mono text-muted-foreground">
          <span>Product design</span>
          <span>UI · UX</span>
          <a href="#intro" className="hover:text-foreground transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
