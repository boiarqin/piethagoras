const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { APP_SECRET } = require("../utils");

async function post(parent, args, context, info) {
  const { userId } = context;

  let postedBy = undefined;
  if (userId) {
    postedBy = { connect: { id: userId } };
  }

  const newLink = await context.prisma.link.create({
    data: {
      url: args.url,
      description: args.description,
      postedBy,
    },
  });

  context.pubsub.publish("NEW_LINK", newLink);

  return newLink;
}

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.user.create({
    data: { ...args, password },
  });

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user.findUnique({
    where: { email: args.email },
  });
  if (!user) {
    throw new Error("No such user found");
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
}

async function vote(parent, args, context, info) {
  const { userId } = context;

  const vote = await context.prisma.vote.findUnique({
    where: {
      linkId_userId: {
        linkId: args.linkId,
        userId: userId,
      },
    },
  });

  if (Boolean(vote)) {
    throw new Error(`Already voted for link: ${args.linkId}`);
  }

  const newVote = context.prisma.vote.create({
    data: {
      user: { connect: { id: userId } },
      link: { connect: { id: args.linkId } },
    },
  });
  context.pubsub.publish("NEW_VOTE", newVote);

  return newVote;
}

async function placeOrder(parent, args, context, info) {
  name = args.input.name
  const email = (args.input.email).toLowerCase();
  const user = await context.prisma.user.findUnique({
    where: {
      email,
    }
  });
  let userId;

  if (!user) {
    // create the new user
    const newUser = await context.prisma.user.create({
      data: {
        name: args.input.name,
        email,
        password: 'password123' // very secure
      },
    });
    userId = newUser.id
  } else {
    userId = user.id
  }
  
  const newOrder = await context.prisma.order.create({
    data: {
      user: { connect: { id: userId } },
      pizzas: {
        create: args.input.pizzas,
      },
    },
  });

  context.pubsub.publish("NEW_ORDER", newOrder);

  return newOrder;
}

async function changeOrderStatus(parent, args, context, info) {
  const updateOrder = await context.prisma.order.update({
    where: {
      id: parseInt(args.id),
    },
    data: {
      status: args.newStatus,
    },
  });

  context.pubsub.publish("UPDATE_ORDER_STATUS", updateOrder);

  return updateOrder;
}

async function changePizzaStatus(parent, args, context, info) {
  const updatePizza = await context.prisma.pizza.update({
    where: {
      id: parseInt(args.id),
    },
    data: {
      status: args.newStatus,
    },
  });

  context.pubsub.publish("UPDATE_PIZZA_STATUS", updatePizza);

  return updatePizza;
}

module.exports = {
  post,
  signup,
  login,
  vote,
  placeOrder,
  changeOrderStatus,
  changePizzaStatus,
};
