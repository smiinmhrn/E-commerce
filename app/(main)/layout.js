import Header from "@/components/headers/Header";
import Footer from "@/components/footer/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
