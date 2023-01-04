const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

async function main() {
  // Delete all `User` and `Message` records
  //   await prisma.message.deleteMany({});

  await prisma.pizza.deleteMany({});
  await prisma.order.deleteMany({});
  await prisma.user.deleteMany({});
  // (Re-)Create dummy `User` and `Message` records
  await prisma.user.create({
    data: {
      name: "Jack",
      email: "jack.donaghy@fakemail.com",
      password: "jack123"
    },
  });
  await prisma.user.create({
    data: {
      name: "Liz",
      email: "liz.lemon@fakemail.com",
      password: "liz123",
      orders: {
        create: [
          {
            mode: 'DELIVERY',
            pizzas: {
              create: [
                {
                  name: "Small Hawaiian BBQ",
                  size: "SMALL",
                  crust: "THIN_CRISPY",
                  sauce: "BBQ",
                  cheeseAmount: "LIGHT",
                  toppings: "BACON,PINEAPPLE,JALAPENO"
                },
                {
                  name: "Large Vegan Delight",
                  size: "LARGE",
                  crust: "GLUTEN_FREE",
                  sauce: "NONE",
                  cheeseAmount: "NONE",
                  toppings: "MUSHROOM,ONION,BLACK_OLIVE,TOMATO,GREEN_PEPPER"
                }
              ],
            },
          },
          {
            mode: 'CARRYOUT',
            pizzas: {
              create: [
                {
                  name: "Large Chicago Feast",
                  size: "LARGE",
                  crust: "DEEP_DISH",
                  sauce: "MARINARA",
                  cheeseAmount: "HEAVY",
                  toppings: "PEPPERONI,SAUSAGE,ONION,MUSHROOM,GREEN_PEPPER"
                },
                {
                  name: "Medium Buffalo Chicken",
                  size: "MEDIUM",
                  crust: "ORIGINAL",
                  sauce: "BUFFALO",
                  cheeseAmount: "REGULAR",
                  toppings: "CHICKEN,ONION"
                }
              ],
            },
          },
        ]
      }
    },
  });
  await prisma.user.create({
    data: {
      name: "Kenneth",
      email: "kenneth.parcell@fakemail.com",
      password: "chuckle123",
      orders: {
        create: [
          {
            mode: "DELIVERY",
            pizzas: {
              create: [
                {
                  name: "Extra Large Hawaiian BBQ",
                  size: "XLARGE",
                  crust: "THIN_CRISPY",
                  sauce: "BBQ",
                  cheeseAmount: "LIGHT",
                  toppings: "BACON,PINEAPPLE,JALAPENO"
                }
              ]
            }
          },
          {
            mode: "DELIVERY",
            pizzas: {
              create: [
                {
                  name: 'Memphis Smokeshow',
                  size: "XLARGE",
                  crust: "ORIGINAL",
                  sauce: "BBQ",
                  cheeseAmount: "LIGHT",
                  toppings: "CHICKEN,BACON,PINEAPPLE,JALAPENO,ONION"
                }
              ]
            }
          }
        ]
      }
    }
  });
  await prisma.user.create({
    data: {
      name: "Tracy",
      email: "tracy.jordan@fakemail.com",
      password: "angie123",
      orders: {
        create: [
          {
            mode: "CARRYOUT",
            pizzas: {
              create: [
                {
                  name: 'Sicilian Monster',
                  size: "XLARGE",
                  cheeseAmount: "HEAVY",
                  crust: "DEEP_DISH",
                  sauce: "MARINARA",
                  toppings: "PEPPERONI,SAUSAGE,HAM,CHICKEN,BACON"
                },
                {
                  name: 'The Bushwhacker',
                  size: "XLARGE",
                  cheeseAmount: "HEAVY",
                  crust: "DEEP_DISH",
                  sauce: "MARINARA",
                  toppings: "TOMATO,MUSHROOM,GREEN_PEPPER,BLACK_OLIVE,ONION"
                },
                {
                  name: 'Bianca',
                  size: "XLARGE",
                  cheeseAmount: "HEAVY",
                  crust: "ORIGINAL",
                  sauce: "ALFREDO",
                  toppings: "SAUSAGE,GREEN_PEPPER"
                },
              ]
            }
          }
        ]
      }
    }
  });
}

main().then(() => {
  console.log("Data seeded...");
});