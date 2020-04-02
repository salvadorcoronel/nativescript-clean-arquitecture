export class ClientCreditScore {
  private _creditScore: number;
  private _dni: string;

  constructor(dni: string, creditScore: number) {
    this._dni = dni;
    this._creditScore = creditScore;
  }

  public get creditScore(): number {
    return this._creditScore;
  }
  public set creditScore(value: number) {
    this._creditScore = value;
  }

  public get dni(): string {
    return this._dni;
  }
  public set dni(value: string) {
    this._dni = value;
  }
}