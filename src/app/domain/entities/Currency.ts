export class Currency {
  private _code: string; // ID
  private _symbol: string;
  private _displayName: string;

  constructor(code: string, symbol: string, displayName: string) {
    this._code = code;
    this._symbol = symbol;
    this._displayName = displayName;
  }

  public get symbol(): string {
    return this._symbol;
  }

  public set symbol(value: string) {
    this._symbol = value;
  }

  public get code(): string {
    return this._code;
  }
  public set code(value: string) {
    this._code = value;
  }

  public get displayName(): string {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

}