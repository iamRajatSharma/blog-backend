const swaggerJsDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Blogging App API",
            version: "1.0.0",
            description: "API documentation for the Blogging App",
        },
        servers: [
            {
                url: `http://${process.env.HOST}:${process.env.PORT}`, // Replace with your API base URL
            },
        ],
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [{ BearerAuth: [] }],
    },
    apis: ["./src/routes/*.js"], // Path to your route files
};

const swaggerSpecs = swaggerJsDoc(options);
module.exports = swaggerSpecs;
