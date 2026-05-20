import "@/App.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Values from "./components/Values";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import AccoladesPress from "./components/AccoladesPress";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground antialiased grain font-body" data-testid="app-root">
        <Navigation />
        <main>
          <Hero />
          <Showcase />
          <Work />
          <Values />
          <Testimonials />
          <AccoladesPress />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
