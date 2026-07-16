import Footer from "../../../shared/components/Footer";
import Header from "../../../shared/components/Header";
import FormContact from "../components/FormContact";
import HeroSection from "../components/HeroSection";

const ContactPage = () => {
  return (
    <div className="bg-background space-y-6.5">
      <Header />
      <HeroSection />
      <FormContact />
      <Footer />
    </div>
  );
};

export default ContactPage;
