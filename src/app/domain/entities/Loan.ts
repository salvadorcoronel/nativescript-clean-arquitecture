import { Builder } from "./Builder";
import { Currency } from './Currency';

export class Loan {
  private _currency: Currency;
  private _annualInterestRate: number; // 12.50%
  private _loanAmount: number; // $100,000.00
  private _period: number; // 5 years, 15 years
  private _firstPaymentDate: Date;

  constructor(currency: Currency, annualInterestRate: number, loanAmount: number, period: number, firstPaymentDate: Date) {
    this._currency = currency;
    this._annualInterestRate = annualInterestRate;
    this._loanAmount = loanAmount;
    this._period = period;
    this._firstPaymentDate = firstPaymentDate;
  }

  public get currency(): Currency {
    return this._currency;
  }

  public get annualInterestRate(): number {
    return this._annualInterestRate;
  }

  public get loanAmount(): number {
    return this._loanAmount;
  }

  public get period(): number {
    return this._period;
  }

  public get firstPaymentDate(): Date {
    return this._firstPaymentDate;
  }

  calculateMonthlyFee() {
    return 12;
  }

  calculateTotalInterest() {
    return 11000;
  }
}

export class LoanBuilder implements Builder<Loan>{
  private _currency: Currency;
  private _annualInterestRate: number;
  private _loanAmount: number;
  private _period: number;
  private _firstPaymentDate: Date;

  public setCurrency(value: Currency): LoanBuilder {
    this._currency = value;
    return this;
  }

  public setAnnualInterestRate(value: number): LoanBuilder {
    this._annualInterestRate = value;
    return this;
  }

  public setLoanAmount(value: number): LoanBuilder {
    this._loanAmount = value;
    return this;
  }

  public setPeriod(value: number): LoanBuilder {
    this._period = value;
    return this;
  }

  public setFirstPaymentDate(value: Date): LoanBuilder {
    this._firstPaymentDate = value;
    return this;
  }

  public build(): Loan {
    return new Loan(this._currency, this._annualInterestRate, this._loanAmount, this._period, this._firstPaymentDate);
  }
}