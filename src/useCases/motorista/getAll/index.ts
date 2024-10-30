import { CaseGetAllMotorista } from "./caseGetMotorista";
import { GetAllMotoristaController } from "./getAllMotoristaController";
import { ImpCaseGetAllMotorista } from "./impCaseGetAllMotorista";

let impCaseGetAllMotorista = new ImpCaseGetAllMotorista();
let caseGetAllMotorista = new CaseGetAllMotorista(impCaseGetAllMotorista);
let getAllMotoristaController = new GetAllMotoristaController(caseGetAllMotorista);

export { getAllMotoristaController };