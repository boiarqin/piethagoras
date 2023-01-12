import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { gql } from "../__generated__/gql";
import PurchaseFunnel from "../layouts/purchase-funnel";
import {
  completeCheckout,
  clearCartAndCheckoutInfo,
} from "../redux/cart/cartSlice";
import OrderSummary from "../components/order-summary";
import styles from "../styles/pages/NewOrder.module.css";

const CREATE_ORDER_MUTATION = gql(`
  mutation PlaceOrder($input: OrderInput) {
    placeOrder(input: $input) {
      id
    }
  }
`);

const Checkout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { mode, items } = useAppSelector((state) => state.cart);
  const [name, setName] = useState("Liz Lemonade");
  const [email, setEmail] = useState("pizzalover@testemail.com");

  const finishCheckout = () => {
    dispatch(
      completeCheckout({
        name,
        email,
      })
    )
      .unwrap()
      .then((orderId) => {
        // navigate to confirmation page
        router.push(`/confirmation?id=${orderId}`);
      });
  };

  const [createOrder] = useMutation(CREATE_ORDER_MUTATION, {
    // variables: {
    //   input: {
    //     email: "mcpizzalover@testemail.com",
    //     name: "Hank McPizzaLover",
    //     mode,
    //     pizzas: items.map((item) => {
    //       const {
    //         displayName: name,
    //         size,
    //         crust,
    //         sauce,
    //         cheeseAmount,
    //         toppings,
    //       } = item;
    //       return {
    //         name,
    //         size,
    //         crust,
    //         sauce,
    //         cheeseAmount,
    //         toppings: toppings.join(","),
    //       };
    //     }),
    //   },
    // },
    update: (
      cache,
      {
        data: {
          placeOrder: { id },
        },
      }
    ) => {
      console.log("new order id:", id);
    },
    onCompleted: ({ placeOrder: { id } }) => {
      dispatch(clearCartAndCheckoutInfo());
      router.push(`/confirmation?id=${id}`);
    },
  });

  const finishCheckoutGraphQL = () => {
    createOrder({
      variables: {
        input: {
          email,
          name,
          mode,
          pizzas: items.map((item) => {
            const {
              displayName: name,
              size,
              crust,
              sauce,
              cheeseAmount,
              toppings,
            } = item;
            return {
              name,
              size,
              crust,
              sauce,
              cheeseAmount,
              toppings: toppings.join(","),
            };
          }),
        },
      },
    });
  };

  return (
    <PurchaseFunnel>
      <h1 id="main-heading">Checkout</h1>
      <div className={styles["menu-cart-container"]}>
        <div className={styles.cart}>
          <OrderSummary
            isReadOnly
            title="Your Items"
            mode={mode}
            items={items}
          />
        </div>
      </div>

      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
      </form>

      <button onClick={finishCheckout}>
        Finish Checkout with dummy REST Endpoint
      </button>
      <button onClick={finishCheckoutGraphQL}>
        Finish Checkout with GraphQL
      </button>
    </PurchaseFunnel>
  );
};

export default Checkout;
