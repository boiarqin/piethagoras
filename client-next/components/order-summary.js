import { useDispatch } from "react-redux";
import { SIZES, SAUCE, CRUST, CHEESE_AMOUNT, TOPPINGS } from "../constants/pizza-options";
import styles from '../styles/components/OrderSummary.module.css'

const OrderSummary = ({ mode, items }) => {
  const dispatch = useDispatch();
  return (
    <>
      {mode && <div><strong>Mode:</strong> {mode}</div>}
      <div>
        {items.length === 0 ? (
          <span>No items in your cart -- Add some 'za!</span>
        ) : (
          <ul className={styles.items}>
            {items.map(item => {
              const {
                id,
                displayName,
                size,
                crust,
                sauce,
                cheeseAmount,
                toppings
              } = item;

              return (
                <li key={id}>
                  {displayName} <button className="text" onClick={() => dispatch(removeItemFromCart(id))}>(remove)</button>
                  <p><strong>Size:</strong> {SIZES[size].displayName}</p>
                  <p><strong>Crust:</strong> {CRUST[crust].displayName}</p>
                  <p><strong>Sauce:</strong> {SAUCE[sauce].displayName}</p>
                  <p><strong>Cheese Amount:</strong> {CHEESE_AMOUNT[cheeseAmount].displayName}</p>
                  <p><strong>Toppings:</strong> {toppings.map((topping) => TOPPINGS[topping].displayName).join(', ')}</p>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </>
  )
}

export default OrderSummary;