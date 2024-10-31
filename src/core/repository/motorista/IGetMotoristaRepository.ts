import { Motorista } from "../../entities/Motorista";

export interface IGetMotoristaRepository{

  getMotorista(id?: string): Promise<Array<Motorista> | null>;
}