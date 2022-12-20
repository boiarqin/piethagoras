import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import { useQuery, gql } from '@apollo/client';
import Modal from 'react-modal';
import PurchaseFunnel from "../layouts/purchase-funnel";
import { SIZES, SAUCE, CRUST, CHEESE_AMOUNT, TOPPINGS, FAVORITES, DELIVERY_MODE, CARRYOUT_MODE } from "../constants/pizza-options";
import { addCheckoutInfo, clearCartAndCheckout, completeCheckout } from '../redux/cart/cartSlice';
import styles from '../styles/pages/NewOrder.module.css';
import OrderSummary from '../components/order-summary';

const ORDER_QUERY = (id) => gql`
{
    order(id: "${id}") {
        id,
        createdAt,
        email,
        pizzasCount,
        status,
        pizzas {
            id,
            size,
            sauce,
            cheeseAmount,
            crust,
            toppings
        }
    }
}
`

const Confirmation = ({orderInfo}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    // const {
    //     query
    // }

    const {mode} = orderInfo
    let items = []

    const {data} = useQuery(ORDER_QUERY(router.query.id));
    console.log(data)

    items = data?.order.pizzas.map( pizza => {
        return {
            ...pizza,
            toppings: pizza.toppings.split(',')
        }
    }) || [];


    // router.query.id
    // const { mode, items } = useSelector((state) => state.cart)

    // const finishCheckout = () => {
    //     dispatch(completeCheckout({
    //         name: 'Hank McPizzaLover',
    //         email: 'mcpizzalover@testemail.com'
    //     }))
    //     .unwrap()
    //     .then((orderId) => {
    //         // navigate to confirmation page
    //         router.push(`/confirmation/${orderId}`)
    //     })
    // }

    return (
        <PurchaseFunnel>
            <h1>Thank you for your order!</h1>
            <h2>Order Status Tracker</h2>
            <h2>Order Details</h2>
            <OrderSummary mode={mode} items={items}/>
            {/* <div className={styles['menu-cart-container']}>
                <div className={styles.cart}></div>
            </div>

            <div><strong>Name: </strong> Hank McPizzaLover</div>
            <div><strong>Email: </strong> mcpizzalover@testemail.com</div>

            <button onClick={finishCheckout}>Finish Checkout</button> */}
        </PurchaseFunnel>
    )
}

export default Confirmation;

export async function getServerSideProps(context) {
    const {query} = context;

    console.log('confirmation id ' + query.id)

    // const {data: postData} = await fetch(`http://localhost:3000/api/cms/post?slug=${params.slug}`, { method: 'GET' })
    //   .then((response) => response.json())
  
    const orderInfo = {
        "items": [
            {
                "displayName": "Tuscan Garden",
                "size": "MEDIUM",
                "crust": "THIN_CRISPY",
                "sauce": "ALFREDO",
                "cheeseAmount": "REGULAR",
                "toppings": [
                    "TOMATO",
                    "BLACK_OLIVE",
                    "GREEN_PEPPER",
                    "ONION"
                ],
                "id": "ac1951e1-039c-4f33-884f-783b85af549b"
            },
            {
                "displayName": "Piethagoras Feast",
                "size": "MEDIUM",
                "crust": "ORIGINAL",
                "sauce": "MARINARA",
                "cheeseAmount": "REGULAR",
                "toppings": [
                    "PEPPERONI",
                    "SAUSAGE",
                    "HAM",
                    "GREEN_PEPPER",
                    "BLACK_OLIVE",
                    "ONION"
                ],
                "id": "3875d30c-5107-4f27-99d9-b58ffaf68461"
            }
        ],
        "name": "Hank McPizzaLover",
        "email": "mcpizzalover@testemail.com",
        "mode": "DELIVERY"
    }

    return {
      props: {
        // props for your component
        orderInfo,
      },
    };
  }