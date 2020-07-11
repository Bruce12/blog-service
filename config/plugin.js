"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugin = {
    static: true,
    // mongoose
    mongoose: {
        enable: true,
        package: 'egg-mongoose'
    },
    // cors
    cors: {
        enable: true,
        package: 'egg-cors'
    },
    // socket.io
    io: {
        enable: true,
        package: 'egg-socket.io',
    },
    validate: {
        enable: true,
        package: 'egg-validate'
    }
};
exports.default = plugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTSxNQUFNLEdBQWM7SUFDeEIsTUFBTSxFQUFFLElBQUk7SUFDWixXQUFXO0lBQ1gsUUFBUSxFQUFFO1FBQ1IsTUFBTSxFQUFFLElBQUk7UUFDWixPQUFPLEVBQUUsY0FBYztLQUN4QjtJQUNELE9BQU87SUFDUCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUUsSUFBSTtRQUNaLE9BQU8sRUFBRSxVQUFVO0tBQ3BCO0lBQ0QsWUFBWTtJQUNaLEVBQUUsRUFBRTtRQUNGLE1BQU0sRUFBRSxJQUFJO1FBQ1osT0FBTyxFQUFFLGVBQWU7S0FDekI7SUFDRCxRQUFRLEVBQUU7UUFDUixNQUFNLEVBQUUsSUFBSTtRQUNaLE9BQU8sRUFBRSxjQUFjO0tBQ3hCO0NBQ0YsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQyJ9