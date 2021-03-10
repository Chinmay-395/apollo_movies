# Apollo Movies

Movie app with built with React, Apollo & GraphQL

There are 2 things:

1. Over-fetching: getting more info from the server than usage
2. Under-fetching: if you need to call different API endpoints to fetch different apis.

Its more efficient to have the control of the kind of data we are fetching on the frontend

# The backend

## Graphql components

• A **_Query_** is only when you get data
• A **_Mutation_** is when change data
• A **_Resolver_** will generate answer to the query

• Setting up our grapqhl
◘ create a schema
◘ write a resolver to reply the query

• What if, you created your own object, then
◘ define the type of object in schema
◘ write the resolver for it

api-url: https://movieql.now.sh/
