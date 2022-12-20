import Head from 'next/head'
import Footer from '../components/footer'
import HeaderSimple from '../components/header-simple';
import ContactHours from '../components/contact-hours';

const PurchaseFunnel = ({ children }) => {
    return (
        <div className="container">
            <Head>
                <title>Piethagoras Pizza | Order Online</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeaderSimple />

            <main className="main">
                {children}
            </main>

            <ContactHours />

            <Footer />
        </div>
    )
}

export default PurchaseFunnel;