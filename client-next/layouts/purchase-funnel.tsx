import Head from "next/head";
import type { ReactNode } from "react";
import GlobalHead from "../components/global-head";
import Footer from "../components/footer";
import HeaderSimple from "../components/header-simple";
import ContactHours from "../components/contact-hours";

interface Props {
  children: ReactNode;
}

const PurchaseFunnel = ({ children }: Props) => {
  return (
    <div className="container">
      <GlobalHead title="Order Now" />

      <HeaderSimple />

      <main id="main" className="main">
        {children}
      </main>

      <ContactHours />

      <Footer />
    </div>
  );
};

export default PurchaseFunnel;
