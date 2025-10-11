import swaggerAutogen from 'swagger-autogen';
import path from 'path';
const __dirname = path.dirname(__filename);
const doc = {
  info: {
    title: 'Neurolab API',
    description: 'Documentación de API generada automáticamente',
  },
  host: 'localhost:6001/api',
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

console.log(__dirname)
const outputFile = './swagger-output.json'; 
const endpointsFiles = ['../../apps/proyecto-siga-backend/src/routes/routes.ts']; 

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc)