import z from 'zod';

let updateMotoristaSchema = z.object({

  nome_motorista:
    z.string({message: "Nome é obrigatório."})
    .min(10, {message: "Nome completo necessário!"}),

  rg_motorista: 
    z.string()
    .max(20, {message: "Número muito grande!"})
    .optional(),
  
  orgaoexpeditor_motorista:
    z.string()
    .max(15, {message: "Utilize a abreviação do Orgão Expeditor!"})
    .optional(),
    
  telefone_motorista: 
    z.string()
    .max(15, {message: "Número de telefone inválido."})
    .optional()
});

export { updateMotoristaSchema };