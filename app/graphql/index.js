"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const apollo_server_koa_1 = require("apollo-server-koa");
const type_graphql_1 = require("type-graphql");
class GraphQL {
    constructor(app) {
        this.app = app;
        this.config = app.config.graphql;
    }
    getResolvers() {
        const isLocal = this.app.config.env === 'local';
        return [path.resolve(this.app.baseDir, `app/graphql/schemaResolver/*.${isLocal ? "ts" : "js"}`)];
    }
    async init() {
        this.graphqlSchema = await type_graphql_1.buildSchema({
            resolvers: this.getResolvers(),
            dateScalarMode: "timestamp"
        });
        const server = new apollo_server_koa_1.ApolloServer({
            schema: this.graphqlSchema,
            formatError: error => {
                const err = new FormatError();
                err.message = error.message;
                err.path = error.path;
                if (this.app.config.env === 'local') {
                    err.extensions = error.extensions;
                    err.locations = error.locations;
                }
                return err;
            },
            tracing: false,
            context: ({ ctx }) => ctx,
            playground: {
                settings: {
                    'request.credentials': 'include'
                }
            },
            introspection: true
        });
        server.applyMiddleware({
            app: this.app,
            path: this.config.router,
            cors: false
        });
        this.app.logger.info('graphql server init');
    }
    // async query({query, var})
    get schema() {
        return this.graphqlSchema;
    }
}
exports.default = GraphQL;
class FormatError {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE0QjtBQUU1Qix5REFBZ0Q7QUFHaEQsK0NBQTBDO0FBUTFDLE1BQXFCLE9BQU87SUFLMUIsWUFBWSxHQUFnQjtRQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtRQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUE7SUFDbEMsQ0FBQztJQUVELFlBQVk7UUFDVixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFBO1FBQy9DLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGdDQUFnQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSTtRQUNSLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSwwQkFBVyxDQUFDO1lBQ3JDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzlCLGNBQWMsRUFBRSxXQUFXO1NBQzVCLENBQUMsQ0FBQTtRQUNGLE1BQU0sTUFBTSxHQUFHLElBQUksZ0NBQVksQ0FBQztZQUM5QixNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDMUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixNQUFNLEdBQUcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFBO2dCQUM3QixHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUE7Z0JBQzNCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQTtnQkFDckIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO29CQUNuQyxHQUFHLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUE7b0JBQ2pDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQTtpQkFDaEM7Z0JBQ0QsT0FBTyxHQUFHLENBQUE7WUFDWixDQUFDO1lBQ0QsT0FBTyxFQUFFLEtBQUs7WUFDZCxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHO1lBQ3pCLFVBQVUsRUFBRTtnQkFDVixRQUFRLEVBQUU7b0JBQ1IscUJBQXFCLEVBQUUsU0FBUztpQkFDakM7YUFDSztZQUNSLGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUMsQ0FBQTtRQUNGLE1BQU0sQ0FBQyxlQUFlLENBQUM7WUFDckIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtZQUN4QixJQUFJLEVBQUUsS0FBSztTQUNaLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFRCw0QkFBNEI7SUFFNUIsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBO0lBQzNCLENBQUM7Q0FDRjtBQXRERCwwQkFzREM7QUFFRCxNQUFNLFdBQVc7Q0FLaEIifQ==