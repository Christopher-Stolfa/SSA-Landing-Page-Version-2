/**
 * Returns an array of numbers ranging from 0 up to its size param
 * This is useful in components that need a preset array of skeletons
 * @param size - Size of the array
 * @function
 */
const makeNumArray = (size: number) => Array.from({ length: size }, (v, i) => i);
export default makeNumArray;
