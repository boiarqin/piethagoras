function links(parent, args, context) {
  return context.prisma.user
    .findUnique({where: {id: parent.id}})
    .links();
}

const id = (parent) => parent.id
const name = (parent) => {
  return parent.name
}
const email = (parent) => parent.email

const orderCount = async (parent, args, context) => {
  const count = await context.prisma.order.count({where: {userId: parent.id}});

  return count
}

module.exports = {
  id,
  name,
  email,
  links,
  orderCount,
};
