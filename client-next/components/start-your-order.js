import Link from 'next/link';
import sectionStyles from '../styles/components/Sections.module.css'
import startYourOrderStyles from '../styles/components/StartYourOrder.module.css'

const StartYourOrder = () => {
    return (
        <section className={`${sectionStyles.section} ${startYourOrderStyles['start-your-order']} ${sectionStyles['section-crust']}`}>
          <div className={startYourOrderStyles.interior}>
            <h2>🍕 Start Your Order</h2>
            <div className={startYourOrderStyles.options}>
            <Link passHref href="/new-order?mode=delivery">
              <button>DELIVERY</button>
            </Link>
            <span>or</span>
            <Link passHref href="/new-order?mode=carry-out">
            <button>CARRY OUT</button>
            </Link>
            </div>
          </div>
        </section>
    )
}

export default StartYourOrder;