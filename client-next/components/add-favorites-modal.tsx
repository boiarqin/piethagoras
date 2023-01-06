import { useState } from "react";
import Modal from "react-modal";
import { SIZES, CHEESE_AMOUNT } from "../constants/pizza-options";
import type { PresetPizza } from "../types/pizza.types";

interface Props {
  isModalOpen: boolean;
  selectedPizza: PresetPizza;
  onCloseModal: Function;
  addFavoritesToCart: Function;
}

const AddFavoritesModal = ({
  isModalOpen,
  selectedPizza,
  onCloseModal,
  addFavoritesToCart,
}: Props) => {
  const [selectedSize, setSelectedSize] = useState(SIZES.MEDIUM.key);
  const [selectedCheeseAmt, setSelectedCheeseAmt] = useState(
    CHEESE_AMOUNT.REGULAR.key
  );

  const closeModal = () => {
    setSelectedSize(SIZES.MEDIUM.key);
    setSelectedCheeseAmt(CHEESE_AMOUNT.REGULAR.key);

    onCloseModal();
  };

  const addToCart = () => {
    addFavoritesToCart({
      displayName: selectedPizza.displayName,
      size: selectedSize,
      crust: selectedPizza.crust.key,
      sauce: selectedPizza.sauce.key,
      cheeseAmount: selectedCheeseAmt,
      toppings: selectedPizza.toppings.map((topping) => topping.key),
    });
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      // onAfterOpen={afterOpenModal}
      // onRequestClose={closeModal}
      // style={customStyles}
      contentLabel="Finish customizing your pizza"
    >
      <h2>{selectedPizza.displayName}</h2>

      <p>
        <em>{selectedPizza.description}</em>
      </p>
      <p>
        <strong>Crust:</strong> {selectedPizza.crust.displayName}
      </p>
      <p>
        <strong>Sauce:</strong> {selectedPizza.sauce.displayName}
      </p>
      <p>
        <strong>Toppings:</strong>{" "}
        {selectedPizza.toppings
          .map((topping) => topping.displayName)
          .join(", ")}
      </p>

      <form>
        <label>
          Choose size:
          <select
            onChange={(e) => setSelectedSize(e.target.value)}
            value={selectedSize}
          >
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
          Choose cheese amount:
          <select
            onChange={(e) => setSelectedCheeseAmt(e.target.value)}
            value={selectedCheeseAmt}
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
      </form>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={closeModal}>close</button>
    </Modal>
  );
};

export default AddFavoritesModal;
