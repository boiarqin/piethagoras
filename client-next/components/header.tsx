import Link from "next/link";
import { useAppSelector } from "../redux/hooks";
import clsx from "clsx";
import styles from "../styles/components/Header.module.css";

interface Props {
  /** Displays a different color header if true */
  isKitchen?: boolean;
}

const Header = ({ isKitchen = false }: Props) => {
  const { items } = useAppSelector((state) => state.cart);

  return (
    <header className={clsx(styles.header, { [styles.kitchen]: isKitchen })}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <span className={styles.piLogo}>𝜋</span>
            </Link>
          </li>
          <li>
            <Link href="/new-order">
              Order Online {items.length === 0 ? "" : `(🛒 ${items.length})`}{" "}
            </Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/kitchen">Kitchen (Employees Only)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
