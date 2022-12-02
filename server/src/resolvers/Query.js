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

// async function users(parent, args, context, info) {
//   const users = await context.prisma.user.findMany({
//     // where,
//     // skip: args.skip,
//     // take: args.take,
//     // orderBy: args.orderBy
//   });

//   console.log(users)

//   return {
//     users
//   }
// }

const users2 = {
  id: '9b912a7f-8c7a-419e-91a7-d2c9d3d9f58e',
  name: 'Jack',
  email: 'jack@fakemail.com',
  password: 'jack123'
};

const users = [
  {
    id: '9b912a7f-8c7a-419e-91a7-d2c9d3d9f58e',
    name: 'Jack',
    email: 'jack@fakemail.com',
    password: 'jack123'
  },
  {
    id: '089bae1e-884b-46e4-8d2d-92a2ee6efb6c',
    name: 'Liz',
    email: 'Liz@fakemail.com',
    password: 'liz123'
  }
]

module.exports = {
  feed,
  user: () => users2
};
