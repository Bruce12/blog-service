// import { Application } from 'egg';
// import GraphQL from '../graphql';

// const TYPE_GRAPHQL_SYMBOL = Symbol('Application#TypeGraphql');

// export default {
//   get graphql(that: Application): GraphQL {
//     if (!that[TYPE_GRAPHQL_SYMBOL]) {
//       that[TYPE_GRAPHQL_SYMBOL] = new GraphQL(that);
//     }
//     return that[TYPE_GRAPHQL_SYMBOL];
//   }
// };