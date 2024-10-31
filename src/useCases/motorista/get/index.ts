import { CaseGetMotorista } from "./caseGetMotorista";
import { GetMotoristaController } from "./getMotoristaController";
import { ImpCaseGetMotorista } from "./impCaseGetMotorista";

let impCaseGetMotorista = new ImpCaseGetMotorista();
let caseGetMotorista = new CaseGetMotorista(impCaseGetMotorista);
let getMotoristaController = new GetMotoristaController(caseGetMotorista);

export { getMotoristaController };