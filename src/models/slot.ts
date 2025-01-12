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
  // check for wining lines ✅
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

        allSelectedReelPositions.push(reels[i][selectedReelPosition]);
        selectedReelPosition++;
      }
      randomSpinResults.push(allSelectedReelPositions);
    }

    return randomSpinResults;
  }

  private checkForWinningLines(
    reelPositions: number[][],
    winingLines: number[][]
  ) {
    const slotWinResults: number[][] = [];

    winingLines.forEach((line) => {
      const lineResult = [];
      let firstSymbol = reelPositions[0][line[0]];
      for (let i = 0; i < reelPositions.length; i++) {
        if (reelPositions[i][line[i]] !== firstSymbol) {
          break;
        }
        lineResult.push(reelPositions[i][line[i]]);
      }
      slotWinResults.push(lineResult);
    });
    console.log(slotWinResults);

    return slotWinResults;
  }

  public Spin() {
    if (!this.reels) return 'Reels are not set';
    if (!this.rowsCount) return 'Rows count is not set';
    if (!this.reelsCount) return 'Reels count is not set';
    if (!this.winingLines) return 'Wining lines are not set';
    if (!this.symbolsValues) return 'Symbols values are not set';

    const reelPositions = this.generateRandomReelPositions(
      this.reelsCount,
      this.reels,
      this.rowsCount
    );
    const winningLineResults = this.checkForWinningLines(
      reelPositions,
      this.winingLines
    );

    console.table(reelPositions);
    winningLineResults.forEach((line) => {
      console.log(`winning line: ${line}`);
    });
    console.log(`winning lines: ${winningLineResults}`);
  }
}
