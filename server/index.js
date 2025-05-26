import express from 'express';
import cors from 'cors'
import 'dotenv/config';
import inventoryRouter from './routes/inventoryitem.js'; 

const app = express();

app.use(cors());
app.use(express.json());
app.use('/inventoryitem', inventoryRouter);

app.get('/', (req, res) => {
  res.send('API is running. Try /inventoryitem');
});

app.listen(3001, () => {
  console.log('Server is running at http://localhost:3001');
});