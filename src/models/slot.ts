import {
  winingLinesValidation,
  reelsCountValidation,
  rowsCountValidation,
  symbolsValuesValidation,
  reelsValidation,
} from '../validation/slot/slot-validation.js';

export default class Slot {
  private _reelsCount: number | null = null;
  private _rowsCount: number | null = null;
  private _symbolsValues: object | null = null;
  private _winingLines: number[][] | null = null;
  private _reels: number[][] | null = null;

  constructor(
    reelsCount: number,
    rowsCount: number,
    symbolsAndPrizes: object,
    winingLines: number[][],
    reels: number[][]
  ) {
    this.setReelsCount(reelsCount);
    this.setRowsCount(rowsCount);
    this.setSymbolsValues(symbolsAndPrizes);
    this.setWiningLines(winingLines);
    this.setReels(reels);
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

  public get winingLines() {
    return this._winingLines;
  }

  public get reels() {
    return this._reels;
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

  private setWiningLines(lines: number[][]) {
    winingLinesValidation(lines);
    this._winingLines = lines;
  }

  private setReels(reels: number[][]) {
    reelsValidation(reels);
    this._reels = reels;
  }

  public Spin() {
    return `Rows: ${this.rowsCount}
    \nReels: ${this.reelsCount}
    \nSymbols: ${
      this.symbolsValues &&
      `${Object.entries(this.symbolsValues).map((item) => {
        return `\nSymbol ${item[0]}: ${item[1]}`;
      })}`
    }
    \nWining Lines: ${
      this.winingLines && `${this.winingLines?.map((line) => `\n${line}`)}`
    }
    \nReels: ${this.reels && `${this.reels?.map((reel) => `\n\n${reel}`)}`}
    \ngame result`;
  }
}
