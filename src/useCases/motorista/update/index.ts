
import { CaseUpdateMotorista } from "./caseUpdateMotorista";
import { ImpCaseUpdateMotorista } from "./impCaseUpdateMotorista";
import { UpdateMotoristaController } from "./updateMotoristaController";

let impCaseUpdateMotorista = new ImpCaseUpdateMotorista();
let caseUpdateMotorista = new CaseUpdateMotorista(impCaseUpdateMotorista);
let updateMotoristaController = new UpdateMotoristaController(caseUpdateMotorista);

export { updateMotoristaController };