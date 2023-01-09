import { GetServerSideProps } from "next";
import Link from "next/link";
import Image from "next/image";
import GlobalHead from "../components/global-head";
import ContactHours from "../components/contact-hours";
import Careers from "../components/careers";
import Footer from "../components/footer";
import StartYourOrder from "../components/start-your-order";
import Header from "../components/header";
import styles from "../styles/pages/Home.module.css";
import sectionStyles from "../styles/components/Sections.module.css";
import type { BlogPost } from "../types/blog.types";

interface Props {
  allPostsData: BlogPost[];
}

export default function Home({ allPostsData }: Props) {
  return (
    <div className="container">
      <GlobalHead />

      <Header />

      <main className="main">
        <section
          className={`${sectionStyles.section} ${sectionStyles.fiftyFifty} ${sectionStyles["section-mozz"]}`}
        >
          <div className={sectionStyles.interior}>
            <div className={sectionStyles.wrapper}>
              <div className={sectionStyles.left}>
                <h1 className={styles.title}>
                  Welcome to Piethagoras Pizza Shop!
                </h1>
                <p>
                  Pizza ipsum dolor amet peppers meatball chicken steak. Meat
                  lovers extra sauce bbq, sauteed onions broccoli spinach
                  peppers ham mayo philly chicken Chicago style chicken hand
                  tossed string cheese pineapple. Hand tossed chicken Chicago
                  style, philly steak deep crust pepperoni sausage green bell
                  peppers. Stuffed NY style ham, steak white garlic pork
                  sausage. Sauteed onions buffalo sauce mushrooms marinara pork
                  peppers NY style thin crust extra cheese.
                </p>
              </div>

              <div className={sectionStyles.right}>
                <Image
                  src="/images/home-title.jpg"
                  height={200}
                  width={300}
                  alt="Pizza with a slice cut out"
                />
              </div>
            </div>
          </div>
        </section>

        <StartYourOrder />

        <section
          className={`${sectionStyles.section} ${styles.promos} ${sectionStyles["section-dough"]}`}
        >
          <div className={sectionStyles.interior}>
            <h2>📰 News and Promotions</h2>
            <div className={styles.wrapper}>
              {allPostsData.map((post) => {
                const { slug, imageSrc, imageAltText, title, snippet } = post;

                return (
                  <Link
                    key={slug}
                    href={`/promotions/${slug}`}
                    className={styles["promo-card"]}
                  >
                    <Image
                      src={imageSrc} // Route of the image file
                      height={150} // Desired size with correct aspect ratio
                      width={200} // Desired size with correct aspect ratio
                      alt={imageAltText}
                    />
                    <h3>{title}</h3>
                    <p>{snippet}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className={`${sectionStyles.section} ${sectionStyles["section-crust"]}`}
        >
          <div className={sectionStyles.interior}>
            <h2>📜 Our Story</h2>
            <p>
              Id meat lovers aute, ricotta sausage ranch do ad garlic parmesan
              laborum mozzarella philly chicken ex. Anim pan sed, marinara
              mushrooms in nulla bbq sauce culpa. Ad duis pesto in lorem stuffed
              crust ipsum pepperoni. Pineapple philly chicken proident commodo
              platter nisi bbq rib green bell peppers do. Nulla bbq sauce sint,
              duis esse pineapple ad sausage garlic sauce parmesan extra cheese.
              Incididunt hand tossed minim ut sausage, do voluptate sausage
              philly steak bacon cupidatat exercitation red onions. Large ut
              broccoli, ea ut deep crust culpa anchovies cupidatat.
            </p>
            <p>
              Pariatur hawaiian bacon stuffed crust veniam laboris, fresh
              tomatoes deserunt aute id ham meatball beef Chicago style. Enim
              excepteur pariatur incididunt ranch. In voluptate culpa nisi.
              Steak thin crust ham, chicken excepteur enim eiusmod id dolore
              exercitation sunt spinach meatball. Platter deep crust spinach
              proident broccoli occaecat, pepperoni personal. Thin crust ex
              beef, laborum cillum meatball exercitation white pizza steak et.
            </p>
          </div>
        </section>

        <Careers />

        <ContactHours />
      </main>

      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { data: allPostsData } = await fetch(
    "http://localhost:3000/api/cms/posts",
    { method: "GET" }
  ).then((response) => response.json());

  return {
    props: {
      // props for your component
      allPostsData,
    },
  };
};
