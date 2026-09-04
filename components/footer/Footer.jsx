import Logo from "@/components/footer/Logo";
import SiteLicens from "./SiteLicens";
import BackToTop from "./BackToTop";

const Footer = () => {


  return (
    <footer className="container flex flex-col mx-auto my-10">
      <div className="flex justify-between items-center bg-zinc-200 rounded">
        <Logo />
        <SiteLicens />
      </div>
      <BackToTop />
    </footer>
  );
};

export default Footer;
