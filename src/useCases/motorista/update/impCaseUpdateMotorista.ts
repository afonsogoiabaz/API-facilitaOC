import type { updateMotoristaRequestDTO } from "../../../core/DTO/motorista/updateMotoristaRequestDTO";
import { IUpdateMotoristaRepository } from "../../../core/repository/motorista/IUpdateMotoristaRepository";
import { MotoristaModels } from "../../../services/postgres/models/motoristaModels";

let motoristaModels = new MotoristaModels();
export class ImpCaseUpdateMotorista implements IUpdateMotoristaRepository{

  async updateMotorista(id: string, data: updateMotoristaRequestDTO): Promise<number | null> {
    return (await motoristaModels.updateMotorista(id, data)).rowCount;
  }
}