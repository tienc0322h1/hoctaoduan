let AliceScore = [4, 7, 6, 5];
let BobScore = [5, 7, 4, 8]

function compareTriplets(a, b) {
    let countAliceScore = 0;
    let countBobScore = 0;
    let getCount = [];
    for (let i = 0; i < a.length; i++) {
        if (AliceScore[i] > BobScore[i]) {
            countAliceScore += 1;
        } else {
            if (AliceScore[i] == BobScore[i]){
            }
            else countBobScore++;
        }

    }
    getCount.push(countAliceScore, countBobScore);
    return getCount;
}

console.log(compareTriplets(AliceScore, BobScore))