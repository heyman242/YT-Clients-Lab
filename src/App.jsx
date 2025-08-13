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
} from "./components/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative min-h-screen isolate overflow-x-clip bg-black text-white">
      <SiteShell>
        <Navbar sticky={false} />
        <Main />
        <Method />
        <WorkExamples />
        <ThumbSlider />
        <BookCall url="https://calendly.com/himanshu-ytclientslab/30min" />
      </SiteShell>
    </div>
  );
}

export default App;
