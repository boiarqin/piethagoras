export default function handler(req, res) {
    res.status(200).json({
        data: [
            {
                title: 'Happy National Pizza Day! Get 20% off your order',
                imageSrc: '/images/home-promo-1.jpg',
                imageAltText: 'Pepperoni pizza',
                snippet: 'Tempor in minim quis. Garlic sauce green bell peppers string cheese ea, meatball pariatur proident ad chicken wing extra sauce ut platter occaecat excepteur labore.',
                slug: 'national-pizza-day',
            },
            {
                title: 'Piethagoras celebrates our 5-year anniversary',
                imageSrc: '/images/home-promo-2.jpg',
                imageAltText: 'Margherita pizza',
                snippet: 'Magna dolore consequat deserunt. Pan pizza roll in, melted cheese veniam ullamco philly chicken adipisicing enim elit meatball parmesan white pizza aliqua.',
                slug: '5-year-anniversary',
            },
            {
                title: 'Happy PI Day! Buy 2 medium pizzas get 1 free',
                imageSrc: '/images/home-promo-3.jpg',
                imageAltText: '3 takeout boxes of pizza',
                snippet: 'Cupidatat hawaiian in ad minim. Chicken wing aliqua anim melted cheese, pan philly chicken culpa thin crust et string cheese bacon exercitation deserunt.',
                slug: 'pi-day',
            }
        ]
    });
}
