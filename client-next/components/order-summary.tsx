import {
  SIZES,
  SAUCE,
  CRUST,
  CHEESE_AMOUNT,
  TOPPINGS,
  DELIVERY_MODE,
} from "../constants/pizza-options";
import type { Pizza } from "../types/pizza.types";
import styles from "../styles/components/OrderSummary.module.css";
import { MouseEventHandler } from "react";

interface Props {
  /** Set to false to display edit buttons */
  isReadOnly: boolean;
  /** Heading text */
  title: string;
  /** Name provided on checkout */
  name?: string;
  /** Email address provided on checkout */
  email?: string;
  /** Delivery mode */
  mode: string;
  /** List of pizzas to display info for */
  items: Pizza[];
  /** Used in conjunction with isReadOnly=true */
  setCarryoutMode?: MouseEventHandler;
  /** Used in conjunction with isReadOnly=true */
  setDeliveryMode?: MouseEventHandler;
  /** Used in conjunction with isReadOnly=true */
  removeItemFromCart?: Function;
}

const OrderSummary = ({
  isReadOnly,
  title,
  email,
  name,
  mode,
  items,
  setCarryoutMode,
  setDeliveryMode,
  removeItemFromCart,
}: Props) => {
  return (
    <div>
      <h2 id="order-summary-title">{title}</h2>
      {name && email && (
        <>
          <div>
            <strong>Name:</strong> {name}
          </div>
          <div>
            <strong>Email:</strong> {email}
          </div>
        </>
      )}
      <div>
        <strong>Mode:</strong> {mode}
        {!isReadOnly &&
          (mode === DELIVERY_MODE ? (
            <button className="text" onClick={setCarryoutMode}>
              (Switch to Carryout)
            </button>
          ) : (
            <button className="text" onClick={setDeliveryMode}>
              (Switch to Delivery)
            </button>
          ))}
      </div>
      <div>
        <div role="alert" aria-live="polite">
          {items.length === 0
            ? "No items in your cart"
            : `${items.length} items in your cart`}
        </div>
        {items.length === 0 ? (
          <div>Add some 'za!</div>
        ) : (
          <ul className={styles.items}>
            {items.map((item) => {
              const {
                id,
                displayName,
                size,
                crust,
                sauce,
                cheeseAmount,
                toppings,
              } = item;

              return (
                <li key={id}>
                  {isReadOnly ? (
                    <>{displayName}</>
                  ) : (
                    <>
                      {displayName}{" "}
                      <button
                        className="text"
                        onClick={() => removeItemFromCart(id)}
                        aria-label={`Remove ${displayName} from cart`}
                      >
                        (remove)
                      </button>
                    </>
                  )}
                  <p>
                    <strong>Size:</strong> {SIZES[size].displayName}
                  </p>
                  <p>
                    <strong>Crust:</strong> {CRUST[crust]?.displayName}
                  </p>
                  <p>
                    <strong>Sauce:</strong> {SAUCE[sauce].displayName}
                  </p>
                  <p>
                    <strong>Cheese Amount:</strong>{" "}
                    {CHEESE_AMOUNT[cheeseAmount]?.displayName}
                  </p>
                  <p>
                    <strong>Toppings:</strong>{" "}
                    {toppings
                      .map((topping) => TOPPINGS[topping]?.displayName)
                      .join(", ")}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
