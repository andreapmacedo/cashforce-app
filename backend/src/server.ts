import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import cors from 'cors';
import order from './routes/order.route';

const app = express();
const PORT = 3001;

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());

app.use(order);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});