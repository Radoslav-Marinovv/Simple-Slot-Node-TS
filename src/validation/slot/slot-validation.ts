export const reelsCountValidation = (reels: number): boolean => {
  try {
    if (reels < 3) {
      throw new Error('🛑🛑🛑 Reels count should be greater than 2 🛑🛑🛑\n\n');
    }
  } catch (error) {
    error instanceof Error
      ? console.error(error.message)
      : console.error(error);
    return false;
  }
  return true;
};

export const rowsCountValidation = (rows: number): boolean => {
  try {
    if (rows < 3) {
      throw new Error('🛑🛑🛑 Rows count should be greater than 2 🛑🛑🛑\n\n');
    }
  } catch (error) {
    error instanceof Error
      ? console.error(error.message)
      : console.error(error);
    return false;
  }
  return true;
};
