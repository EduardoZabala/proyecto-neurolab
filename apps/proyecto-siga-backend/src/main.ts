import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerOutput from '../../../packages/docs/swagger-output.json';
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 6001;

const app = express();

app.get('/', (req, res) => {
    res.send({ 'message': 'Hello API'});
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));
app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
});
