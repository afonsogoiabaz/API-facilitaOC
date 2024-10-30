import { Motorista } from "../../entities/Motorista";

export interface IGetAllMotoristaRepository{

  getAllMotorista(): Promise<Array<Motorista> | null>;
}