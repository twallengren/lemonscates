// generates a number in distribution [x, x, x, y, y, ..., z
// ie if distribution is [1, 2], there is a 50% chance of 
// generating 1 and a 50% chance of generating 2
function randomWithProbability(probArray) {
    var idx = Math.floor(Math.random() * probArray.length);
    return probArray[idx];
}

// creates a width x height array to represent the map
// uses values from probability distribution and randomly
// places tile sprite elements
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