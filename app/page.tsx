import Image from "next/image";
import { Header } from "./components/header";
import { Hero } from "./sections/hero";
import { Section2 } from "./sections/section2";
import { Cards } from "./sections/cards";
import { Section3Smart } from "./sections/section3-optimized";
import { Section4 } from "./sections/section4";
import { Section5 } from "./sections/section5";
import { Footer } from "./components/footer";
export default function Home() {
  return (
    <div className="bg-[rgb(251,251,239)]">
      <Header />
      <Hero />
      <Section2 />
      <Cards />
      <Section3Smart />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}
