import "@/App.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CaseStudies from "./components/CaseStudies";
import CaseStudyPage from "./components/CaseStudyPage";
import { caseStudies } from "./data/caseStudies";
import { useEffect, useState } from "react";

function App() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onHashChange = () => { setHash(window.location.hash); if (window.location.hash.startsWith("#/case-studies/")) window.scrollTo(0, 0); };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  const slug = hash.startsWith("#/case-studies/") ? hash.slice("#/case-studies/".length) : null;
  const study = slug ? caseStudies.find(item => item.slug === slug) : null;
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground antialiased grain font-body" data-testid="app-root">
        <Navigation detailPage={Boolean(slug)} />
        {slug ? <CaseStudyPage study={study} /> : <main>
          <Hero />
          <CaseStudies />
          <Work />
          <Values />
          <Testimonials />
          <Contact />
        </main>}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
