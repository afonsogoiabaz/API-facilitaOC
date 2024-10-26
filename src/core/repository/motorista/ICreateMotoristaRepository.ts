import type { typeMotorista } from "../../types";
import { Motorista } from "../../entities/Motorista";

export interface ICreateMotoristaRepository{

  verifyMotorista(cpf: string): Promise<typeMotorista>;

  createMotorista(data: Motorista): Promise<number | null>;
}