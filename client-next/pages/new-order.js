import { useDispatch, useSelector } from "react-redux";
import PurchaseFunnel from "../layouts/purchase-funnel";
import { SIZES, SAUCE, CRUST, CHEESE_AMOUNT, TOPPINGS, FAVORITES, DELIVERY_MODE, CARRYOUT_MODE } from "../constants/pizza-options";
import { setDeliveryMode, setCarryoutMode, addItemToCart } from '../redux/cart/cartSlice';
import styles from '../styles/pages/NewOrder.module.css';

const NewOrder = () => {
  const dispatch = useDispatch();
  const { mode, items } = useSelector((state) => state.cart)

  return (
    <PurchaseFunnel>
      <h1>Order Now</h1>
      <div className={styles['menu-cart-container']}>
        <div className={styles.cart}>
          <h2>Your Items</h2>
          <div>
            Mode: {mode}
            { mode === DELIVERY_MODE ? (
              <button onClick={() => dispatch(setCarryoutMode())}>Switch to Carryout</button>
            ) : (
              <button onClick={() => dispatch(setDeliveryMode())}>Switch to Delivery</button>
            )}
            
          </div>
          <div>
            {items.length === 0 ? (
              <span>No items in your cart -- Add some 'za!</span>
            ) : (
              <ul className={styles.items}>
                {items.map(item => {
                  return (
                    <li>{item.displayName}</li>
                  )
                })}
              </ul>
            )}
          </div>
          <button className={styles.checkout}>Checkout</button>
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
                    <button className={styles.card} onClick={() => dispatch(addItemToCart(pizza))}>
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