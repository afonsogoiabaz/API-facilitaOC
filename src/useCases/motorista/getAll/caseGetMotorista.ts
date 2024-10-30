import { IGetAllMotoristaRepository } from "../../../core/repository/motorista/IGetAllMotoristaRepository";
import { ExceptionAPI } from "../../../providers/exceptions/Exception";

export class CaseGetAllMotorista{

  constructor(private getMotoristaRepository: IGetAllMotoristaRepository){}
  async execute(){
    let result = await this.getMotoristaRepository.getAllMotorista();

    if(result == null){
      throw new ExceptionAPI("Houve um erro ao buscar os motoristas", 400);
    };

    if(result.length == 0){
      throw new ExceptionAPI("Nenhum motorista cadastrado", 200);
    };

    return result;
  }
} 