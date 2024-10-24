import z from 'zod';

let createMotoristaSchema = z.object({

  nome:
    z.string({message: "Nome é obrigatório."})
    .min(10, {message: "Nome completo necessário!"}),
  
  cpf:
    z.string({message: "CPF é obrigatório."})
    .min(14, {message: "CPF inválido!"}),

  rg: 
    z.string()
    .max(20, {message: "Número muito grande!"}),
  
  orgaoexpeditor:
    z.string()
    .max(15, {message: "Utilize a abreviação do Orgão Expeditor!"}),
    
  telefone: 
    z.string()
    .max(15, {message: "Número de telefone inválido."})
});

export { createMotoristaSchema };