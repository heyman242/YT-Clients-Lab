import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Main,
  Navbar,
  SiteShell,
  Method,
  WorkExamples,
  BookCall,
  ContentMachine,
  ThumbSlider,
  Footer,
} from "./components/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative min-h-screen isolate overflow-x-clip bg-black text-white">
      <SiteShell>
        <Navbar sticky={true} />
        <Main />
        <Method />
        <WorkExamples />
        <ThumbSlider />
        <BookCall url="https://calendly.com/himanshu-ytclientslab/30min" />
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
