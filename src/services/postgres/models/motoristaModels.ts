import type { updateMotoristaRequestDTO } from '../../../core/DTO/motorista/updateMotoristaRequestDTO';
import { Motorista } from '../../../core/entities/Motorista';
import * as db from '../pgIndex';

export class MotoristaModels{

  createMotorista = async(motorista: Motorista)=>{
    return(
      await db.query(
        `insert into motorista
          (nome_motorista, cpf_motorista, rg_motorista, orgaoexpeditor_motorista, telefone_motorista) 
        values ($1, $2, $3, $4, $5)`, 
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
  };

  updateMotorista = async(id: string, data: updateMotoristaRequestDTO)=>{
    return(
      await db.query(
        `update motorista set
          nome_motorista = $1, rg_motorista = $2, orgaoexpeditor_motorista = $3, telefone_motorista = $4
        where motorista.id_motorista = $5`,
        [
          data.nome,
          data.rg,
          data.orgaoexpeditor,
          data.telefone,
          id
        ]
      )
    );
  };

  getAllMotorista = async()=>{
    return(
      await db.query(
        `select * from motorista order by motorista.nome_motorista`,
        []
      )
    );
  };

  getOneMotorista = async(id: string)=>{
    return(
      await db.query(
        `select * from motorista where motorista.id_motorista = $1`,
        [id]
      )
    );
  };
}