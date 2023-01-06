import Head from 'next/head'
import type { ReactNode } from 'react';
import Footer from '../components/footer'
import HeaderSimple from '../components/header-simple';
import ContactHours from '../components/contact-hours';

interface Props {
    children: ReactNode
}

const PurchaseFunnel = ({ children } : Props) => {
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