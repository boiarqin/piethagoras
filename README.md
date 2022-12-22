# Piethagoras Pizza Shop
A playground application to demonstrate integration of various tools. Project currently demonstrates:
- /server GraphQL implementation of pizza ordering and updates. (GraphQL/Prisma/Apollo)
- /client-next FE pizza shop website (NextJS/Redux Toolkit (RTK))

NextJS features used:
- Link
- Router
- Pages
- Server-side rendering
- API request/response
- CSS Modules

RTK features used:
- RTK Query
- RTK Query response transform and error response transform

TBD:
- Formik
- RTK Normalization
- GraphQL Subscriptions
- Typescript

Things being purposely ignored in this project:
- Linting/formatting/prettier
- Import Aliases
- CSS Preprocessing and variables

# To run:
1. Go to the `server` folder, install dependencies and start the server. 

```sh
cd ./server
npm install
npm run dev
```
> **Note**: If you want to interact with the GraphQL API of the server inside a [GraphQL Playground](https://github.com/prisma/graphql-playground), you can navigate to [http://localhost:4000](http://localhost:4000).


2. Go to the `client-next` folder, install dependencies and start the server. 

```sh
cd ./client-next
npm install
npm run dev
```

You can now open your browser and use the app on [http://localhost:3000](http://localhost:3000).
