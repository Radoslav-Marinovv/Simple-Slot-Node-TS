import Slot from './models/slot.js';
import * as slotMachineConfig from './configurations/configuration.js';

const { reelsCount, rowsCount, symbols, lines, reels } =
  slotMachineConfig.default;

const slot = new Slot(reelsCount, rowsCount, symbols, lines, reels);

let playerBalance = 1000;
let playerBet = 10;

for (let i = 0; i < 102; i++) {
  if (playerBalance < playerBet) {
    console.log('\nNot enough balance to play');
    break;
  }
  playerBalance += slot.Spin(playerBalance, playerBet);
}
