import { formatException } from "../../../providers/exceptions/formatException";
import { createMotoristaSchema } from "../../../providers/validation/motorista/zCreateMotorista";
import { CaseCreateMotorista } from "./caseCreateMotorista";
import { Request, Response } from "express";

export class CreateMotoristaController{

  constructor(private caseCreateMotorista: CaseCreateMotorista){}
  
  async handle(request: Request, response: Response): Promise<Response>{
    try{
      let {nome_motorista, cpf_motorista, rg_motorista, orgaoexpeditor_motorista, telefone_motorista} = createMotoristaSchema.parse(request.body);

      await this.caseCreateMotorista.execute({
        nome: nome_motorista,
        cpf: cpf_motorista,
        rg: rg_motorista,
        orgaoexpeditor: orgaoexpeditor_motorista,
        telefone: telefone_motorista
      })

      return response.status(201).json({
        status: response.statusCode,
        message: "motorista cadastrado com sucesso!"
      });
    }

    catch(err){      
      let {_message, _status} = formatException(err);

      return response.status(_status).json({
        status: response.statusCode,
        message: _message
      });
    }
  }
}