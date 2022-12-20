async function feed(parent, args, context, info) {
  const where = args.filter
    ? {
      OR: [
        {description: {contains: args.filter}},
        {url: {contains: args.filter}}
      ]
    }
    : {};

  const links = await context.prisma.link.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy
  });

  const count = await context.prisma.link.count({where});

  return {
    id: `main-feed:${JSON.stringify(args)}`,
    links,
    count
  };
}

async function user(parent, args, context, info) {
  const user = await context.prisma.user.findUnique({ where: { id: args.id } });;
  return user
}

async function users(parent, args, context, info) {
  const users = await context.prisma.user.findMany({
  });
  return users  
}

async function order(parent, args, context, info) {
  const order = await context.prisma.order.findUnique({ where: { id: parseInt(args.id) } });
  return order
}

async function orders(parent, args, context, info) {
  const orders = await context.prisma.order.findMany({
  });
  return orders  
}

module.exports = {
  feed,
  user,
  users, 
  orders,
  order,
};
