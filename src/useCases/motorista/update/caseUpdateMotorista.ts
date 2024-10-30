import type { updateMotoristaRequestDTO } from "../../../core/DTO/motorista/updateMotoristaRequestDTO";
import { IUpdateMotoristaRepository } from "../../../core/repository/motorista/IUpdateMotoristaRepository";
import { ExceptionAPI } from "../../../providers/exceptions/Exception";

export class CaseUpdateMotorista{

  constructor(private updateMotoristaRepository: IUpdateMotoristaRepository){}

  async execute(id: string, data: updateMotoristaRequestDTO){

    let result = await this.updateMotoristaRepository.updateMotorista(id, data);

    if(result == 0){
      throw new ExceptionAPI("Cadastro inexistente ou inativo", 400);
    }
  }
}