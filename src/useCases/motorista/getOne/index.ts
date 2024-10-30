import { CaseGetOneMotorista } from "./caseGetOneMotorista";
import { GetOneMotoristaController } from "./getOneMotoristaController";
import { ImpCaseGetOneMotorista } from "./impCaseGetOneMotorista";

let impCaseGetOneMotorista = new ImpCaseGetOneMotorista();
let caseGetOneMotorista = new CaseGetOneMotorista(impCaseGetOneMotorista);
let getOneMotoristaController = new GetOneMotoristaController(caseGetOneMotorista);

export { getOneMotoristaController };