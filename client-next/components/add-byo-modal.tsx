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
import modalStyles from "../styles/components/Modal.module.css";
import formStyles from "../styles/components/Form.module.css";

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
      className={modalStyles.modal}
      contentLabel="Build Your Own Pizza"
    >
      <div className={modalStyles.header}>
        <h2 className={modalStyles.title}>Build Your Own Pizza</h2>
        <button
          className={modalStyles["close-button"]}
          onClick={closeModal}
          aria-label="Close Modal"
        >
          X
        </button>
      </div>

      <div className={modalStyles.content}>
        <p>
          <em>Have it your way!</em>
        </p>
        <form className={formStyles.form}>
          <div className={formStyles["form-field"]}>
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
          </div>
          <div className={formStyles["form-field"]}>
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
          </div>
          <div className={formStyles["form-field"]}>
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
          </div>
          <div className={formStyles["form-field"]}>
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
          </div>
          <fieldset className={formStyles.fieldset}>
            <legend className={formStyles.legend}>Choose toppings:</legend>
            <div>
              {Object.keys(TOPPINGS).map((key) => {
                const topping = TOPPINGS[key];

                return (
                  <div
                    key={topping.key}
                    className={formStyles["checkbox-option"]}
                  >
                    <input
                      type="checkbox"
                      id={`toppings-${topping.key}`}
                      value={topping.key}
                      onChange={changeToppings}
                    />
                    <label
                      className={formStyles["checkbox-label"]}
                      htmlFor={`toppings-${topping.key}`}
                    >
                      {topping.displayName} - {topping.description}
                    </label>
                  </div>
                );
              })}
            </div>
          </fieldset>
        </form>
      </div>
      <div className={modalStyles.footer}>
        <button className="primary" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </Modal>
  );
};

export default AddBYOModal;
