const { withFilter } = require('graphql-subscriptions');

function newLinkSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator("NEW_LINK");
}

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: (payload) => {
    return payload;
  },
};

function newVoteSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator("NEW_VOTE");
}

const newVote = {
  subscribe: newVoteSubscribe,
  resolve: (payload) => {
    return payload;
  },
};

function newOrderSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator("NEW_ORDER");
}

const newOrder = {
  subscribe: newOrderSubscribe,
  resolve: (payload) => {
    return payload;
  },
};

function updateOrderStatusSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator("UPDATE_ORDER_STATUS");
}

const orderStatus = {
  subscribe: withFilter(updateOrderStatusSubscribe, (payload, variables) => {
    // Only push an update if the comment is on
    // the correct repository for this operation
    return (
      payload.id == variables.id // typing problem again
    );
}),
  resolve: (payload) => {
    return payload;
  },
};

function updatePizzaStatusSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator("UPDATE_PIZZA_STATUS");
}

const pizzaStatus = {
  subscribe: updatePizzaStatusSubscribe,
  resolve: (payload) => {
    return payload;
  },
};

module.exports = {
  newLink,
  newVote,
  newOrder,
  orderStatus,
  pizzaStatus,
};
