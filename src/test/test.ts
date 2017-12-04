import {getACircleOfPairsForAllInList} from '../index';

const people = ['justin', 'steve', 'frank', 'sara', 'jenny'];

const pairs = getACircleOfPairsForAllInList(people);

for (const pair of pairs) {
    console.log(pair);
}
