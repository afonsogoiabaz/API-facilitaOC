import type { updateMotoristaRequestDTO } from "../../DTO/motorista/updateMotoristaRequestDTO";

export interface IUpdateMotoristaRepository{

  updateMotorista(id: string, data: updateMotoristaRequestDTO):Promise<number | null>;
}