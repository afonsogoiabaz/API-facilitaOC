import { Motorista } from "../../../core/entities/Motorista";
import { IGetAllMotoristaRepository } from "../../../core/repository/motorista/IGetAllMotoristaRepository";
import { MotoristaModels } from "../../../services/postgres/models/motoristaModels";

let motoristaModels = new MotoristaModels();

export class ImpCaseGetAllMotorista implements IGetAllMotoristaRepository{
  
  async getAllMotorista(): Promise<Array<Motorista> | null> {

    return (await motoristaModels.getAllMotorista()).rows;
  }
}