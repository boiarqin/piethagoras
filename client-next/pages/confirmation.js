import { useQuery, gql, useSubscription } from '@apollo/client';
import PurchaseFunnel from "../layouts/purchase-funnel";
import OrderSummary from '../components/order-summary';
import OrderStatusTracker from '../components/order-status-tracker';

const ORDER_QUERY = gql`
    query OrderQuery($id: ID) {
        order(id: $id) {
            id,
            createdAt,
            status,
            mode,
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

const STATUS_SUBSCRIPTION = gql`
    subscription OrderStatusSubscription($id: ID!) {
        orderStatus(id: $id) {
            id,
            status
        }
    }
`

const Confirmation = ({orderId}) => {
    let items = []
    let mode = '';
    let status = -1;

    const {data, loading} = useQuery(ORDER_QUERY, {
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
    status = data?.order.status; // set initial value
    
    const {
        data: statusData,
        loading: statusLoading,
      } = useSubscription(STATUS_SUBSCRIPTION, {
        variables: {
            id: orderId
        }
    });

    status = statusData?.orderStatus.status || status; // set updated value

    return (
        <PurchaseFunnel>
            <h1>Thank you for your order!</h1>
            {(status > -1) && <OrderStatusTracker status={status} mode={mode}/>}
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