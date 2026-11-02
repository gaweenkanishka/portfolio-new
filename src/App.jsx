import { useRef } from "react";
import Background from "./components/Background.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Videos from "./components/Videos.jsx";
import Stack from "./components/Stack.jsx";
import Contact from "./components/Contact.jsx";
import Dock from "./components/Dock.jsx";
import usePointerEffects from "./hooks/usePointerEffects.js";

export default function App() {
  const lens = useRef(null);
  usePointerEffects(lens);

  return (
    <>
      <Background />
      <main>
        <Hero />
        <Services />
        <Videos />
        <Stack />
        <Contact />
      </main>
      <Dock />
      <div className="lens" ref={lens} aria-hidden="true" />
    </>
  );
}
