import type { ReactNode } from "react";
import GlobalHead from "../components/global-head";
import Footer from "../components/footer";
import Header from "../components/header";

interface Props {
  children: ReactNode;
}

const BackOfHouse = ({ children }: Props) => {
  return (
    <div className="container">
      <GlobalHead title="Back of House" />

      <Header isKitchen />

      <main id="main" className="main" aria-labelledby="main-heading">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default BackOfHouse;
