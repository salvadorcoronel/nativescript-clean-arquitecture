export class Client {
  private _id: string;
  private _firstName: string;
  private _lastName: string;
  private _dni: string;

  constructor(id: string, firstName: string, lastName: string, dni: string) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._dni = dni;
  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }

  public get dni(): string {
    return this._dni;
  }
  public set dni(value: string) {
    this._dni = value;
  }

  public validateDNI(): boolean {
    return (this._dni.length === 8);
  }

  public validateFirstName(): boolean {
    return this.validateName(this.firstName);
  }

  public validateLastName(): boolean {
    return this.validateName(this.lastName);
  }

  private validateName(name: string): boolean {
    return name.length > 4;
  }
}