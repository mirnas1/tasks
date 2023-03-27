/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    const filteredNums = [numbers[0], numbers[numbers.length - 1]];
    return filteredNums;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const updatedArr = numbers.map((num: number): number => num * 3);
    return updatedArr;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const fixedStrings = numbers.map((str: string): number =>
        Number(str) ? Number(str) : 0
    );
    return fixedStrings;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollaSigns = amounts.map((amount: string): string =>
        amount.startsWith("$") ? amount.slice(1, amount.length) : amount
    );
    const intMonayyyy = noDollaSigns.map((str: string): number =>
        Number(str) ? Number(str) : 0
    );

    return intMonayyyy;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const upperMsg = messages.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message
    );
    const filteredMsg = upperMsg.filter(
        (message2: string): boolean => !message2.endsWith("?")
    );
    return filteredMsg;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const sub4Words = words.filter((word: string): boolean => word.length < 4);
    return sub4Words.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const isRGB = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return isRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (accumulator, currentVal) => accumulator + currentVal
    );
    const plusStr = addends.join("+");
    return String(sum) + "=" + plusStr;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (values.length != 0) {
        const allPos = values.every((number: number): boolean => number >= 0); // works in testing
        if (allPos) {
            const valSum = values.reduce((sum, currentVal) => sum + currentVal);
            return [...values, valSum];
        } else {
            const negIndex = values.findIndex(
                (num: number): boolean => num < 0
            );
            const noNeg = values.slice(0, negIndex);
            const noNegSum = noNeg.reduce(
                (sum, currentNum) => sum + currentNum,
                0
            );
            const result = [...values];
            result.splice(negIndex + 1, 0, noNegSum);
            return result;
        }
    }

    return [0];
}
