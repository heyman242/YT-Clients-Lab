import { useEffect } from "react";
import Lenis from "lenis";
import "./App.css";
import {
  Main,
  Navbar,
  SiteShell,
  Method,
  WorkExamples,
  BookCall,
  Footer,
  Stats,
  Results,
  FAQ,
  HowWeDoIt,
  ProofGallery,
} from "./components/index";

function App() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen isolate overflow-x-clip bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <SiteShell>
        <Navbar sticky={true} />
        <Main />
        <Stats />
        <ProofGallery />
        <Results />
        <Method />
        <WorkExamples />
        <BookCall />
        <FAQ />
        <HowWeDoIt />
        <Footer
          socials={{
            x: "https://x.com/hvnterhimanshu",
            linkedin: "https://www.linkedin.com/in/himanshu-bobade-9306ba321/",
            instagram: "#",
            youtube: "https://www.youtube.com/@himanshubobade6960/videos",
          }}
        />
      </SiteShell>
    </div>
  );
}

export default App;
