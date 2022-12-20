import { useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import PurchaseFunnel from "../layouts/purchase-funnel";
import { SIZES, SAUCE, CRUST, CHEESE_AMOUNT, TOPPINGS, FAVORITES, DELIVERY_MODE, CARRYOUT_MODE } from "../constants/pizza-options";
import { setDeliveryMode, setCarryoutMode, addItemToCart, removeItemFromCart } from '../redux/cart/cartSlice';
import OrderSummary from '../components/order-summary';
import styles from '../styles/pages/NewOrder.module.css';


const NewOrder = () => {
  const dispatch = useDispatch();
  const { mode, items } = useSelector((state) => state.cart)

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [selectedSize, setSelectedSize] = useState(SIZES.MEDIUM.key);
  const [selectedCheeseAmt, setSelectedCheeseAmt] = useState(CHEESE_AMOUNT.REGULAR.key);
  // const openModal = 
  const openFavoritesModal = (pizza) => {
    setSelectedPizza(pizza);
    setModalIsOpen(true);
  }
  const addFavoritesToCart = () => {
    console.log(selectedPizza)
    dispatch(addItemToCart({
      displayName: selectedPizza.displayName,
      size: selectedSize,
      crust: selectedPizza.crust.key,
      sauce: selectedPizza.sauce.key,
      cheeseAmount: selectedCheeseAmt,
      toppings: selectedPizza.toppings.map(topping => topping.key),
    }));
    closeModal();
  }
  // const openBYOModal = () => { }
  const closeModal = () => {
    setSelectedPizza(null)
    setSelectedSize(SIZES.MEDIUM.key)
    setModalIsOpen(false)
  }

  return (
    <PurchaseFunnel>
      <h1>Order Now</h1>
      <div className={styles['menu-cart-container']}>
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
            <button className={`primary {styles.checkout}`}>Go To Checkout</button>
          </Link>
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
                    <button className={styles.card} onClick={() => openFavoritesModal(pizza)}>
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
      {modalIsOpen && (
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Finish customizing your pizza"
      >
            <h2>{selectedPizza.displayName}</h2>

            <p><em>{selectedPizza.description}</em></p>
            <p><strong>Crust:</strong> {selectedPizza.crust.displayName}</p>
            <p><strong>Sauce:</strong> {selectedPizza.sauce.displayName}</p>
            <p><strong>Toppings:</strong> {selectedPizza.toppings.map((topping) => topping.displayName).join(', ')}</p>

            <form>
              <label>Choose size:
              <select onChange={(e) => setSelectedSize(e.target.value)} value={SIZES.MEDIUM.key}>
                {Object.keys(SIZES).map((key) => {
                  const size = SIZES[key];
                  
                  return (<option key={size.key} value={size.key}>{size.displayName} - {size.description}</option>)
                })}
                
              </select>
              </label>
              <label>Choose cheese amount:
              <select onChange={(e) => setSelectedCheeseAmt(e.target.value)} value={CHEESE_AMOUNT.REGULAR.key}>
                {Object.keys(CHEESE_AMOUNT).map((key) => {
                  const amt = CHEESE_AMOUNT[key];
                  
                  return (<option key={amt.key} value={amt.key}>{amt.displayName} - {amt.description}</option>)
                })}
                
              </select>
              </label>
            </form>
            <button onClick={addFavoritesToCart}>Add to Cart</button>
            <button onClick={closeModal}>close</button>
      </Modal>
      )}

    </PurchaseFunnel>
  )
}

export default NewOrder;