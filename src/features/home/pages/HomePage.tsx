import Header from "../../../shared/components/Header";
import HeroSection from "../components/HeroSection";
import ResourcesSection from "../components/ResourcesSection";
import TrendsSection from "../components/TrendsSection";
import TrustedSection from "../components/TrustedSection";

const HomePage = () => {
  return (
    <div className="bg-background space-y-44">
      <Header />
      <HeroSection />
      <TrustedSection />
      <ResourcesSection />
      <TrendsSection />
    </div>
  );
};

export default HomePage;
