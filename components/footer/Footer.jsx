import Logo from "@/components/footer/Logo";
import SiteLicens from "@/components/footer/SiteLicens";
import BackToTop from "@/components/footer/BackToTop";
import SiteInfo from "@/components/footer/SiteInfo";

const Footer = () => {
  return (
    <footer className="container mx-auto my-10 px-4">
      {/* Footer Main */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch bg-zinc-200 rounded-lg overflow-hidden">
        <Logo />

        <SiteInfo />

        <SiteLicens />
      </div>

      {/* Back To Top */}
      <BackToTop />
    </footer>
  );
};

export default Footer;
