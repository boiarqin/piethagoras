// prisma/seed.ts

import { PrismaClient, PizzaSize, Crust, Sauce, CheeseAmount, Topping
} from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Delete all `User` and `Message` records
  await prisma.message.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.pizza.deleteMany({});
  await prisma.order.deleteMany({});
  // (Re-)Create dummy `User` and `Message` records
  await prisma.user.create({
    data: {
      name: "Jack",
      messages: {
        create: [
          {
            body: "A Note for Jack",
          },
          {
            body: "Another note for Jack",
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: "Ryan",
      messages: {
        create: [
          {
            body: "A Note for Ryan",
          },
          {
            body: "Another note for Ryan",
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: "Adam",
      messages: {
        create: [
          {
            body: "A Note for Adam",
          },
          {
            body: "Another note for Adam",
          },
        ],
      },
    },
  });
  await prisma.pizza.create({
    data: {
      name: "Large Chicago Feast",
      size: PizzaSize.LARGE,
      crust: Crust.DEEP_DISH,
      sauce: Sauce.MARINARA,
      cheeseAmount: CheeseAmount.HEAVY,
      toppings: [Topping.PEPPERONI, Topping.SAUSAGE, Topping.ONION, Topping.MUSHROOM, Topping.GREEN_PEPPER]
    }
  });
  await prisma.pizza.create({
    data: {
      name: "Medium Buffalo Chicken",
      size: PizzaSize.MEDIUM,
      crust: Crust.ORIGINAL,
      sauce: Sauce.BUFFALO,
      cheeseAmount: CheeseAmount.REGULAR,
      toppings: [Topping.CHICKEN, Topping.ONION]
    }
  });
  await prisma.pizza.create({
    data: {
      name: "Small Vegan Delight",
      size: PizzaSize.SMALL,
      crust: Crust.GLUTEN_FREE,
      sauce: Sauce.NONE,
      cheeseAmount: CheeseAmount.NONE,
      toppings: [Topping.MUSHROOM, Topping.ONION, Topping.BLACK_OLIVE, Topping.TOMATO, Topping.GREEN_PEPPER]
    }
  });
  await prisma.pizza.create({
    data: {
      name: "Extra Large Hawaiian BBQ",
      size: PizzaSize.XLARGE,
      crust: Crust.THIN_CRISPY,
      sauce: Sauce.BBQ,
      cheeseAmount: CheeseAmount.LIGHT,
      toppings: [Topping.BACON, Topping.PINEAPPLE, Topping.JALAPENO]
    }
  });
  await prisma.order.create({
    data: {
      email: "pizzalover@testgmail.com",
      pizzas: {
        create: [
          {
            name: "Small Hawaiian BBQ",
            size: PizzaSize.SMALL,
            crust: Crust.THIN_CRISPY,
            sauce: Sauce.BBQ,
            cheeseAmount: CheeseAmount.LIGHT,
            toppings: [Topping.BACON, Topping.PINEAPPLE, Topping.JALAPENO]
          },
          {
            name: "Large Vegan Delight",
            size: PizzaSize.LARGE,
            crust: Crust.GLUTEN_FREE,
            sauce: Sauce.NONE,
            cheeseAmount: CheeseAmount.NONE,
            toppings: [Topping.MUSHROOM, Topping.ONION, Topping.BLACK_OLIVE, Topping.TOMATO, Topping.GREEN_PEPPER]
          }
        ],
      },
    },
  });
  await prisma.order.create({
    data: {
      email: "cheeselover@testgmail.com",
      pizzas: {
        create: [
          {
            name: "Small Chicago Feast",
            size: PizzaSize.SMALL,
            crust: Crust.DEEP_DISH,
            sauce: Sauce.MARINARA,
            cheeseAmount: CheeseAmount.HEAVY,
            toppings: [Topping.PEPPERONI, Topping.SAUSAGE, Topping.ONION, Topping.MUSHROOM, Topping.GREEN_PEPPER]
          }, {
            name: "Extra Large Buffalo Chicken",
            size: PizzaSize.XLARGE,
            crust: Crust.ORIGINAL,
            sauce: Sauce.BUFFALO,
            cheeseAmount: CheeseAmount.REGULAR,
            toppings: [Topping.CHICKEN, Topping.ONION]
          }
        ]
      }
    }
    });
}

main().then(() => {
  console.log("Data seeded...");
});