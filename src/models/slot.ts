import {
  reelsCountValidation,
  rowsCountValidation,
  symbolsValuesValidation,
} from '../validation/slot/slot-validation.js';

export default class Slot {
  private _reelsCount: number | null = null;
  private _rowsCount: number | null = null;
  private _symbolsValues: object | null = null;

  constructor(reelsCount: number, rowsCount: number, symbolsAndPrizes: object) {
    this.setReelsCount(reelsCount);
    this.setRowsCount(rowsCount);
    this.setSymbolsValues(symbolsAndPrizes);
  }

  public get reelsCount() {
    return this._reelsCount;
  }

  public get rowsCount() {
    return this._rowsCount;
  }

  public get symbolsValues() {
    return this._symbolsValues;
  }

  private setReelsCount(reels: number) {
    reelsCountValidation(reels);
    this._reelsCount = reels;
  }

  private setRowsCount(rows: number) {
    rowsCountValidation(rows);
    this._rowsCount = rows;
  }

  private setSymbolsValues(symbols: object) {
    symbolsValuesValidation(symbols);
    this._symbolsValues = symbols;
  }

  public Spin() {
    return `Rows: ${this.rowsCount}\nReels: ${this.reelsCount}\nSymbols: ${
      this.symbolsValues
        ? `${Object.entries(this.symbolsValues).map((item) => {
            return `\nSymbol ${item[0]}: ${item[1]}`;
          })}`
        : 'No symbols'
    }\n game result`;
  }
}
