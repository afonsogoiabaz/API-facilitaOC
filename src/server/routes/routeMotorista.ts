import {Router } from "express";
import { Request, Response } from "express";

let routeMotorista = Router();

routeMotorista.get('/listagem', (request: Request, response: Response)=>{
  response.send('listagem de motoristas');
});

routeMotorista.get('/listagem/:id', (request: Request, response: Response)=>{
  response.send('selecionado 1 cadastro de motorista');
});

routeMotorista.post('/edit/:id', (request: Request, response: Response)=>{
  response.send('alterado 1 motorista');
});

routeMotorista.post('/cadastro', (request: Request, response: Response)=>{
  response.send('cadastro do motorista');
});

export { routeMotorista }