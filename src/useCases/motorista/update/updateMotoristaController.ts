import { formatException } from "../../../providers/exceptions/formatException";
import { Request, Response } from "express";
import { CaseUpdateMotorista } from "./caseUpdateMotorista";
import { updateMotoristaSchema } from "../../../providers/validation/motorista/zUpdateMotorista";

export class UpdateMotoristaController{

  constructor(private caseUpdateMotorista: CaseUpdateMotorista){}
  
  async handle(request: Request, response: Response): Promise<Response>{
    try{
      let {nome_motorista, rg_motorista, orgaoexpeditor_motorista, telefone_motorista} = updateMotoristaSchema.parse(request.body);
      let { id } = request.params;

      await this.caseUpdateMotorista.execute(
        id,
        {
          nome: nome_motorista,
          rg: rg_motorista,
          orgaoexpeditor: orgaoexpeditor_motorista,
          telefone: telefone_motorista
        }
      );

      return response.status(201).json({
        status: response.statusCode,
        message: "motorista atualizado com sucesso!"
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
};