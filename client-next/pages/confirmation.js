import { useQuery, gql } from '@apollo/client';
import PurchaseFunnel from "../layouts/purchase-funnel";
import OrderSummary from '../components/order-summary';

const ORDER_QUERY = gql`
    query OrderQuery($id: ID) {
        order(id: $id) {
            id,
            createdAt,
            email,
            status,
            pizzas {
                id,
                name,
                size,
                sauce,
                cheeseAmount,
                crust,
                toppings
            }
        }
    }
`

const Confirmation = ({orderId}) => {
    let items = []
    let mode = '';

    const {data} = useQuery(ORDER_QUERY, {
        variables: {
            id: orderId
        }
    });
    

    items = data?.order.pizzas.map( pizza => {
        return {
            ...pizza,
            toppings: pizza.toppings.split(',')
        }
    }) || [];

    mode = data?.order.mode;

    return (
        <PurchaseFunnel>
            <h1>Thank you for your order!</h1>
            <h2>Order Status Tracker</h2>
            <OrderSummary isReadOnly title="Order Details" mode={mode} items={items}/>
        </PurchaseFunnel>
    )
}

export default Confirmation;

export async function getServerSideProps(context) {
    const {query} = context;

    console.log('confirmation id ' + query.id)

    return {
      props: {
        orderId: query.id,
      },
    };
  }