import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import ContactHours from '../components/contact-hours';
import Careers from '../components/careers';
import Footer from '../components/footer'
import StartYourOrder from '../components/start-your-order';
import Header from '../components/header';
import styles from '../styles/pages/Home.module.css';
import sectionStyles from '../styles/components/Sections.module.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Piethagoras Pizza | Order Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className="main">
        <section className={`${sectionStyles.section} ${sectionStyles.fiftyFifty} ${sectionStyles['section-mozz']}`}>
          <div className={sectionStyles.interior}>
          <div className={sectionStyles.wrapper}>
              <div className={sectionStyles.left}>
            <h1 className={styles.title}>
              Welcome to Piethagoras Pizza Shop!
            </h1>
            <p>Pizza ipsum dolor amet peppers meatball chicken steak. Meat lovers extra sauce bbq, sauteed onions broccoli spinach peppers ham mayo philly chicken Chicago style chicken hand tossed string cheese pineapple. Hand tossed chicken Chicago style, philly steak deep crust pepperoni sausage green bell peppers. Stuffed NY style ham, steak white garlic pork sausage. Sauteed onions buffalo sauce mushrooms marinara pork peppers NY style thin crust extra cheese.</p>
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

        <StartYourOrder/>

        <section className={`${sectionStyles.section} ${styles.promos} ${sectionStyles['section-dough']}`}>
          <div className={sectionStyles.interior}>
            <h2>📰 News and Promotions</h2>
            <div className={styles.wrapper}>
              
                <Link href="/promotions/national-pizza-day" className={styles['promo-card']}>
                  <Image
                    src="/images/home-promo-1.jpg" // Route of the image file
                    height={150} // Desired size with correct aspect ratio
                    width={200} // Desired size with correct aspect ratio
                    alt="Pepperoni pizza"
                  />
                  <h3>Happy National Pizza Day! Get 20% off your order</h3>
                  <p>Tempor in minim quis. Garlic sauce green bell peppers string cheese ea, meatball pariatur proident ad chicken wing extra sauce ut platter occaecat excepteur labore.</p>
                </Link>
                <Link href="/promotions/5-year-anniversary" className={styles['promo-card']}>
                  <Image
                    src="/images/home-promo-2.jpg" // Route of the image file
                    height={150} // Desired size with correct aspect ratio
                    width={200} // Desired size with correct aspect ratio
                    alt="Margherita pizza"
                  />
                  <h3>Piethagoras celebrates our 5-year anniversary</h3>
                  <p>Magna dolore consequat deserunt. Pan pizza roll in, melted cheese veniam ullamco philly chicken adipisicing enim elit meatball parmesan white pizza aliqua.</p>
                </Link>
                <Link href="/promotions/pi-day" className={styles['promo-card']}>
                  <Image
                    src="/images/home-promo-3.jpg" // Route of the image file
                    height={150} // Desired size with correct aspect ratio
                    width={200} // Desired size with correct aspect ratio
                    alt="3 takeout boxes of pizza"
                  />
                  <h3>Happy PI Day! Buy 2 medium pizzas get 1 free</h3>
                  <p>Cupidatat hawaiian in ad minim. Chicken wing aliqua anim melted cheese, pan philly chicken culpa thin crust et string cheese bacon exercitation deserunt.</p>
                </Link>
            </div>
          </div>
        </section>

        <section className={`${sectionStyles.section} ${sectionStyles['section-crust']}`}>
          <div className={sectionStyles.interior}>
            <h2>📜 Our Story</h2>
            <p>Id meat lovers aute, ricotta sausage ranch do ad garlic parmesan laborum mozzarella philly chicken ex. Anim pan sed, marinara mushrooms in nulla bbq sauce culpa. Ad duis pesto in lorem stuffed crust ipsum pepperoni. Pineapple philly chicken proident commodo platter nisi bbq rib green bell peppers do. Nulla bbq sauce sint, duis esse pineapple ad sausage garlic sauce parmesan extra cheese. Incididunt hand tossed minim ut sausage, do voluptate sausage philly steak bacon cupidatat exercitation red onions. Large ut broccoli, ea ut deep crust culpa anchovies cupidatat.</p>
            <p>Pariatur hawaiian bacon stuffed crust veniam laboris, fresh tomatoes deserunt aute id ham meatball beef Chicago style. Enim excepteur pariatur incididunt ranch. In voluptate culpa nisi. Steak thin crust ham, chicken excepteur enim eiusmod id dolore exercitation sunt spinach meatball. Platter deep crust spinach proident broccoli occaecat, pepperoni personal. Thin crust ex beef, laborum cillum meatball exercitation white pizza steak et.</p>
          </div>
        </section>

        <Careers/>

        <ContactHours/>

      </main>

      <Footer/>
    </div>
  )
}