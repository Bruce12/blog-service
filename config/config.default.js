"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (appInfo) => {
    const config = {};
    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1572947163069_8100';
    // add your egg config in here
    config.middleware = [];
    config.security = {
        csrf: {
            enable: false,
        },
    };
    config.io = {
        init: {},
        namespace: {
            '/': {
                connectionMiddleware: ['connection'],
                packetMiddleware: ['packet'],
            },
            '/chat': {
                connectionMiddleware: ['connection'],
                packetMiddleware: [],
            },
        },
    };
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
        credentials: true
    };
    config.mongoose = {
        url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1/blog',
        options: {
            useUnifiedTopology: true
        },
    };
    // config.graphql = {
    //   router: '/graphql',
    //   // 是否加载到 app 上，默认开启
    //   dateScalarMode: 'timestamp'
    // };
    config.middleware = ['errorHandler'];
    config.errorHandler = { match: 'api' };
    // add your special config in here
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    };
    // the return config will combines to EggAppConfig
    return Object.assign(Object.assign({}, config), bizConfig);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtCQUFlLENBQUMsT0FBbUIsRUFBRSxFQUFFO0lBQ3JDLE1BQU0sTUFBTSxHQUFHLEVBQWdDLENBQUM7SUFFaEQsMENBQTBDO0lBQzFDLHVFQUF1RTtJQUN2RSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7SUFFbkQsOEJBQThCO0lBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBRXZCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDaEIsSUFBSSxFQUFFO1lBQ0osTUFBTSxFQUFFLEtBQUs7U0FDZDtLQUNGLENBQUM7SUFFRixNQUFNLENBQUMsRUFBRSxHQUFHO1FBQ1YsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUU7WUFDVCxHQUFHLEVBQUU7Z0JBQ0gsb0JBQW9CLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3BDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDO2FBQzdCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLG9CQUFvQixFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUNwQyxnQkFBZ0IsRUFBRSxFQUFFO2FBQ3JCO1NBQ0Y7S0FDRixDQUFDO0lBRUYsTUFBTSxDQUFDLElBQUksR0FBRztRQUNaLE1BQU0sRUFBRSxHQUFHO1FBQ1gsWUFBWSxFQUFFLGdDQUFnQztRQUM5QyxXQUFXLEVBQUUsSUFBSTtLQUNsQixDQUFDO0lBRUYsTUFBTSxDQUFDLFFBQVEsR0FBRztRQUNoQixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLElBQUksMEJBQTBCO1FBQzlELE9BQU8sRUFBRTtZQUNQLGtCQUFrQixFQUFFLElBQUk7U0FDekI7S0FDRixDQUFDO0lBRUYscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsZ0NBQWdDO0lBQ2hDLEtBQUs7SUFFTCxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDcEMsTUFBTSxDQUFDLFlBQVksR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQTtJQUV0QyxrQ0FBa0M7SUFDbEMsTUFBTSxTQUFTLEdBQUc7UUFDaEIsU0FBUyxFQUFFLGlEQUFpRCxPQUFPLENBQUMsSUFBSSxFQUFFO0tBQzNFLENBQUM7SUFFRixrREFBa0Q7SUFDbEQsdUNBQ0ssTUFBTSxHQUNOLFNBQVMsRUFDWjtBQUNKLENBQUMsQ0FBQyJ9