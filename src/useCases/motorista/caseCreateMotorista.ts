import { Motorista } from "../../core/entities/Motorista";
import { ExceptionAPI } from "../../providers/exceptions/Exception";
import { ICreateMotoristaRepository } from "../../core/repository/motorista/ICreateMotoristaRepository";

export class CaseCreateMotorista{

  constructor(private createMotoristaRepository: ICreateMotoristaRepository){}

  async execute(data: Motorista){
    let verifyCPFMotorista = await this.createMotoristaRepository.verifyMotorista(data.cpf);

    if(verifyCPFMotorista !== 0){
      throw new ExceptionAPI("Motorista já cadastrado na base", 400);
    }

    let newMotorista = new Motorista(data);
    await this.createMotoristaRepository.createMotorista(newMotorista);   
  }
}