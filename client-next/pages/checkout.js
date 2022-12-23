import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import {useMutation, gql} from '@apollo/client';
import PurchaseFunnel from "../layouts/purchase-funnel";
import { completeCheckout } from '../redux/cart/cartSlice';
import OrderSummary from '../components/order-summary';
import styles from '../styles/pages/NewOrder.module.css';

const CREATE_ORDER_MUTATION = gql`
    mutation PlaceOrder(
        $input: OrderInput
    ) {
        placeOrder(input: $input) {
            id
        }
    }
`;

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

    const [createOrder] = useMutation(CREATE_ORDER_MUTATION, {
        variables: {
            input: {
                email: 'mcpizzalover@testemail.com',
                name: 'Hank McPizzaLover',
                pizzas: items,
            }
        },
        update: (cache, {data: { placeOrder: {id}}}) => {
            console.log('new order id:', id);
        },
        onCompleted: ({ placeOrder: {id}}) => {
            router.push(`/confirmation?id=${id}`)
        }
      });

    return (
        <PurchaseFunnel>
            <h1>Checkout</h1>
            <div className={styles['menu-cart-container']}>
                <div className={styles.cart}>
                    <OrderSummary isReadOnly title="Your Items" mode={mode} items={items}/>
                </div>
            </div>

            <div><strong>Name: </strong> Hank McPizzaLover</div>
            <div><strong>Email: </strong> mcpizzalover@testemail.com</div>

            <button onClick={finishCheckout}>Finish Checkout with dummy REST Endpoint</button>
            <button onClick={createOrder}>Finish Checkout with GraphQL</button>
        </PurchaseFunnel>
    )
}

export default Checkout