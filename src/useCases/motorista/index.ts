import { ImpCaseCreateMotorista } from './impCaseCreateMotorista';
import { CaseCreateMotorista } from './caseCreateMotorista';
import { CreateMotoristaController } from './createMotoristaController';

let implementsCaseCreateMotorista = new ImpCaseCreateMotorista();
let caseCreateMotorista = new CaseCreateMotorista(implementsCaseCreateMotorista);
let createMotoristaController = new CreateMotoristaController(caseCreateMotorista);

export { createMotoristaController };