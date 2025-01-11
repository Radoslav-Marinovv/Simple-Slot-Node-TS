import {
  MINIMUM_REELS,
  MINIMUM_ROWS,
  MINIMUM_SYMBOLS,
  MINIMUM_WINING_LINES,
} from '../../constants/constants.js';

export const reelsCountValidation = (reels: number): boolean => {
  try {
    if (reels < MINIMUM_REELS) {
      throw new Error(
        `🛑🛑🛑 Reels count should be greater than ${MINIMUM_REELS} 🛑🛑🛑\n\n`
      );
    }
    return true;
  } catch (error) {
    error instanceof Error
      ? console.error(error.message)
      : console.error(error);
    return false;
  }
};

export const rowsCountValidation = (rows: number): boolean => {
  try {
    if (rows < MINIMUM_ROWS) {
      throw new Error(
        `🛑🛑🛑 Rows count should be greater than ${MINIMUM_ROWS} 🛑🛑🛑\n\n`
      );
    }
    return true;
  } catch (error) {
    error instanceof Error
      ? console.error(error.message)
      : console.error(error);
    return false;
  }
};

export const symbolsValuesValidation = (symbols: object): boolean => {
  try {
    if (Object.keys(symbols).length < MINIMUM_SYMBOLS) {
      throw new Error(
        `🛑🛑🛑 Symbols values must be greater then ${MINIMUM_SYMBOLS} 🛑🛑🛑\n\n`
      );
    }
    return true;
  } catch (error) {
    error instanceof Error
      ? console.error(error.message)
      : console.error(error);
    return false;
  }
};

export const winingLinesValidation = (lines: number[][]): boolean => {
  try {
    if (lines.length < MINIMUM_WINING_LINES) {
      throw new Error(
        `🛑🛑🛑 Lines count should be greater than ${MINIMUM_WINING_LINES} 🛑🛑🛑\n\n`
      );
    }
    return true;
  } catch (error) {
    error instanceof Error
      ? console.error(error.message)
      : console.error(error);
    return false;
  }
};

export const reelsValidation = (reels: number[][]): boolean => {
  try {
    if (reels.length < MINIMUM_REELS) {
      throw new Error(
        `🛑🛑🛑 Reels count should be greater than ${MINIMUM_REELS} 🛑🛑🛑\n\n`
      );
    }
    return true;
  } catch (error) {
    error instanceof Error
      ? console.error(error.message)
      : console.error(error);
    return false;
  }
};
