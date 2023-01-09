import type { ReactNode } from "react";
import GlobalHead from "../components/global-head";
import ContactHours from "../components/contact-hours";
import Careers from "../components/careers";
import Footer from "../components/footer";
import StartYourOrder from "../components/start-your-order";
import Header from "../components/header";
import styles from "../styles/layouts/BlogPost.module.css";

interface Props {
  children: ReactNode;
}

const BlogPost = ({ children }: Props) => {
  return (
    <div className="container">
      <GlobalHead />

      <Header />

      <main className="main">
        <article className={styles["blog-post"]}>
          <div className={styles.interior}>{children}</div>
        </article>
      </main>

      <StartYourOrder />
      <Careers />

      <ContactHours />

      <Footer />
    </div>
  );
};

export default BlogPost;
