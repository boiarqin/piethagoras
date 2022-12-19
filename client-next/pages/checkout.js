import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import PurchaseFunnel from "../layouts/purchase-funnel";
import { SIZES, SAUCE, CRUST, CHEESE_AMOUNT, TOPPINGS, FAVORITES, DELIVERY_MODE, CARRYOUT_MODE } from "../constants/pizza-options";
import { addCheckoutInfo, clearCartAndCheckout, completeCheckout } from '../redux/cart/cartSlice';
import styles from '../styles/pages/NewOrder.module.css';


const Checkout = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { mode, items } = useSelector((state) => state.cart)

    const finishCheckout = () => {
        dispatch(completeCheckout({
            name: 'Hank McPizzaLover',
            email: 'mcpizzalover@testemail.com'
        }))
        .unwrap()
        .then((orderId) => {
            // navigate to confirmation page
            router.push(`/confirmation?id=${orderId}`)
        })
    }

    return (
        <PurchaseFunnel>
            <h1>Checkout</h1>
            <div className={styles['menu-cart-container']}>
                <div className={styles.cart}></div>
            </div>

            <div><strong>Name: </strong> Hank McPizzaLover</div>
            <div><strong>Email: </strong> mcpizzalover@testemail.com</div>

            <button onClick={finishCheckout}>Finish Checkout</button>
        </PurchaseFunnel>
    )
}

export default Checkout