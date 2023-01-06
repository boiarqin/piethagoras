import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import PurchaseFunnel from "../layouts/purchase-funnel";
import {
  SIZES,
  SAUCE,
  CRUST,
  CHEESE_AMOUNT,
  TOPPINGS,
  FAVORITES,
  DELIVERY_MODE,
  CARRYOUT_MODE,
} from "../constants/pizza-options";
import {
  setDeliveryMode,
  setCarryoutMode,
  addItemToCart,
  removeItemFromCart,
} from "../redux/cart/cartSlice";
import OrderSummary from "../components/order-summary";
import AddFavoritesModal from "../components/add-favorites-modal";
import styles from "../styles/pages/NewOrder.module.css";

const NewOrder = () => {
  const dispatch = useDispatch();
  const { mode, items } = useSelector((state) => state.cart);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  // const openModal =
  const openFavoritesModal = (pizza) => {
    setSelectedPizza(pizza);
    setIsModalOpen(true);
  };
  const addFavoritesToCart = (pizza) => {
    console.log(selectedPizza);
    dispatch(
      // addItemToCart({
      //   displayName: selectedPizza.displayName,
      //   size: selectedSize,
      //   crust: selectedPizza.crust.key,
      //   sauce: selectedPizza.sauce.key,
      //   cheeseAmount: selectedCheeseAmt,
      //   toppings: selectedPizza.toppings.map((topping) => topping.key),
      // })
      addItemToCart(pizza)
    );
    closeModal();
  };
  // const openBYOModal = () => { }
  const closeModal = () => {
    setSelectedPizza(null);
    // setSelectedSize(SIZES.MEDIUM.key);
    setIsModalOpen(false);
  };

  return (
    <PurchaseFunnel>
      <h1>Order Now</h1>
      <div className={styles["menu-cart-container"]}>
        <div className={styles.cart}>
          <OrderSummary
            isReadOnly={false}
            title="Your Items"
            mode={mode}
            items={items}
            removeItemFromCart={(id) => dispatch(removeItemFromCart(id))}
            setCarryoutMode={() => dispatch(setCarryoutMode())}
            setDeliveryMode={() => dispatch(setDeliveryMode())}
          />
          <Link passHref href="/checkout">
            <button className={`primary {styles.checkout}`}>
              Go To Checkout
            </button>
          </Link>
        </div>

        <div className={styles.menu}>
          <h2>Menu</h2>
          <p>
            <em>Choose from one of our favorites or build your own!</em>
          </p>
          <ul className={styles.favorites}>
            {FAVORITES.map((pizza) => {
              const toppings = pizza.toppings
                .map((topping) => topping.displayName)
                .join(", ");

              return (
                <li key={pizza.displayName} className={styles["card-wrapper"]}>
                  <button
                    className={styles.card}
                    onClick={() => openFavoritesModal(pizza)}
                  >
                    <h3>{pizza.displayName}</h3>
                    <p>
                      <em>{pizza.description}</em>
                    </p>
                  </button>
                </li>
              );
            })}
            <li key="byo" className={styles["card-wrapper"]}>
              <button className={styles.card}>
                <h3>Build Your Own</h3>
                <p>
                  <em>Have it your way!</em>
                </p>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {isModalOpen && (
        <AddFavoritesModal
          isModalOpen={isModalOpen}
          selectedPizza={selectedPizza}
          addFavoritesToCart={addFavoritesToCart}
          onCloseModal={closeModal}
        />
      )}
    </PurchaseFunnel>
  );
};

export default NewOrder;
