import Contact from "./components/contact";
import OurApps from "./components/ourapps";
import PartnerSection from "./components/partner";

export default function Home() {
  return (
    <div className="w-screen">
      <div className="flex items-center justify-center h-[70vh]">
        <img src="/hero.png" alt="hero" width={700} />
      </div>
      <div id="apps">
        <OurApps />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <PartnerSection />
    </div>
  );
}
