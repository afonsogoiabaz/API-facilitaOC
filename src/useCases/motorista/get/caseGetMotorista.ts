import { IGetMotoristaRepository } from "../../../core/repository/motorista/IGetMotoristaRepository";
import { ExceptionAPI } from "../../../providers/exceptions/Exception";

export class CaseGetMotorista{

  constructor(private getMotoristaRepository: IGetMotoristaRepository){}
  async execute(id?: string){
    let result = await this.getMotoristaRepository.getMotorista(id);

    if(result == null){
      throw new ExceptionAPI("Houve um erro ao buscar os motoristas", 400);
    };

    if(result.length == 0){
      throw new ExceptionAPI("Nenhum motorista cadastrado", 200);
    };

    return result;
  }
} 