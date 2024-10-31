import { Motorista } from "../../../core/entities/Motorista";
import { IGetMotoristaRepository } from "../../../core/repository/motorista/IGetMotoristaRepository";
import { MotoristaModels } from "../../../services/postgres/models/motoristaModels";

let motoristaModels = new MotoristaModels();

export class ImpCaseGetMotorista implements IGetMotoristaRepository{
  
  async getMotorista(id?: string): Promise<Array<Motorista> | null> {

    if(id == undefined){
      return (await motoristaModels.getAllMotorista()).rows;
    }

    return (await motoristaModels.getOneMotorista(id)).rows[0];    
  }
}