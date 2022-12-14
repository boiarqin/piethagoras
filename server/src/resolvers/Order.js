const id = (parent) => parent.id;
const createdAt = (parent) => {
  return parent.createdAt;
};

const mode = (parent) => parent.mode;

const pizzas = (parent, args, context) => {
  return context.prisma.pizza.findMany({ where: { orderId: parent.id } });
};

const pizzasCount = async (parent, args, context) => {
  const count = await context.prisma.pizza.count({
    where: { orderId: parent.id },
  });

  return count;
};

const user = async (parent, args, context) => {
  const orderUser = await context.prisma.user.findUnique({
    where: { id: parent.userId },
  });

  return orderUser;
};

module.exports = {
  id,
  createdAt,
  mode,
  pizzas,
  pizzasCount,
  user,
};
