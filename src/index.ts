export type pairings = ReadonlyArray<[string, string]>;

export function getACircleOfPairsForAllInList(ids: ReadonlyArray<string>): pairings {
    const hatOfIds = ids.slice();

    const pairs: Array<[string, string]> = [];

    const firstId = getRandomElementFromArray(hatOfIds);
    let previousId = firstId;
    while (hatOfIds.length > 0) {
        const selectedId = getRandomElementFromArray(hatOfIds);
        pairs.push([previousId, selectedId]);
        previousId = selectedId;
    }

    pairs.push([previousId, firstId]);

    return pairs;
}

function getRandomElementFromArray<T>(array: T[]): T {
    const index = getRandomIndexFromArray(array);
    return array.splice(index, 1)[0];
}

function getRandomIndexFromArray<T>(array: T[]): number {
    return Math.floor(Math.random() * array.length);
}
