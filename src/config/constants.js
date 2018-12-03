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

var tileCollisionMap = {}
tileCollisionMap[textureMap.grass] = collisionMap.noCollision
tileCollisionMap[textureMap.tree] = collisionMap.collision
tileCollisionMap[textureMap.treasureChest] = collisionMap.collision
tileCollisionMap[textureMap.rock] = collisionMap.collision
tileCollisionMap[textureMap.healthDrain] = collisionMap.noCollision
tileCollisionMap[textureMap.healthSource] = collisionMap.noCollision
tileCollisionMap[textureMap.desert] = collisionMap.noCollision
tileCollisionMap[textureMap.desertPlant] = collisionMap.collision

export const tileToCollisionMap = Object.create(tileCollisionMap)

/////////////////////////////////////////////////////////////////////////////
// tile to interaction map

var tileInteractionMap = {}
tileInteractionMap[textureMap.grass] = interactionMap.noInteraction
tileInteractionMap[textureMap.tree] = interactionMap.noInteraction
tileInteractionMap[textureMap.treasureChest] = interactionMap.noInteraction
tileInteractionMap[textureMap.rock] = interactionMap.noInteraction
tileInteractionMap[textureMap.healthDrain] = interactionMap.healthDrain
tileInteractionMap[textureMap.healthSource] = interactionMap.healthSource
tileInteractionMap[textureMap.desert] = interactionMap.noInteraction
tileInteractionMap[textureMap.desertPlant] = interactionMap.noInteraction

export const tileToInteractionMap = Object.create(tileInteractionMap)

/////////////////////////////////////////////////////////////////////////////
// cut tree/plant to background map

var cutBackgroundMap = {}
cutBackgroundMap[textureMap.tree] = textureMap.grass
cutBackgroundMap[textureMap.desertPlant] = textureMap.desert

export const cutToBackgroundMap = Object.create(cutBackgroundMap)

/////////////////////////////////////////////////////////////////////////////
// cut collision map

var cutCollisionMap = {}
cutCollisionMap[textureMap.tree] = collisionMap.noCollision
cutCollisionMap[textureMap.desertPlant] = collisionMap.noCollision

export const cutToCollisionMap = Object.create(cutCollisionMap)