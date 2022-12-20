import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header';
// import styles from '../styles/layouts/BackOfHouse.module.css';

const BackOfHouse = ({ children }) => {
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