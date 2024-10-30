import { IGetOneMotoristaRepository } from "../../../core/repository/motorista/IGetOneMotoristaRepository";
import { ExceptionAPI } from "../../../providers/exceptions/Exception";

export class CaseGetOneMotorista{
  constructor(private getOneMotorista: IGetOneMotoristaRepository){}

  async execute(id: string){
    let result = await this.getOneMotorista.getOneMotorista(id);

    if(result == null){
      throw new ExceptionAPI("Erro ao buscar motorista", 400);
    }

    return result;
  }
}