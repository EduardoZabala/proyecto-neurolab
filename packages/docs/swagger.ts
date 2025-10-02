import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Neurolab API',
    description: 'Documentación de API generada automáticamente',
  },
  host: 'localhost:6001',
  schemes: ['http'],
  securityDefinitions: {
    BearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
      description: 'Introduce el token JWT con el prefijo Bearer. Ejemplo: "Bearer {token}"'
    }
  },
  security: [{ BearerAuth: [] }]
};

const outputFile = './swagger-output.json'; 
const endpointsFiles = ['../routes/routes.ts']; 

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc)