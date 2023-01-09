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
      <GlobalHead />

      <Header isKitchen />

      <main className="main">{children}</main>

      <Footer />
    </div>
  );
};

export default BackOfHouse;
