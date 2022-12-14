import Head from 'next/head'
import ContactHours from '../components/contact-hours';
import Footer from '../components/footer'
import StartYourOrder from '../components/start-your-order';
import Header from '../components/header';
import styles from '../styles/BlogPost.module.css';

const PurchaseFunnel = ({ children }) => {
    return (
        <div className="container">
            <Head>
                <title>Piethagoras Pizza | Order Online</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="main">
                {/* <article className={styles['blog-post']}>
                    <div className={styles.interior}> */}
                        {children}
                    {/* </div> */}
                {/* </article> */}
            </main>

            {/* <StartYourOrder />
            <Careers /> */}

            <ContactHours />

            <Footer />
        </div>
    )
}

export default PurchaseFunnel;