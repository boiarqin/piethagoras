import sectionStyles from '../styles/Sections.module.css'
import startYourOrderStyles from '../styles/StartYourOrder.module.css'

const StartYourOrder = () => {
    return (
        <section className={`${sectionStyles.section} ${startYourOrderStyles['start-your-order']} ${sectionStyles['section-crust']}`}>
          <div className={startYourOrderStyles.interior}>
            <h2>🍕 Start Your Order</h2>
            <div className={startYourOrderStyles.options}>
            <button>DELIVERY</button>
            <span>or</span>
            <button>CARRY OUT</button>
            </div>
          </div>
        </section>
    )
}

export default StartYourOrder;