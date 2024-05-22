/**
 * Retrieves a specified number of random elements from an array.
 * @param {Array} array - The array from which to retrieve random elements.
 * @param {number} number - The number of random elements to retrieve.
 * @returns {Array} An array containing the specified number of random elements from the input array.
 */

export default function getRandomElements(array: any, number: number) {
    const shuffledArray = array.slice();
    shuffledArray.sort(() => Math.random() - 0.5);
    const randomSpecificElements = shuffledArray.slice(0, number);
    return randomSpecificElements;
}
