import express from 'express';
import cors from 'cors';
import order from './routes/order.route';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use(order);


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});