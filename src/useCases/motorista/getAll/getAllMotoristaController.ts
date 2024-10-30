import { formatException } from "../../../providers/exceptions/formatException";
import { CaseGetAllMotorista } from "./caseGetMotorista";
import { Request, Response } from "express";

export class GetAllMotoristaController {

  constructor(private caseGetMotorista: CaseGetAllMotorista){}

  async handle(request: Request, response: Response){

    try{
      let result = await this.caseGetMotorista.execute();

      return response.status(201).json({
        status: response.statusCode,
        message: "Há motoristas a serem listados",
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