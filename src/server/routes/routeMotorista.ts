import { Router } from "express";
import { createMotoristaController } from "../../useCases/motorista/create";
import { updateMotoristaController } from "../../useCases/motorista/update";
import { getMotoristaController } from "../../useCases/motorista/get";

let routeMotorista = Router();

routeMotorista.get('/listagem', async(request, response)=>{
  await getMotoristaController.handle(request, response);
});

routeMotorista.get('/listagem/:id', async(request, response)=>{
  await getMotoristaController.handle(request, response);
});

routeMotorista.post('/edit/:id', async(request, response)=>{
  await updateMotoristaController.handle(request, response);
});

routeMotorista.post('/cadastro', async(request, response)=>{
  await createMotoristaController.handle(request, response);
});

export { routeMotorista }