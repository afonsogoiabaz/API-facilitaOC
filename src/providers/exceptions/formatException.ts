import { ZodError } from "zod";
import { ExceptionAPI } from "./Exception";

let _status: number = 500;
let _message: string = 'Internal Server Error';

let formatException = (err: unknown) =>{

  if (err instanceof ExceptionAPI){
    _status = err.status;
    _message = err.message;  
  }

  if(err instanceof ZodError){
    _status = 400;
    _message = '';

    err.issues.map(issue=>{
      _message += `${issue.message} | `
    })
  }

  console.error(err);
  
  return {_status, _message};
}

export { formatException };