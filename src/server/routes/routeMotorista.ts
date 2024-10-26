import { Router } from "express";
import { createMotoristaController } from "../../useCases/motorista";


let routeMotorista = Router();

// routeMotorista.get('/listagem', (request: Request, response: Response)=>{
//   response.send('listagem de motoristas');
// });

// routeMotorista.get('/listagem/:id', (request: Request, response: Response)=>{
//   response.send('selecionado 1 cadastro de motorista');
// });

// routeMotorista.post('/edit/:id', (request: Request, response: Response)=>{
//   response.send('alterado 1 motorista');
// });

routeMotorista.post('/cadastro', async (request, response)=>{
  await createMotoristaController.handle(request, response);
});

export { routeMotorista }