/**
 * Pop operation using array destructuring
 * @param originalArray Array of items to be unshifted
 * @return An array containing the poppedElement and a new shortened array
 * @example
 *  const originalArray = [1, 2, 3, 4, 5];
 *  pop(originalArray) // [5, [1, 2, 3, 4]]
 */
const pop = (originalArray: T[]): [T, T[]] => {
  let newArr = [...originalArray]
  const poppedElement = newArr[newArr.length - 1];
  newArr.length = newArr.length - 1;
  return [poppedElement, newArr];
};

/**
 * Shift operation using array destructuring
 * @param originalArray Array of items to be unshifted
 * @return An array containing shifted elements and a new shifted array
 * @example
 *  const originalArray = [1, 2, 3, 4, 5];
 *  shift(originalArray); // [1, [2, 3, 4, 5]]
 */
const shift = (originalArray: T[]): [T, T[]] => {
  let newArr = [...originalArray]
  const shiftedElement = newArr[0];
  newArr.splice(0, 1);
  return [shiftedElement, newArr];
};

/**
 * Unshift operation using array destructuring
 * @param originalArray Array of items to be unshifted
 * @param items Elements to insert at the start of the array
 * @returns An array containing the new array lenght and the new array itself
 * @example
 *  const originalArray = [1, 2, 3, 4, 5];
 *  unshift(originalArray, 0); // [6, [0, 1, 2, 3, 4, 5]]
 */
const unshift = (originalArray: T[], ...items: T[]): [number, T[]] => {
  let newArr = [...originalArray]
  newArr.splice(0, 0, ...elements);
  return [arr.length, newArr];
};

/**
 * Splice operation using array destructuring
 * @param originalArray Array of items to be unshifted
 * @param start Comprised index at which inserting
 * @param deleteCount Number of elements to be deleted from {@link start} position
 * @param items Elements to insert at the {@link start} of the array
 * @returns An array containing the new array lenght and the new array itself
 * 
 * @example
 *  const originalArray = [1, 2, 3, 4, 5];
 *  splice(originalArray, 1, 2, 6, 7); // [[2, 3], [1, 6, 7, 4, 5]]
 */
const splice = (originalArray: T[], start: number, deleteCount: number, ...items: T[]): [T[], T[]] => {
  let newArr = [...originalArray]
  const splicedElements = arr.splice(start, deleteCount, ...elements);
  return [splicedElements, newArr];
};

