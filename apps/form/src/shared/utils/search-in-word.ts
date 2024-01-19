export const containsInWord = (string: string, word: string) => new RegExp(`${string}`, "gi").test(word);
