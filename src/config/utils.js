function randomWithProbability(probArray) {
    var idx = Math.floor(Math.random() * probArray.length);
    return probArray[idx];
}

export function createGround(width, height, probArray) {
    var result = [];
    for (var i = 0; i < height; i++) {
        result[i] = [];
        for (var j = 0; j < width; j++) {
            result[i][j] = randomWithProbability(probArray);
        }
    }
    return result;
}