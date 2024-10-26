export class Motorista{
  
  nome: string;
  cpf: string;
  rg?: string;
  orgaoexpeditor?: string;
  telefone?: string;

  constructor(props: Motorista){
    
    this.nome = props.nome;
    this.cpf = props.cpf;
    this.rg = props.rg;
    this.orgaoexpeditor = props.orgaoexpeditor;
    this.telefone = props.telefone;
  };
}