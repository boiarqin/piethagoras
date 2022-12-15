import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import styles from '../styles/components/Header.module.css'

const Header = () => {
  const {items} = useSelector((state) => state.cart)

    return (
        <header className={styles.header}>
        <nav >
          <ul>
            <li><Link href="/"><span className={styles.piLogo}>𝜋</span></Link></li>
            <li><Link href="/new-order">Order Online {items.length === 0 ? '' : `(🛒 ${items.length})`} </Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/tracker">Tracker</Link></li>
            <li><Link href="/kitchen">Kitchen (Employees Only)</Link></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;