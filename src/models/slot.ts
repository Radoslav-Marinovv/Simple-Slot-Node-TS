import { SymbolPayouts } from '../types/types.js';
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
  private _symbolsValues: SymbolPayouts | null = null;
  private _winingLines: number[][] | null = null;
  private _reels: number[][] | null = null;

  constructor(
    reelsCount: number,
    rowsCount: number,
    symbolsAndPrizes: SymbolPayouts,
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

  private setSymbolsValues(symbols: SymbolPayouts) {
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

  private generateRandomReelPositions(
    reelsCount: number,
    reels: number[][],
    rowsCount: number
  ) {
    const randomSpinResults = [];
    for (let i = 0; i < reelsCount; i++) {
      let allSelectedReelPositions = [];
      let selectedReelPosition = Math.floor(
        Math.random() * (reels[i].length - 1)
      );
      for (let j = 0; j < rowsCount; j++) {
        if (selectedReelPosition > reels[i].length - 1) {
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

    return slotWinResults;
  }

  private calculateTotalWinnings(
    winingLines: number[][],
    symbolsValues: SymbolPayouts
  ) {
    let totalWinningAmount = 0;

    winingLines.forEach((line, idx) => {
      if (line.length > 1) {
        console.log(
          `winning line ${idx} and symbol: ${line[0]} x${line.length}, x${
            symbolsValues[line[0]][line.length - 1]
          }`
        );
        totalWinningAmount += symbolsValues[line[0]][line.length - 1];
      }
    });

    totalWinningAmount > 0 &&
      console.log(`\nTotal winning multiplier: x${totalWinningAmount}`);

    return totalWinningAmount;
  }

  public Spin(playerBalance: number, playerBet: number) {
    if (!this.reels) throw new Error('Reels are not set');
    if (!this.rowsCount) throw new Error('Rows count is not set');
    if (!this.reelsCount) throw new Error('Reels count is not set');
    if (!this.winingLines) throw new Error('Wining lines are not set');
    if (!this.symbolsValues) throw new Error('Symbols values are not set');

    let payoutAmount = 0;
    let currentPlayerBalance = playerBalance;

    const reelPositions = this.generateRandomReelPositions(
      this.reelsCount,
      this.reels,
      this.rowsCount
    );
    const winningLineResults = this.checkForWinningLines(
      reelPositions,
      this.winingLines
    );

    console.log('🟢'.repeat(25));
    console.log(`\nplayer balance: 💲${currentPlayerBalance}`);
    console.log(`\nplayer bet: 💲${playerBet}\n`);
    console.table(reelPositions);

    const totalWinnings = this.calculateTotalWinnings(
      winningLineResults,
      this.symbolsValues
    );

    if (totalWinnings > 0) {
      console.log('\nYou won!');
      currentPlayerBalance += playerBet * totalWinnings;
      payoutAmount = playerBet * totalWinnings;
    } else {
      console.log('\nBetter luck next time!');
      currentPlayerBalance -= playerBet;
      payoutAmount -= playerBet;
    }

    console.log(`\nnew player balance: 💲${currentPlayerBalance}\n`);
    console.log('🟢'.repeat(25), '\n');

    return payoutAmount;
  }
}
