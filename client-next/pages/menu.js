import BlogPost from "../layouts/blog-post";
import styles from "../styles/pages/Menu.module.css";
import { SIZES, SAUCE, CRUST, CHEESE_AMOUNT, TOPPINGS, FAVORITES } from "../constants/pizza-options";

const BYOCategory = ({categoryName, categoryOptions}) => {
    return (
        <div className="byo-category">
        <h3>{categoryName}</h3>
            <ul>
                {
                    Object.keys(categoryOptions).map((key) => {
                        const item = categoryOptions[key];

                        return (<li key={item.key}>
                            <h4>{item.displayName}</h4>
                            <p>{item.description}</p>
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
            <p>Choose from one of our favorites or build your own!</p>

            <h2>Favorite Pizzas</h2>
            <ul className="favorites">
                {
                    FAVORITES.map((pizza) => {
                        const toppings = pizza.toppings.map((topping) => topping.displayName).join(', ')

                        return (
                            <li key={pizza.displayName}>
                                <h3>{pizza.displayName}</h3>
                                <p>{pizza.description}</p>
                                <p>Crust: {pizza.crust.displayName}</p>
                                <p>Sauce: {pizza.sauce.displayName}</p>
                                <p>Toppings: {toppings}</p>
                            </li>
                        )
                    })
                }
            </ul>

            <h2>Build Your Own Pizza</h2>
            <BYOCategory categoryName="Size" categoryOptions={SIZES} />
            <BYOCategory categoryName="Crust Options" categoryOptions={CRUST} />
            <BYOCategory categoryName="Sauces" categoryOptions={SAUCE} />
            <BYOCategory categoryName="Cheese Amount" categoryOptions={CHEESE_AMOUNT} />
            <BYOCategory categoryName="Toppings" categoryOptions={TOPPINGS} />

        </BlogPost>
    )
}

export default Post;