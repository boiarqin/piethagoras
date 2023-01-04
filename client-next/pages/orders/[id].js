import { useQuery, gql, useSubscription } from '@apollo/client';
import BackOfHouse from "../../layouts/back-of-house";
import OrderSummary from '../../components/order-summary';
import OrderStatusTracker from '../../components/order-status-tracker';
import PizzaControlPanel from '../../components/pizza-control-panel';
// import sectionStyles from '../../styles/components/Sections.module.css';

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

const OrderDetail = ({orderId}) => {
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
        <BackOfHouse>
            {loading && <>...Loading</>}
            {/* {itemError  && <>Error: {itemError.message}</>} */}
            {data && (
                <>
                    <h1>Order Detail: {data?.order.id}</h1>
                    {(status > -1) && <OrderStatusTracker status={status} mode={mode}/>}
                    <PizzaControlPanel orderId={orderId} status={status} mode={mode} />
                    <OrderSummary isReadOnly title="Order Details" mode={mode} items={items}/>
                </>
            )}

        </BackOfHouse>
    )
}

export default OrderDetail;

export async function getServerSideProps(context) {
    return {
      props: {
        // props for your component
        // workaround for nextjs router not being immediately available
        orderId: context.query.id,
      },
    };
  }