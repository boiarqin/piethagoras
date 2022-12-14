import PurchaseFunnel from "../layouts/purchase-funnel";
import { SIZES, SAUCE, CRUST, CHEESE_AMOUNT, TOPPINGS, FAVORITES } from "../constants/pizza-options";
import styles from '../styles/pages/NewOrder.module.css';

const NewOrder = () => {
  return (
    <PurchaseFunnel>
      <h1>Order Now</h1>
      <div className={styles['menu-cart-container']}>
        <div className={styles.cart}>
          <h2>Your Items</h2>
          <div>
            Switch Delivery/Carryout mode
          </div>
          <div>
            <ul>
                <li>Selected item x 1</li>
                <li>Selected item x 1</li>

            </ul>
          </div>
          <button>Place Order</button>
        </div>

        <div className={styles.menu}>
          <h2>Menu</h2>
          <p><em>Choose from one of our favorites or build your own!</em></p>
          <ul className={styles.favorites}>
            {
              FAVORITES.map((pizza) => {
                const toppings = pizza.toppings.map((topping) => topping.displayName).join(', ')

                return (
                  <li key={pizza.displayName} className={styles['card-wrapper']}>
                    <button className={styles.card}>
                    <h3>{pizza.displayName}</h3>
                    <p><em>{pizza.description}</em></p>
                    </button>
                  </li>
                )
              })
            }
            <li key="byo" className={styles['card-wrapper']}>
            <button className={styles.card}>
              <h3>Build Your Own</h3>
              <p><em>Have it your way!</em></p>
              </button>
            </li>
          </ul>
        </div>
      </div>

    </PurchaseFunnel>
  )
}

export default NewOrder;