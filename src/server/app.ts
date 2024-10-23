import express  from 'express';
import { routeMotorista } from './routes/routeMotorista';

const app = express();
let port = 3000;

app.use(express.json());
app.use('/motorista', routeMotorista);

app.listen(port, ()=>{
  console.log("🔥server running!");
})