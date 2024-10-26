import type { Motorista } from '../../../core/entities/Motorista';
import * as db from '../pgIndex';

export class MotoristaModels{

  createMotorista = async(motorista: Motorista)=>{
    return(
      await db.query(
        "insert into motorista(nome_motorista, cpf_motorista, rg_motorista, orgaoexpeditor_motorista, telefone_motorista) values ($1, $2, $3, $4, $5)", 
        [
          motorista.nome,
          motorista.cpf,
          motorista.rg,
          motorista.orgaoexpeditor,
          motorista.telefone
        ]
      )
    )
  };

  createMotoristaNotMandatory = async(motorista: Motorista)=>{
    return(
      await db.query(
        "insert into motorista(nome_motorista, cpf_motorista) values ($1, $2)", 
        [
          motorista.nome,
          motorista.cpf,
        ]
      )
    );
  };

  verificaCPFCadastrado = async(cpf: string)=>{
    return(
      await db.query(
        "select * from motorista where motorista.cpf_motorista = $1",
        [cpf]
      )
    );
  } 
}