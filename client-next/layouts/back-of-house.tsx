import type { ReactNode } from 'react';
import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header';

interface Props {
    children: ReactNode
}

const BackOfHouse = ({ children } : Props) => {
    return (
        <div className="container">
            <Head>
                <title>Piethagoras Pizza | Back of House</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header isKitchen />

            <main className="main">
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default BackOfHouse;