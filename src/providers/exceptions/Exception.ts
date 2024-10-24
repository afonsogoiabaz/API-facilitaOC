export class ExceptionAPI extends Error{

  public readonly status: number;
  
  constructor(message: string, statusCode: number) {
    super(message);

    this.status = statusCode;
  }
}