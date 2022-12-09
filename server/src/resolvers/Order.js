const id = (parent) => parent.id;
const createdAt = (parent) => {
  return parent.createdAt;
};

const email = (parent) => parent.email;

const pizzas = (parent, args, context) => {
  return context.prisma.pizza.findMany({ where: { orderId: parent.id } });
};

const pizzasCount = async (parent, args, context) => {
  // const count = await context.prisma.pizza.count({where: {orderId: parent.id}});
  const count = await context.prisma.pizza.count();

  console.log(parent);

  // const count = parent.pizzas().count()

  return count;
};

module.exports = {
  id,
  createdAt,
  email,
  pizzas,
  pizzasCount,
};
