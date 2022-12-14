import BlogPost from "../layouts/blog-post";
import { SIZES, SAUCE, CRUST, CHEESE_AMOUNT, TOPPINGS, FAVORITES } from "../constants/pizza-options";
import styles from "../styles/pages/Menu.module.css";

const BYOCategory = ({ categoryName, categoryOptions }) => {
    return (
        <div className={`${styles['byo-category']} ${categoryName === 'Size' ? styles['byo-category-size'] : ''}`}>
            <h3>{categoryName}</h3>
            <ul>
                {
                    Object.keys(categoryOptions).map((key) => {
                        const item = categoryOptions[key];

                        return (<li key={item.key}>
                            <h4>{item.displayName}</h4>
                            <p><em>{item.description}</em></p>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const Post = () => {
    return (
        <BlogPost>
            <h1>Our Menu</h1>
            <p><em>Choose from one of our favorites or build your own!</em></p>

            <h2>Favorite Pizzas</h2>
            <ul className={styles.favorites}>
                {
                    FAVORITES.map((pizza) => {
                        const toppings = pizza.toppings.map((topping) => topping.displayName).join(', ')

                        return (
                            <li key={pizza.displayName} className={styles.card}>
                                <h3>{pizza.displayName}</h3>
                                <p><em>{pizza.description}</em></p>
                                <p><strong>Crust:</strong> {pizza.crust.displayName}</p>
                                <p><strong>Sauce:</strong> {pizza.sauce.displayName}</p>
                                <p><strong>Toppings:</strong> {toppings}</p>
                            </li>
                        )
                    })
                }
            </ul>

            <h2>Build Your Own Pizza</h2>
            <p><em>Have it your way!</em></p>
            <div className={styles.byo}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <BYOCategory categoryName="Size" categoryOptions={SIZES} />
                        <BYOCategory categoryName="Crust Options" categoryOptions={CRUST} />
                        <BYOCategory categoryName="Cheese Amount" categoryOptions={CHEESE_AMOUNT} />
                        <BYOCategory categoryName="Sauces" categoryOptions={SAUCE} />
                    </div>
                    <div className={styles.right}>

                        <BYOCategory categoryName="Toppings" categoryOptions={TOPPINGS} />
                    </div>
                </div>
            </div>



        </BlogPost>
    )
}

export default Post;