"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 错误日志
exports.default = () => {
    return async function errorHandler(ctx, next) {
        try {
            await next();
        }
        catch (err) {
            ctx.app.emit('error', err, ctx);
            const status = err.status || 500;
            const error = status === 5000 && ctx.app.config.env === 'prod'
                ? 'Internal Server Error' : err.message;
            // 从 error 对象上读取各个属性，设置到响应中
            ctx.body = { error };
            if (status === 422) {
                ctx.body.detaul = err.errors;
            }
            ctx.status = status;
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JfaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVycm9yX2hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxPQUFPO0FBQ1Asa0JBQWUsR0FBRyxFQUFFO0lBQ2xCLE9BQU8sS0FBSyxVQUFVLFlBQVksQ0FBQyxHQUFZLEVBQUUsSUFBUztRQUN4RCxJQUFJO1lBQ0YsTUFBTSxJQUFJLEVBQUUsQ0FBQTtTQUNiO1FBQUMsT0FBTSxHQUFHLEVBQUU7WUFDWCxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQy9CLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFBO1lBQ2hDLE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLE1BQU07Z0JBQzVELENBQUMsQ0FBQyx1QkFBdUIsQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQTtZQUN4QywyQkFBMkI7WUFDM0IsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFBO1lBQ3BCLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTthQUM3QjtZQUNELEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1NBQ3BCO0lBQ0gsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBIn0=