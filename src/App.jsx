import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Main, SiteShell, Method, WorkExamples } from "./components/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <SiteShell>
      {/* <Navbar /> */}
      <Main />
      <Method />
      <WorkExamples />
      {/* other sections go here: Services, Cases, Testimonials, CTA, Footer */}
    </SiteShell>
  );
}

export default App;
