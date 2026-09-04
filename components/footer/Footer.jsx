import Logo from "@/components/footer/Logo";
import SiteLicens from "./SiteLicens";
import BackToTop from "./BackToTop";
import SiteInfo from "./SiteInfo";

const Footer = () => {
  return (
    <footer className="container flex flex-col mx-auto my-10">
      <div className="flex justify-between items-center bg-zinc-200 rounded">
        <Logo />
        <SiteInfo />
        <SiteLicens />
      </div>

      <BackToTop />
    </footer>
  );
};

export default Footer;
