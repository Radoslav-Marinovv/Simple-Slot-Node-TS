import {
  MINIMUM_REELS,
  MINIMUM_ROWS,
  MINIMUM_SYMBOLS,
  MINIMUM_WINING_LINES,
} from '../../constants/constants.js';

export const reelsCountValidation = (reels: number | null): boolean => {
  try {
    if (!reels) {
      throw new Error(`🛑🛑🛑 Reels count is required 🛑🛑🛑\n\n`);
    }
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

export const rowsCountValidation = (rows: number | null): boolean => {
  try {
    if (!rows) {
      throw new Error(`🛑🛑🛑 Rows count is required 🛑🛑🛑\n\n`);
    }
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

export const symbolsValuesValidation = (symbols: object | null): boolean => {
  try {
    if (!symbols) {
      throw new Error(`🛑🛑🛑 Symbols values are required 🛑🛑🛑\n\n`);
    }
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

export const winingLinesValidation = (lines: number[][] | null): boolean => {
  try {
    if (!lines) {
      throw new Error(`🛑🛑🛑 Lines are required 🛑🛑🛑\n\n`);
    }
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

export const reelsValidation = (reels: number[][] | null): boolean => {
  try {
    if (!reels) {
      throw new Error(`🛑🛑🛑 Reels are required 🛑🛑🛑\n\n`);
    }
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
