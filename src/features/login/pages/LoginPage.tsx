import Footer from "../../../shared/components/Footer";
import Header from "../../../shared/components/Header";
import FormLogin from "../components/FormLogin";

const LoginPage = () => {
  return (
    <div className="bg-background space-y-16">
      <Header />
      <FormLogin />
      <Footer />
    </div>
  );
};

export default LoginPage;
