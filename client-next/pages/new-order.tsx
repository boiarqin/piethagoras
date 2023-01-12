import { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks";

import PurchaseFunnel from "../layouts/purchase-funnel";
import { FAVORITES } from "../constants/pizza-options";
import {
  setDeliveryMode,
  setCarryoutMode,
  addItemToCart,
  removeItemFromCart,
} from "../redux/cart/cartSlice";
import OrderSummary from "../components/order-summary";
import AddFavoritesModal from "../components/add-favorites-modal";
import AddBYOModal from "../components/add-byo-modal";
import styles from "../styles/pages/NewOrder.module.css";

const NewOrder = () => {
  const dispatch = useDispatch();
  const { mode, items } = useAppSelector((state) => state.cart);

  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false);
  const [isBYOModalOpen, setIsBYOModalOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const openFavoritesModal = (pizza) => {
    setSelectedPizza(pizza);
    setIsFavoritesModalOpen(true);
  };

  const openBYOModal = () => {
    setIsBYOModalOpen(true);
  };

  const addPizzaToCart = (pizza) => {
    console.log(pizza);
    dispatch(addItemToCart(pizza));
    closeModal();
  };

  const closeModal = () => {
    setSelectedPizza(null);
    setIsFavoritesModalOpen(false);
    setIsBYOModalOpen(false);
  };

  return (
    <PurchaseFunnel>
      <h1 id="main-heading">Order Now</h1>
      <div className={styles["menu-cart-container"]}>
        <aside className={styles.cart} aria-labelledby="order-summary-title">
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
        </aside>

        <section className={styles.menu} aria-label="Add Items From Menu">
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
              <button className={styles.card} onClick={openBYOModal}>
                <h3>Build Your Own</h3>
                <p>
                  <em>Have it your way!</em>
                </p>
              </button>
            </li>
          </ul>
        </section>
      </div>
      {isFavoritesModalOpen && (
        <AddFavoritesModal
          isModalOpen={isFavoritesModalOpen}
          selectedPizza={selectedPizza}
          addPizzaToCart={addPizzaToCart}
          onCloseModal={closeModal}
        />
      )}
      {isBYOModalOpen && (
        <AddBYOModal
          isModalOpen={isBYOModalOpen}
          addPizzaToCart={addPizzaToCart}
          onCloseModal={closeModal}
        />
      )}
    </PurchaseFunnel>
  );
};

export default NewOrder;
