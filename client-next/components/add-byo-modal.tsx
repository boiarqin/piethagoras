import { useState } from "react";
import Modal from "react-modal";
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

interface Props {
  isModalOpen: boolean;
  onCloseModal: Function;
  addPizzaToCart: Function;
}

const AddBYOModal = ({ isModalOpen, onCloseModal, addPizzaToCart }: Props) => {
  const [size, setSize] = useState(SIZES.MEDIUM.key);
  const [crust, setCrust] = useState(CRUST.ORIGINAL.key);
  const [sauce, setSauce] = useState(SAUCE.MARINARA.key);
  const [cheeseAmount, setCheeseAmount] = useState(CHEESE_AMOUNT.REGULAR.key);
  const [toppings, setToppings] = useState(new Set());

  const closeModal = () => {
    setSize(SIZES.MEDIUM.key);
    setCrust(CRUST.ORIGINAL.key);
    setSauce(SAUCE.MARINARA.key);
    setCheeseAmount(CHEESE_AMOUNT.REGULAR.key);
    setToppings(new Set());

    onCloseModal();
  };

  const changeToppings = (e) => {
    const isChecked = e.target.checked;
    const topping = e.target.value;
    const newSet = new Set(toppings);

    if (isChecked) {
      newSet.add(topping);
    } else {
      newSet.delete(topping);
    }

    setToppings(newSet);
  };

  const addToCart = () => {
    addPizzaToCart({
      displayName: "BYO Pizza",
      size,
      crust,
      sauce,
      cheeseAmount,
      toppings: Array.from(toppings.values()),
    });
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      // onAfterOpen={afterOpenModal}
      // onRequestClose={closeModal}
      // style={customStyles}
      contentLabel="Build Your Own Pizza"
    >
      <h2>Build Your Own Pizza</h2>

      <p>
        <em>Have it your way!</em>
      </p>
      <form>
        <label>
          Choose size:
          <select onChange={(e) => setSize(e.target.value)} value={size}>
            {Object.keys(SIZES).map((key) => {
              const size = SIZES[key];

              return (
                <option key={size.key} value={size.key}>
                  {size.displayName} - {size.description}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Choose crust:
          <select onChange={(e) => setCrust(e.target.value)} value={crust}>
            {Object.keys(CRUST).map((key) => {
              const crust = CRUST[key];

              return (
                <option key={crust.key} value={crust.key}>
                  {crust.displayName} - {crust.description}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Choose sauce:
          <select onChange={(e) => setSauce(e.target.value)} value={sauce}>
            {Object.keys(SAUCE).map((key) => {
              const sauce = SAUCE[key];

              return (
                <option key={sauce.key} value={sauce.key}>
                  {sauce.displayName} - {sauce.description}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Choose cheese amount:
          <select
            onChange={(e) => setCheeseAmount(e.target.value)}
            value={cheeseAmount}
          >
            {Object.keys(CHEESE_AMOUNT).map((key) => {
              const amt = CHEESE_AMOUNT[key];

              return (
                <option key={amt.key} value={amt.key}>
                  {amt.displayName} - {amt.description}
                </option>
              );
            })}
          </select>
        </label>
        <fieldset>
          <legend>Choose toppings:</legend>
          <div>
            {Object.keys(TOPPINGS).map((key) => {
              const topping = TOPPINGS[key];

              return (
                <div key={topping.key}>
                  <input
                    type="checkbox"
                    id={`toppings-${topping.key}`}
                    value={topping.key}
                    onClick={changeToppings}
                  />
                  <label htmlFor={`toppings-${topping.key}`}>
                    {topping.displayName} - {topping.description}
                  </label>
                </div>
              );
            })}
          </div>
        </fieldset>
      </form>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={closeModal}>close</button>
    </Modal>
  );
};

export default AddBYOModal;
