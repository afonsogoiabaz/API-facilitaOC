import { Router } from "express";
import { createMotoristaController } from "../../useCases/motorista/create";
import { updateMotoristaController } from "../../useCases/motorista/update";

let routeMotorista = Router();

// routeMotorista.get('/listagem', (request: Request, response: Response)=>{
//   response.send('listagem de motoristas');
// });

// routeMotorista.get('/listagem/:id', (request: Request, response: Response)=>{
//   response.send('selecionado 1 cadastro de motorista');
// });

routeMotorista.post('/edit/:id', async(request, response)=>{
  await updateMotoristaController.handle(request, response);
});

routeMotorista.post('/cadastro', async(request, response)=>{
  await createMotoristaController.handle(request, response);
});

export { routeMotorista }