import express  from 'express';

const app = express();
let port = 3000;

app.use(express.json());

export { app };

app.listen(port, ()=>{
  console.log("🔥server running!");
})