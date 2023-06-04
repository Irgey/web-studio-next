import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AOS from "aos";

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <>
      <Header />
      <main> {children}</main>

      <Footer />
    </>
  );
};

export default Layout;
