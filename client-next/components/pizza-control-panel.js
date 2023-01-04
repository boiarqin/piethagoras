import { useMutation, gql } from '@apollo/client';
import {DELIVERY_MODE, DELIVERY_STATUS, CARRYOUT_STATUS } from "../constants/pizza-options";
import sectionStyles from '../styles/components/Sections.module.css'
import pizzaControlPanelStyles from '../styles/components/PizzaControlPanel.module.css'


const PIZZA_CONTROL_OPTIONS = [
    'Throw it away and start over',
    'Put ingredients on dough',
    'Slide pizza into oven',
    'Take the pizza out and box it up'
]
const DELIVERY_CONTROL_OPTIONS = [
    ...PIZZA_CONTROL_OPTIONS,
    'Buckle the pizza box up',
    'Drop it on the doorstep'
]
const CARRYOUT_CONTROL_OPTIONS = [
    ...PIZZA_CONTROL_OPTIONS,
    'Put the pizza box in a holding cabinet to keep it hot',
    'Pizza has been picked up'
]

const UPDATE_ORDER_STATUS_MUTATION = gql`
    mutation UpdateOrderStats(
        $id: ID!,
        $newStatus: Int!
    ) {
        changeOrderStatus(id: $id, newStatus: $newStatus) {
            id
        }
    }
`;

const PizzaControlPanel = ({orderId, mode, status}) => {
    const controlOptions = (mode === DELIVERY_MODE) ? DELIVERY_CONTROL_OPTIONS : CARRYOUT_CONTROL_OPTIONS;

    const [updateOrder] = useMutation(UPDATE_ORDER_STATUS_MUTATION, {
        update: (cache, {data: { changeOrderStatus: {id}}}) => {
            console.log('update order id:', id);
        },
        onCompleted: ({ changeOrderStatus: {id}}) => {
            console.log('on complete order id:', id);
        }
      });

    const handleControlClick = (statusCode) => {
        updateOrder({
            variables: {
                id: orderId,
                newStatus: statusCode
            }
        })
    }

    return (
        <section className={`${sectionStyles.section} ${pizzaControlPanelStyles['pizza-control-panel']} ${sectionStyles['section-dough']}`}>
          <div className={`${sectionStyles.interior} ${pizzaControlPanelStyles.interior}`}>
            <h2>Pizza Control Panel</h2>
            <div className={pizzaControlPanelStyles['status-options']}>
            {controlOptions.map((option, index) => {
                return (
                    <button key={index} className={`${pizzaControlPanelStyles['option']} primary`} onClick={() => handleControlClick(index)} disabled={index === status}>
                        {option}
                    </button>
                )
            })}
            </div>
          </div>
        </section>
    )
}

export default PizzaControlPanel;

