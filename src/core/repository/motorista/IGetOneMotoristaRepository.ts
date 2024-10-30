import { Motorista } from "../../entities/Motorista";

export interface IGetOneMotoristaRepository{

  getOneMotorista(id: string): Promise<Motorista>
};