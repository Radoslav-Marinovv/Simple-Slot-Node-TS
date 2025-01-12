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

  // bet amount ???
  // roll function (random number) reels 1 - 5 picker func to get the reel ✅
  // check for wining lines
  // payout

  private generateRandomReelPositions(
    reelsCount: number,
    reels: number[][],
    rowsCount: number
  ) {
    const randomSpinResults = [];

    for (let i = 0; i < reelsCount; i++) {
      let allSelectedReelPositions = [];
      let selectedReelPosition = Math.floor(Math.random() * reels[i].length);

      for (let j = 0; j < rowsCount; j++) {
        if (selectedReelPosition > reels[i].length) {
          selectedReelPosition = 0;
        }

        allSelectedReelPositions.push(selectedReelPosition);
        selectedReelPosition++;
      }
      randomSpinResults.push(allSelectedReelPositions);
    }

    return randomSpinResults;
  }

  public Spin() {
    if (!this.reelsCount) return 'Reels count is not set';
    if (!this.reels) return 'Reels are not set';
    if (!this.rowsCount) return 'Rows count is not set';

    const randomNumbers = this.generateRandomReelPositions(
      this.reelsCount,
      this.reels,
      this.rowsCount
    );

    return `Random reel numbers: \n${randomNumbers
      .map((reel) => reel.join(' '))
      .join('\n')}`;
  }
}
