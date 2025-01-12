import Slot from './models/slot.js';
import * as slotMachineConfig from './configurations/configuration.js';

const { reelsCount, rowsCount, symbols, lines, reels } =
  slotMachineConfig.default;

const slot = new Slot(reelsCount, rowsCount, symbols, lines, reels);

slot.Spin();
