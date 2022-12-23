import {DELIVERY_MODE, DELIVERY_STATUS, CARRYOUT_STATUS } from "../constants/pizza-options";
import sectionStyles from '../styles/components/Sections.module.css'
import orderStatusTrackerStyles from '../styles/components/OrderStatusTracker.module.css'

const getStatusInfo = (mode, status) => {
    const allStatusInfo = (mode === DELIVERY_MODE) ? DELIVERY_STATUS : CARRYOUT_STATUS;

    const statusInfo = allStatusInfo.reduce((prev, curr, currIndex) => {
        if (currIndex <= status) {
            return {
                avgTotalTime: prev.avgTotalTime + allStatusInfo[currIndex].averageTime,
                avgTimeElapsed: prev.avgTimeElapsed + allStatusInfo[currIndex].averageTime
            }
        } else {
            return {
                avgTotalTime: prev.avgTotalTime + allStatusInfo[currIndex].averageTime,
                avgTimeElapsed: prev.avgTimeElapsed
            };
        }

    }, {avgTotalTime:0, avgTimeElapsed:0})

    return {
        ...statusInfo,
        ...allStatusInfo[status]
    }

}

const OrderStatusTracker = ({mode, status}) => {
    const allStatusInfo = (mode === DELIVERY_MODE) ? DELIVERY_STATUS : CARRYOUT_STATUS;
    const statusInfo = getStatusInfo(mode, status);
    const {
        avgTotalTime,
        avgTimeElapsed,
        displayText,
        description
    } = statusInfo

    console.log(statusInfo)

    return (
        <section className={`${sectionStyles.section} ${orderStatusTrackerStyles['order-status-tracker']} ${sectionStyles['section-dough']}`}>
          <div className={`${sectionStyles.interior} ${orderStatusTrackerStyles.interior}`}>
            <h2>Order Status Tracker</h2>
            <div className={orderStatusTrackerStyles['status-options']}>
                {allStatusInfo.map((status) => {
                    return (
<div key={status.displayText} className={orderStatusTrackerStyles.option} style={{width: `${status.averageTime/avgTotalTime * 100}%`}}>
                    <span>{status.displayText}</span>
                </div>
                    )
                })}
            </div>

            <progress className={orderStatusTrackerStyles['progress-bar']} id="order-status" max={avgTotalTime} value={avgTimeElapsed}> {displayText} </progress>
            <label className={orderStatusTrackerStyles.label} htmlFor="order-status">
                <strong>{displayText}:</strong>{description}
            </label>
          </div>
        </section>
    )
}

export default OrderStatusTracker;

