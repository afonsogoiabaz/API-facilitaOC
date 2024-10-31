import { formatException } from "../../../providers/exceptions/formatException";
import { CaseGetMotorista } from "./caseGetMotorista";
import { Request, Response } from "express";

export class GetMotoristaController {

  constructor(private caseGetMotorista: CaseGetMotorista){}

  async handle(request: Request, response: Response){
    
    try{
      let { id } = request.params;
      let result = await this.caseGetMotorista.execute(id);

      if(id == undefined){
        return response.status(201).json({
          status: response.statusCode,
          message: "Há motoristas a serem listados",
          data: result
        });
      }

      return response.status(201).json({
        status: response.statusCode,
        message: "Motorista encontrado com sucesso!",
        data: result
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