import Link from 'next/link';
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
        <nav >
          <ul>
            <li><Link href="/"><span className={styles.piLogo}>𝜋</span></Link></li>
            <li><Link href="/new-order">Order Online</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/tracker">Tracker</Link></li>
            <li><Link href="/kitchen">Kitchen (Employees Only)</Link></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;