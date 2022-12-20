import { useDispatch } from "react-redux";
import { SIZES, SAUCE, CRUST, CHEESE_AMOUNT, TOPPINGS, DELIVERY_MODE } from "../constants/pizza-options";
import styles from '../styles/components/OrderSummary.module.css'

const OrderSummary = ({isReadOnly, title, mode, items, setCarryoutMode, setDeliveryMode, removeItemFromCart }) => {
  return (
    <div>
      <h2>{title}</h2>
          <div>
          <strong>Mode:</strong> {mode}
            { (!isReadOnly) &&
              (mode === DELIVERY_MODE ? (
                  <button className="text" onClick={setCarryoutMode}>(Switch to Carryout)</button>
                ) : (
                  <button className="text" onClick={setDeliveryMode}>(Switch to Delivery)</button>
                )
              )
            }
          </div>
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
                  {isReadOnly ? (<>{displayName}</>) : (
                    <>{displayName} <button className="text" onClick={() => removeItemFromCart(id)}>(remove)</button></>
                  )}
                  <p><strong>Size:</strong> {SIZES[size].displayName}</p>
                  <p><strong>Crust:</strong> {CRUST[crust]?.displayName}</p>
                  <p><strong>Sauce:</strong> {SAUCE[sauce].displayName}</p>
                  <p><strong>Cheese Amount:</strong> {CHEESE_AMOUNT[cheeseAmount]?.displayName}</p>
                  <p><strong>Toppings:</strong> {toppings.map((topping) => TOPPINGS[topping]?.displayName).join(', ')}</p>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default OrderSummary;