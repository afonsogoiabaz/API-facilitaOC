import { Motorista } from "../../../core/entities/Motorista";
import { ICreateMotoristaRepository } from "../../../core/repository/motorista/ICreateMotoristaRepository";
import type { typeMotorista } from "../../../core/types";
import { MotoristaModels } from "../../../services/postgres/models/motoristaModels";

let motoristaModels = new MotoristaModels();

export class ImpCaseCreateMotorista implements ICreateMotoristaRepository{


  async verifyMotorista(cpf: string): Promise<typeMotorista> {
    let buscaCPF= await motoristaModels.verificaCPFCadastrado(cpf);

    if(buscaCPF.rowCount == 0){
      return buscaCPF.rowCount;
    }

    return buscaCPF.rows[0];
  };

  async createMotorista(data: Motorista): Promise<number | null> {

    if(data.rg == null && data.orgaoexpeditor == null && data.telefone == null){

      return(
        (await motoristaModels.createMotoristaNotMandatory(data)).rowCount);
    };

    return(
      (await motoristaModels.createMotorista(data)).rowCount);
  };
}