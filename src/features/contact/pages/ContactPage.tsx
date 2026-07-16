import Header from "../../../shared/components/Header";
import FormContact from "../components/FormContact";
import HeroSection from "../components/HeroSection";

const ContactPage = () => {
  return (
    <div className="bg-background">
      <Header />
      <HeroSection />
      <FormContact />
    </div>
  );
};

export default ContactPage;
