import {
  reelsCountValidation,
  rowsCountValidation,
} from '../validation/slot/slot-validation.js';

export default class Slot {
  private _reelsCount: number | null = null;
  private _rowsCount: number | null = null;

  constructor(reelsCount: number, rowsCount: number) {
    this.setReelsCount(reelsCount);
    this.setRowsCount(rowsCount);
  }

  public get reelsCount() {
    return this._reelsCount;
  }

  public get rowsCount() {
    return this._rowsCount;
  }

  private setReelsCount(reels: number) {
    reelsCountValidation(reels);
    this._reelsCount = reels;
  }

  private setRowsCount(rows: number) {
    rowsCountValidation(rows);
    this._rowsCount = rows;
  }

  public Spin() {
    return `Rows: ${this.rowsCount}\nReels: ${this.reelsCount}\n game result`;
  }
}
