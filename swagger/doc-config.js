exports.swaggerUI = require('swagger-ui-express');
const swaggerjsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Notes API',
            version: '1.0.0',
            description: 'Notes API documentations'
        }
    },
    apis: ['./routes/*.js']
}

exports.swaggerSpecification = swaggerjsdoc(swaggerOptions);
