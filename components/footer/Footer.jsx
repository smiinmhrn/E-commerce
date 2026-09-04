import Logo from "@/components/footer/Logo";
import SiteLicens from "./SiteLicens";
const Footer = () => {
  return (
    <footer className="container flex justify-between items-center bg-zinc-200 mx-auto rounded-lg my-10">
      <Logo />
      <SiteLicens />
    </footer>
  );
};

export default Footer;
