import express from 'express';

const app = express();
const PORT = 3001;

app.use(express.json());

// import "./database"

app.get('/', (request, response) => {
  return response.json({ message: 'teste rota' });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});