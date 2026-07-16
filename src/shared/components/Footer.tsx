import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-5">
          <h2 className="text-3xl font-bold">weeb</h2>

          <div>
            <h3 className="mb-4 text-muted">PRODUCT</h3>
            <p>Pricing</p>
            <p>Overview</p>
            <p>Browse</p>
            <p>Accessibility</p>
            <p>Five</p>
          </div>

          <div>
            <h3 className="mb-4 text-muted">SOLUTIONS</h3>
            <p>Brainstorming</p>
            <p>Ideation</p>
            <p>Wireframing</p>
            <p>Research</p>
          </div>

          <div>
            <h3 className="mb-4 text-muted">RESOURCES</h3>
            <p>Help Center</p>
            <p>Blog</p>
            <p>Tutorials</p>
          </div>

          <div>
            <h3 className="mb-4 text-muted">COMPANY</h3>
            <p>About</p>
            <p>Press</p>
            <p>Events</p>
            <p>Careers</p>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border-light pt-8">
          <p>© 2025 Weeb, Inc. All rights reserved.</p>

          <div className="flex gap-4 text-xl">
            <FaYoutube />
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
