// texture map object (to help with syntax)
// assigns each possible tile texture a number
// the only requirement is that the number must be unique
export const textureMap = {

    // generic tile sprite types (utilized for city theme)
    // keep in form 10x
    grass: 100,
    tree: 101,
    treasureChest: 102,
    rock: 103,
    healthDrain: 104,
    healthSource: 105,
    genericBrush: 106, // cut down tree
    startTestMission: 107,
    startTestMissionTwo: 108,
    stopTestMissionTwo: 109,

    // desert tile sprite types
    // keep in form 20x
    desertFloor: 200,
    desertPlant: 201,
    desertRock: 202,
    desertBrush: 203, // cut down desert plant

    // forest tile sprite types
    // keep in form 30x
    forestFloor: 300,
    forestTree: 301,
    forestRock: 302,
    forestBrush: 303, // cut down forest tree

    // snow tile sprite types
    // keep in form 40x
    snowFloor: 400,
    snowTree: 401,
    snowRock: 402,
    snowBrush: 403, // cut down snow tree

    // transportation tile sprites
    // keep in form 50x
    toLemonscates: 500,
    toForest: 501,
    toDesert: 502,
    toWinter: 503,
    toBeach: 504,

}

// collision map object - helps with syntax
export const collisionMap = {

    collision: 1,
    noCollision: 0,

}

// interaction map object - helps with syntax
export const interactionMap = {

    // no interaction - default
    noInteraction: 0,

    // health interactions
    // keep in form 10x
    healthSource: 100,
    healthDrain: 101,

    // weight interactions
    // keep in form 20x
    addWeight: 200,

    // mission interactions
    // keep in form 30x
    startTestMission: 300,
    startTestMissionTwo: 301,
    stopTestMissionTwo: 302,

    // inventory interactions
    // keep in form 40x
    addChoppedWood: 400,

    // transportation interactions
    // keep in form 50x
    toLemonscates: 500,
    toForest: 501,
    toDesert: 502,
    toWinter: 503,
    toBeach: 504,



}

// mission IDs
export const missionIDMap = {

    // misc
    // 0 < x < 100
    missionComplete: 1,

    // test missions
    // keep in form 10x
    testMissionOne: 100,
    testMissionTwo: 101,

}