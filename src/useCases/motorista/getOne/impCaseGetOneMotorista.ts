import { Motorista } from "../../../core/entities/Motorista";
import { IGetOneMotoristaRepository } from "../../../core/repository/motorista/IGetOneMotoristaRepository";
import { MotoristaModels } from "../../../services/postgres/models/motoristaModels";

let motoristaModels = new MotoristaModels();
export class ImpCaseGetOneMotorista implements IGetOneMotoristaRepository{
  
  async getOneMotorista(id: string): Promise<Motorista> {
    let result = (await motoristaModels.getOneMotorista(id)).rows[0];

    return result;
  }
}