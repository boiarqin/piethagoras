/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Feed = {
  __typename?: 'Feed';
  count: Scalars['Int'];
  id: Scalars['ID'];
  links: Array<Link>;
};

export type Link = {
  __typename?: 'Link';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  postedBy?: Maybe<User>;
  url: Scalars['String'];
  votes: Array<Vote>;
};

export type LinkOrderByInput = {
  createdAt?: InputMaybe<Sort>;
  description?: InputMaybe<Sort>;
  url?: InputMaybe<Sort>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changeOrderStatus?: Maybe<Order>;
  changePizzaStatus?: Maybe<Pizza>;
  login?: Maybe<AuthPayload>;
  placeOrder?: Maybe<Order>;
  post: Link;
  signup?: Maybe<AuthPayload>;
  vote?: Maybe<Vote>;
};


export type MutationChangeOrderStatusArgs = {
  id: Scalars['ID'];
  newStatus: Scalars['Int'];
};


export type MutationChangePizzaStatusArgs = {
  id: Scalars['ID'];
  newStatus: Scalars['Int'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationPlaceOrderArgs = {
  input?: InputMaybe<OrderInput>;
};


export type MutationPostArgs = {
  description: Scalars['String'];
  url: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationVoteArgs = {
  linkId: Scalars['ID'];
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  mode: Scalars['String'];
  pizzas: Array<Pizza>;
  pizzasCount?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

export type OrderInput = {
  email: Scalars['String'];
  mode: Scalars['String'];
  name: Scalars['String'];
  pizzas: Array<PizzaInput>;
};

export type Pizza = {
  __typename?: 'Pizza';
  cheeseAmount: Scalars['String'];
  crust: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  orderId: Scalars['Int'];
  sauce: Scalars['String'];
  size: Scalars['String'];
  status?: Maybe<Scalars['Int']>;
  toppings: Scalars['String'];
};

export type PizzaInput = {
  cheeseAmount: Scalars['String'];
  crust: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  sauce: Scalars['String'];
  size: Scalars['String'];
  toppings?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  feed: Feed;
  info: Scalars['String'];
  order: Order;
  orders: Array<Order>;
  user: User;
  users: Array<User>;
};


export type QueryFeedArgs = {
  filter?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<LinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum Sort {
  Asc = 'asc',
  Desc = 'desc'
}

export type Subscription = {
  __typename?: 'Subscription';
  newLink?: Maybe<Link>;
  newOrder?: Maybe<Order>;
  newVote?: Maybe<Vote>;
  orderStatus?: Maybe<Order>;
  pizzaStatus?: Maybe<Pizza>;
};


export type SubscriptionOrderStatusArgs = {
  id: Scalars['ID'];
};


export type SubscriptionPizzaStatusArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  links: Array<Link>;
  name: Scalars['String'];
  orderCount?: Maybe<Scalars['Int']>;
  orders: Array<Order>;
};

export type Vote = {
  __typename?: 'Vote';
  id: Scalars['ID'];
  link: Link;
  user: User;
};

export type UpdateOrderStatsMutationVariables = Exact<{
  id: Scalars['ID'];
  newStatus: Scalars['Int'];
}>;


export type UpdateOrderStatsMutation = { __typename?: 'Mutation', changeOrderStatus?: { __typename?: 'Order', id: string } | null };

export type PlaceOrderMutationVariables = Exact<{
  input?: InputMaybe<OrderInput>;
}>;


export type PlaceOrderMutation = { __typename?: 'Mutation', placeOrder?: { __typename?: 'Order', id: string } | null };

export type OrderQueryQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type OrderQueryQuery = { __typename?: 'Query', order: { __typename?: 'Order', id: string, createdAt: any, status?: number | null, mode: string, pizzas: Array<{ __typename?: 'Pizza', id: string, name: string, size: string, sauce: string, cheeseAmount: string, crust: string, toppings: string }> } };

export type OrderStatusSubscriptionSubscriptionVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrderStatusSubscriptionSubscription = { __typename?: 'Subscription', orderStatus?: { __typename?: 'Order', id: string, status?: number | null } | null };

export type GetAllOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllOrdersQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', id: string, createdAt: any, pizzasCount?: number | null, status?: number | null, mode: string }> };


export const UpdateOrderStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOrderStats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newStatus"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeOrderStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"newStatus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newStatus"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateOrderStatsMutation, UpdateOrderStatsMutationVariables>;
export const PlaceOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PlaceOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placeOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PlaceOrderMutation, PlaceOrderMutationVariables>;
export const OrderQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OrderQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}},{"kind":"Field","name":{"kind":"Name","value":"pizzas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"sauce"}},{"kind":"Field","name":{"kind":"Name","value":"cheeseAmount"}},{"kind":"Field","name":{"kind":"Name","value":"crust"}},{"kind":"Field","name":{"kind":"Name","value":"toppings"}}]}}]}}]}}]} as unknown as DocumentNode<OrderQueryQuery, OrderQueryQueryVariables>;
export const OrderStatusSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OrderStatusSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<OrderStatusSubscriptionSubscription, OrderStatusSubscriptionSubscriptionVariables>;
export const GetAllOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllOrders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"pizzasCount"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}}]}}]} as unknown as DocumentNode<GetAllOrdersQuery, GetAllOrdersQueryVariables>;