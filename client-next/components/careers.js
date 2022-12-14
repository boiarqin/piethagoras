import Image from 'next/image';
import styles from '../styles/components/Sections.module.css';

const Careers = () => {
    return (
        <section className={`${styles.section} ${styles.fiftyFifty} ${styles['section-mozz']}`}>
        <div className={styles.interior}>

          <div className={styles.wrapper}>
            <div className={styles.left}>
              <Image
                src="/images/home-careers.jpg" // Route of the image file
                height={200} // Desired size with correct aspect ratio
                width={300} // Desired size with correct aspect ratio
                alt="Metal containers of ingredients"
              />
            </div>
            <div className={styles.right}>
              <h2>🧑‍🍳 We're Hiring!</h2>
              <p>Reprehenderit elit chicken wing, stuffed tempor sauteed onions Chicago style parmesan ut. Pork sausage veniam hawaiian sed burnt mouth proident velit. Marinara irure in bacon & tomato deep crust ullamco mayo hand tossed anim veniam. Extra sauce sausage non ranch magna garlic elit pie bacon & tomato, extra cheese consequat NY style. Broccoli chicken and bacon sausage in ad white pizza peppers reprehenderit beef lasagna adipisicing elit personal. Culpa beef pie et.</p>
              <button>Join our team</button>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Careers;