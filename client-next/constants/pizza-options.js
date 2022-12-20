export const DELIVERY_MODE = 'DELIVERY';
export const CARRYOUT_MODE = 'CARRYOUT';

export const SIZES = {
    'SMALL':
    {
        displayName: 'Small',
        description: '10"',
        key: 'SMALL',
    },
    'MEDIUM': {
        displayName: 'Medium',
        description: '12"',
        key: 'MEDIUM'
    },
    'LARGE': 
    {
        displayName: 'Large',
        description: '14"',
        key: 'LARGE'
    },
    'XLARGE': {
        displayName: 'Extra Large',
        description: '16"',
        key: 'XLARGE'
    }
}

export const CRUST = {
    ORIGINAL: {
        displayName: 'Original',
        description: 'Our house favorite, brushed with garlic butter -- you can\'t go wrong!',
        key: 'ORIGINAL'
    },
    DEEP_DISH: {
        displayName: 'Deep Dish',
        description: 'Our famous, scrumptious, burnt cheese crust! You\'ll need a nap after',
        key: 'DEEP_DISH'
    },
    THICC: {
        displayName: 'THICC',
        description: 'Hella Thicc with 2 C\'s: Crispy Cheese',
        key: 'THICC'
    },
    THIN_CRISPY: {
        displayName: 'Thin & Crispy',
        description: 'Crunchy edges, tavern style -- perfect for snacking',
        key: 'THIN_CRISPY'
    },
    GLUTEN_FREE: {
        displayName: 'Gluten Free',
        description: 'No stomachache for you, my friend',
        key: 'GLUTEN_FREE'
    }
}

export const SAUCE = {
    MARINARA: {
        displayName: 'Marinara',
        description: 'Hearty red sauce, made with San Marzano tomatoes and fresh Italian herbs',
        key: 'MARINARA'
    },
    ALFREDO: {
        displayName: 'Alfredo',
        description: 'Creamy white sauce, made with plenty of parmesan cheese and lots of love',
        key: 'ALFREDO'
    },
    BBQ: {
        displayName: 'BBQ',
        description: 'Tangy mesquite barbecue sauce, perfect with grilled meats and veggies',
        key: 'BBQ'
    },
    BUFFALO: {
        displayName: 'Buffalo',
        description: 'Spicy, zingy, neon orange buffalo sauce for the lover of hot wings',
        key: 'BUFFALO'
    },
    NONE: {
        displayName: 'No Sauce',
        description: 'Hey, we get it -- our crust is delicious on its own!',
        key: 'NONE'
    }
}

export const CHEESE_AMOUNT = {
    REGULAR: {
        displayName: 'Regular',
        description: 'Not too much, not too little -- juuuuust right',
        key: 'REGULAR'
    },
    LIGHT:{
        displayName: 'Light',
        description: 'Just a taste',
        key: 'LIGHT'
    },
    HEAVY:{
        displayName: 'Heavy',
        description: 'Let it snow, let it snow, let it snow!',
        key: 'HEAVY'
    },
    NONE:{
        displayName: 'None',
        description: 'Sometimes simple is best',
        key: 'NONE'
    }
}

export const TOPPINGS = {
    PEPPERONI: {
        displayName: 'Pepperoni',
        description: 'Thin slices of spicy red pepperoni',
        key: 'PEPPERONI'
    },
    SAUSAGE: {
        displayName: 'Italian Sausage',
        description: 'Hearty chunks of fennel-studded sausage',
        key: 'SAUSAGE'
    },
    BACON:{
        displayName: 'Bacon',
        description: 'Thick cubes of applewood-smoked bacon',
        key: 'BACON'
    },
    HAM:{
        displayName: 'Ham',
        description: 'Juicy cubes of honey-glazed, smoked ham',
        key: 'HAM'
    },
    CHICKEN:{
        displayName: 'Grilled Chicken',
        description: 'Tender chunks of wood-fire grilled chicken',
        key: 'CHICKEN'
    },
    MUSHROOM:{
        displayName: 'Mushroom',
        description: 'Sauteed slices of brown cremini mushrooms',
        key: 'MUSHROOM'
    },
    ONION:{
        displayName: 'Red Onion',
        description: 'Sweet and pungent slices of red onion',
        key: 'ONION'
    },
    PINEAPPLE:{
        displayName: 'Pineapple',
        description: 'Sweet, fresh tropical pineapple, never from a can -- cowabunga!',
        key: 'PINEAPPLE'
    },
    BLACK_OLIVE:{
        displayName: 'Black Olives',
        description: 'Salty sliced black olives, imported from Italy',
        key: 'BLACK_OLIVE'
    },
    GREEN_PEPPER:{
        displayName: 'Bell Peppers',
        description: 'Diced blend of green and red bell peppers',
        key: 'GREEN_PEPPER'
    },
    JALAPENO:{
        displayName: 'Jalapeno Peppers',
        description: 'Lightly pickled with the right balance of heat',
        key: 'JALAPENO'
    },
    TOMATO:{
        displayName: 'Fresh Tomato',
        description: 'Large slices of homegrown plum tomatoes',
        key: 'TOMATO'
    },
}

export const FAVORITES = [
    {
        displayName: 'Piethagoras Feast',
        description: 'A classic you can\'t go wrong with! A balance of meats and veggies',
        crust: CRUST.ORIGINAL,
        sauce: SAUCE.MARINARA,
        toppings: [TOPPINGS.PEPPERONI, TOPPINGS.SAUSAGE, TOPPINGS.HAM, TOPPINGS.GREEN_PEPPER, TOPPINGS.BLACK_OLIVE, TOPPINGS.ONION]
    },
    {
        displayName: 'Tuscan Garden',
        description: 'Fresh slices of tomato on creamy alfredo',
        crust: CRUST.THIN_CRISPY,
        sauce: SAUCE.ALFREDO,
        toppings: [TOPPINGS.TOMATO, TOPPINGS.BLACK_OLIVE, TOPPINGS.GREEN_PEPPER, TOPPINGS.ONION]
    },
    {
        displayName: 'Pepperoni Lovers',
        description: 'Comes with 2x the amount of our spicy, hand-cut pepperoni',
        crust: CRUST.ORIGINAL,
        sauce: SAUCE.MARINARA,
        toppings: [TOPPINGS.PEPPERONI]
    },
    {
        displayName: 'Mushroom Lovers',
        description: 'Comes with 2x the amount of our savory, hand-sliced shrooms',
        crust: CRUST.ORIGINAL,
        sauce: SAUCE.ALFREDO,
        toppings: [TOPPINGS.MUSHROOM]
    },
    {
        displayName: 'Sicilian Monster',
        description: 'All the meats! You\'re gonna need a nap after this one',
        crust: CRUST.DEEP_DISH,
        sauce: SAUCE.MARINARA,
        toppings: [TOPPINGS.PEPPERONI, TOPPINGS.SAUSAGE, TOPPINGS.HAM, TOPPINGS.CHICKEN, TOPPINGS.BACON]
    },
    {
        displayName: 'The Bushwhacker',
        description: 'All the veggies! You\'re gonna need a nap after this one',
        crust: CRUST.DEEP_DISH,
        sauce: SAUCE.MARINARA,
        toppings: [TOPPINGS.TOMATO, TOPPINGS.MUSHROOM, TOPPINGS.GREEN_PEPPER, TOPPINGS.BLACK_OLIVE, TOPPINGS.ONION]
    },
    {
        displayName: 'Bianca',
        description: 'Our delicious fennel-studded sausage and green peppers on creamy alfredo',
        crust: CRUST.ORIGINAL,
        sauce: SAUCE.ALFREDO,
        toppings: [TOPPINGS.SAUSAGE, TOPPINGS.GREEN_PEPPER]
    },
    {
        displayName: 'Hang Ten Piggy',
        description: 'Made with the finest surfing porkers',
        crust: CRUST.THIN_CRISPY,
        sauce: SAUCE.BBQ,
        toppings: [TOPPINGS.HAM, TOPPINGS.PINEAPPLE]
    },
    {
        displayName: 'Memphis Smokeshow',
        description: 'Pairs well with country music and cold beer',
        crust: CRUST.ORIGINAL,
        sauce: SAUCE.BBQ,
        toppings: [TOPPINGS.CHICKEN, TOPPINGS.BACON, TOPPINGS.JALAPENO, TOPPINGS.ONION]
    },
    {
        displayName: 'The Afterburner',
        description: 'Not for the faint of heart!',
        crust: CRUST.THIN_CRISPY,
        sauce: SAUCE.BUFFALO,
        toppings: [TOPPINGS.CHICKEN, TOPPINGS.JALAPENO, TOPPINGS.ONION]
    }
]