import Link from "next/link";
import styles from "../styles/components/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <span className={styles.piLogo}>𝜋</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
