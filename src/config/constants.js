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
tileCollisionMap[textureMap.grass] = collisionMap.noCollision // grass maps to no collision
tileCollisionMap[textureMap.tree] = collisionMap.collision // tree maps to collision
tileCollisionMap[textureMap.treasureChest] = collisionMap.collision // treasure chest maps to collision
tileCollisionMap[textureMap.rock] = collisionMap.collision // rock maps to collision
tileCollisionMap[textureMap.healthDrain] = collisionMap.noCollision // health drain maps to no collision
tileCollisionMap[textureMap.healthSource] = collisionMap.noCollision // health source maps to no collision
tileCollisionMap[textureMap.desert] = collisionMap.noCollision // desert maps to no collision
tileCollisionMap[textureMap.desertPlant] = collisionMap.collision // desert plant maps to collision

export const tileToCollisionMap = Object.create(tileCollisionMap)

/////////////////////////////////////////////////////////////////////////////
// tile to interaction map

var tileInteractionMap = {}
tileInteractionMap[textureMap.grass] = interactionMap.noInteraction // grass maps to no interaction
tileInteractionMap[textureMap.tree] = interactionMap.noInteraction // tree maps to no interaction
tileInteractionMap[textureMap.treasureChest] = interactionMap.noInteraction // treasure chest maps to no interaction
tileInteractionMap[textureMap.rock] = interactionMap.noInteraction // rock maps to no interaction
tileInteractionMap[textureMap.healthDrain] = interactionMap.healthDrain // health drain maps to lose health
tileInteractionMap[textureMap.healthSource] = interactionMap.healthSource // health source maps to gain health
tileInteractionMap[textureMap.desert] = interactionMap.noInteraction // desert maps to no interaction
tileInteractionMap[textureMap.desertPlant] = interactionMap.noInteraction // desert plant maps to no interaction

export const tileToInteractionMap = Object.create(tileInteractionMap)

/////////////////////////////////////////////////////////////////////////////
// cut tree/plant to background map

var cutBackgroundMap = {}
cutBackgroundMap[textureMap.tree] = textureMap.grass // tree maps to grass
cutBackgroundMap[textureMap.desertPlant] = textureMap.desert // desert plant maps to desert

export const cutToBackgroundMap = Object.create(cutBackgroundMap)