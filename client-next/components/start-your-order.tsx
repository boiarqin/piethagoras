import Link from "next/link";
import { useDispatch } from "react-redux";
import { setDeliveryMode, setCarryoutMode } from "../redux/cart/cartSlice";
import sectionStyles from "../styles/components/Sections.module.css";
import startYourOrderStyles from "../styles/components/StartYourOrder.module.css";

const StartYourOrder = () => {
  const dispatch = useDispatch();
  return (
    <section
      className={`${sectionStyles.section} ${startYourOrderStyles["start-your-order"]} ${sectionStyles["section-crust"]}`}
    >
      <div className={startYourOrderStyles.interior}>
        <h2>🍕 Start Your Order</h2>
        <div className={startYourOrderStyles.options}>
          <Link passHref href="/new-order?mode=delivery">
            <button
              className="primary"
              onClick={() => dispatch(setDeliveryMode())}
            >
              DELIVERY
            </button>
          </Link>
          <span>or</span>
          <Link passHref href="/new-order?mode=carryout">
            <button
              className="primary"
              onClick={() => dispatch(setCarryoutMode())}
            >
              CARRY OUT
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StartYourOrder;
