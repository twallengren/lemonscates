import { textureMap, collisionMap, interactionMap } from './maps'

/////////////////////////////////////////////////////////////////////////////
// size of character in pixels
const SPRITE_SIZE = 40

// general constants
export const constants = {

    SPRITE_SIZE,
    NORTH: 'NORTH',
    SOUTH: 'SOUTH',
    EAST: 'EAST',
    WEST: 'WEST',
    MOVE_PLAYER: 'MOVE_PLAYER',
    NONE: 'NONE',
    GAIN_HEALTH: 'GAIN_HEALTH',
    LOSE_HEALTH: 'LOSE_HEALTH',
    TO_GRASS: 'TO_GRASS',
    ADD_TILES: 'ADD_TILES',
    CUT_TREE: 'CUT_TREE',
    keydown: 'keydown',
    left_arrow: 37,
    up_arrow: 38,
    right_arrow: 39,
    down_arrow: 40,
    c_key: 67,

}

/////////////////////////////////////////////////////////////////////////////
// tile to collision map
// this is where we define which tile sprites can be walked on and which cannot
var tileCollisionMap = {}

// map generic tile sprites to collision/no collision
tileCollisionMap[textureMap.grass] = collisionMap.noCollision
tileCollisionMap[textureMap.tree] = collisionMap.collision
tileCollisionMap[textureMap.treasureChest] = collisionMap.collision
tileCollisionMap[textureMap.rock] = collisionMap.collision
tileCollisionMap[textureMap.healthDrain] = collisionMap.noCollision
tileCollisionMap[textureMap.healthSource] = collisionMap.noCollision

// map desert tile sprites to collision/no collision
tileCollisionMap[textureMap.desertFloor] = collisionMap.noCollision
tileCollisionMap[textureMap.desertPlant] = collisionMap.collision
tileCollisionMap[textureMap.desertRock] = collisionMap.collision

// map forest tile sprites to collision/no collision
tileCollisionMap[textureMap.forestFloor] = collisionMap.noCollision
tileCollisionMap[textureMap.forestTree] = collisionMap.collision
tileCollisionMap[textureMap.forestRock] = collisionMap.collision

export const tileToCollisionMap = Object.create(tileCollisionMap)

/////////////////////////////////////////////////////////////////////////////
// tile to interaction map
// this is where we define which tile sprites what interaction when walked on
var tileInteractionMap = {}

// map generic tile sprites to interaction/no interaction
tileInteractionMap[textureMap.grass] = interactionMap.noInteraction
tileInteractionMap[textureMap.tree] = interactionMap.noInteraction
tileInteractionMap[textureMap.treasureChest] = interactionMap.noInteraction
tileInteractionMap[textureMap.rock] = interactionMap.noInteraction
tileInteractionMap[textureMap.healthDrain] = interactionMap.healthDrain
tileInteractionMap[textureMap.healthSource] = interactionMap.healthSource

// map desert tile sprites to interaction/no interaction
tileInteractionMap[textureMap.desertFloor] = interactionMap.noInteraction
tileInteractionMap[textureMap.desertPlant] = interactionMap.noInteraction
tileInteractionMap[textureMap.desertRock] = interactionMap.noInteraction

// map forest tile sprites to interaction/no interaction
tileInteractionMap[textureMap.forestFloor] = interactionMap.noInteraction
tileInteractionMap[textureMap.forestTree] = interactionMap.noInteraction
tileInteractionMap[textureMap.forestRock] = interactionMap.noInteraction

export const tileToInteractionMap = Object.create(tileInteractionMap)

/////////////////////////////////////////////////////////////////////////////
// cut tree/plant to background map
// this is where we define which tile sprites become which tile sprites when cut
var cutBackgroundMap = {}

// map tree to grass when cut
cutBackgroundMap[textureMap.tree] = textureMap.grass

// map desert plant to desert floor when cut
cutBackgroundMap[textureMap.desertPlant] = textureMap.desertFloor

// map forest tree to forest floor when cut
cutBackgroundMap[textureMap.forestTree] = textureMap.forestFloor

export const cutToBackgroundMap = Object.create(cutBackgroundMap)

/////////////////////////////////////////////////////////////////////////////
// cut collision map
// this is where we define how the collision map changes when tile sprites are cut
var cutCollisionMap = {}

// can walk through tree after cut
cutCollisionMap[textureMap.tree] = collisionMap.noCollision

// can walk through desert plant after cut
cutCollisionMap[textureMap.desertPlant] = collisionMap.noCollision

// can walk through forest tree after cut
cutCollisionMap[textureMap.forestTree] = collisionMap.noCollision

export const cutToCollisionMap = Object.create(cutCollisionMap)