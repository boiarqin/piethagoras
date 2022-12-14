/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n    mutation UpdateOrderStats(\n        $id: ID!,\n        $newStatus: Int!\n    ) {\n        changeOrderStatus(id: $id, newStatus: $newStatus) {\n            id\n        }\n    }\n": types.UpdateOrderStatsDocument,
    "\n  mutation PlaceOrder($input: OrderInput) {\n    placeOrder(input: $input) {\n      id\n    }\n  }\n": types.PlaceOrderDocument,
    "\n    query OrderQuery($id: ID) {\n        order(id: $id) {\n            id,\n            createdAt,\n            user {\n              email,\n              name,\n            },\n            status,\n            mode,\n            pizzas {\n                id,\n                name,\n                size,\n                sauce,\n                cheeseAmount,\n                crust,\n                toppings\n            }\n        }\n    }\n": types.OrderQueryDocument,
    "\n    subscription OrderStatusSubscription($id: ID!) {\n        orderStatus(id: $id) {\n            id,\n            status\n        }\n    }\n": types.OrderStatusSubscriptionDocument,
    "\n    query GetAllOrders {\n        orders {\n            id\n            createdAt\n            pizzasCount\n            status,\n            mode\n        }\n    }\n": types.GetAllOrdersDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateOrderStats(\n        $id: ID!,\n        $newStatus: Int!\n    ) {\n        changeOrderStatus(id: $id, newStatus: $newStatus) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateOrderStats(\n        $id: ID!,\n        $newStatus: Int!\n    ) {\n        changeOrderStatus(id: $id, newStatus: $newStatus) {\n            id\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation PlaceOrder($input: OrderInput) {\n    placeOrder(input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation PlaceOrder($input: OrderInput) {\n    placeOrder(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query OrderQuery($id: ID) {\n        order(id: $id) {\n            id,\n            createdAt,\n            user {\n              email,\n              name,\n            },\n            status,\n            mode,\n            pizzas {\n                id,\n                name,\n                size,\n                sauce,\n                cheeseAmount,\n                crust,\n                toppings\n            }\n        }\n    }\n"): (typeof documents)["\n    query OrderQuery($id: ID) {\n        order(id: $id) {\n            id,\n            createdAt,\n            user {\n              email,\n              name,\n            },\n            status,\n            mode,\n            pizzas {\n                id,\n                name,\n                size,\n                sauce,\n                cheeseAmount,\n                crust,\n                toppings\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    subscription OrderStatusSubscription($id: ID!) {\n        orderStatus(id: $id) {\n            id,\n            status\n        }\n    }\n"): (typeof documents)["\n    subscription OrderStatusSubscription($id: ID!) {\n        orderStatus(id: $id) {\n            id,\n            status\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetAllOrders {\n        orders {\n            id\n            createdAt\n            pizzasCount\n            status,\n            mode\n        }\n    }\n"): (typeof documents)["\n    query GetAllOrders {\n        orders {\n            id\n            createdAt\n            pizzasCount\n            status,\n            mode\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;