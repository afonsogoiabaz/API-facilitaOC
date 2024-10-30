import { formatException } from "../../../providers/exceptions/formatException";
import { CaseGetOneMotorista } from "./caseGetOneMotorista";
import { Request, Response } from "express";

export class GetOneMotoristaController{
  constructor(private caseGetOneMotorista: CaseGetOneMotorista){}
  
  async handle(request: Request, response: Response){
    try{
      let {id} = request.params;
      let motorista = await this.caseGetOneMotorista.execute(id);

      return response.status(201).json({
        status: response.statusCode,
        message: "Motorista encontrado com sucesso!",
        data: motorista
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