import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import PurchaseFunnel from "../layouts/purchase-funnel";
import { completeCheckout } from '../redux/cart/cartSlice';
import OrderSummary from '../components/order-summary';
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
                <div className={styles.cart}>
                    <OrderSummary isReadOnly title="Your Items" mode={mode} items={items}/>
                </div>
            </div>

            <div><strong>Name: </strong> Hank McPizzaLover</div>
            <div><strong>Email: </strong> mcpizzalover@testemail.com</div>

            <button onClick={finishCheckout}>Finish Checkout</button>
        </PurchaseFunnel>
    )
}

export default Checkout