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

    // desert tile sprite types
    // keep in form 20x
    desertFloor: 200,
    desertPlant: 201,
    desertRock: 202,

    // forest tile sprite types
    // keep in form 30x
    forestFloor: 300,
    forestTree: 301,
    forestRock: 302,
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
}