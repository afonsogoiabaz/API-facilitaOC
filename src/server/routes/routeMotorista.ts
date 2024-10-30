import { Router } from "express";
import { createMotoristaController } from "../../useCases/motorista/create";
import { updateMotoristaController } from "../../useCases/motorista/update";
import { getAllMotoristaController } from "../../useCases/motorista/getAll";

let routeMotorista = Router();

routeMotorista.get('/listagem', async(request, response)=>{
  await getAllMotoristaController.handle(request, response);
});

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