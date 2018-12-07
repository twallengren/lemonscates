// import maps for code readability
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
    CHANGE_HEALTH: 'CHANGE_HEALTH',
    TO_GROUND: 'TO_GROUND',
    ADD_TILES: 'ADD_TILES',
    CUT_TREE: 'CUT_TREE',
    CHANGE_WEIGHT: 'CHANGE_WEIGHT',
    CHANGE_MISSION: 'CHANGE_MISSION',
    ADD_WOOD: 'ADD_WOOD',
    keydown: 'keydown',
    left_arrow: 37,
    up_arrow: 38,
    right_arrow: 39,
    down_arrow: 40,
    c_key: 67,
    s_key: 83,
    t_key: 84,
    step_scale: 0.5,
    window_size: 11,

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
tileCollisionMap[textureMap.genericBrush] = collisionMap.noCollision
tileCollisionMap[textureMap.startTestMission] = collisionMap.noCollision

// map desert tile sprites to collision/no collision
tileCollisionMap[textureMap.desertFloor] = collisionMap.noCollision
tileCollisionMap[textureMap.desertPlant] = collisionMap.collision
tileCollisionMap[textureMap.desertRock] = collisionMap.collision
tileCollisionMap[textureMap.desertBrush] = collisionMap.noCollision

// map forest tile sprites to collision/no collision
tileCollisionMap[textureMap.forestFloor] = collisionMap.noCollision
tileCollisionMap[textureMap.forestTree] = collisionMap.collision
tileCollisionMap[textureMap.forestRock] = collisionMap.collision
tileCollisionMap[textureMap.forestBrush] = collisionMap.noCollision

// map snow tile sprites to collision/no collision
tileCollisionMap[textureMap.snowFloor] = collisionMap.noCollision
tileCollisionMap[textureMap.snowTree] = collisionMap.collision
tileCollisionMap[textureMap.snowRock] = collisionMap.collision
tileCollisionMap[textureMap.snowBrush] = collisionMap.noCollision

// map transportation tile sprites to collision/no collision
tileCollisionMap[textureMap.toLemonscates] = collisionMap.noCollision
tileCollisionMap[textureMap.toBeach] = collisionMap.noCollision
tileCollisionMap[textureMap.toDesert] = collisionMap.noCollision
tileCollisionMap[textureMap.toForest] = collisionMap.noCollision
tileCollisionMap[textureMap.toWinter] = collisionMap.noCollision

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
tileInteractionMap[textureMap.genericBrush] = interactionMap.addChoppedWood
tileInteractionMap[textureMap.startTestMission] = interactionMap.startTestMission

// map desert tile sprites to interaction/no interaction
tileInteractionMap[textureMap.desertFloor] = interactionMap.noInteraction
tileInteractionMap[textureMap.desertPlant] = interactionMap.noInteraction
tileInteractionMap[textureMap.desertRock] = interactionMap.noInteraction
tileInteractionMap[textureMap.desertBrush] = interactionMap.addChoppedWood

// map forest tile sprites to interaction/no interaction
tileInteractionMap[textureMap.forestFloor] = interactionMap.noInteraction
tileInteractionMap[textureMap.forestTree] = interactionMap.noInteraction
tileInteractionMap[textureMap.forestRock] = interactionMap.noInteraction
tileInteractionMap[textureMap.forestBrush] = interactionMap.addChoppedWood

// map snow tile sprites to interaction/no interaction
tileInteractionMap[textureMap.snowFloor] = interactionMap.noInteraction
tileInteractionMap[textureMap.snowTree] = interactionMap.noInteraction
tileInteractionMap[textureMap.snowRock] = interactionMap.noInteraction
tileInteractionMap[textureMap.snowBrush] = interactionMap.addChoppedWood

// map transportation tile sprites to interaction
tileInteractionMap[textureMap.toLemonscates] = interactionMap.toLemonscates
tileInteractionMap[textureMap.toBeach] = interactionMap.toBeach
tileInteractionMap[textureMap.toDesert] = interactionMap.toDesert
tileInteractionMap[textureMap.toForest] = interactionMap.toForest
tileInteractionMap[textureMap.toWinter] = interactionMap.toWinter


export const tileToInteractionMap = Object.create(tileInteractionMap)

/////////////////////////////////////////////////////////////////////////////
// cut tree/plant to background map
// this is where we define which tile sprites become which tile sprites when cut
// ie the first entry says a tree should become genericBrush when cut
var cutBackgroundMap = {}

// map generic tile sprites
cutBackgroundMap[textureMap.tree] = textureMap.genericBrush
cutBackgroundMap[textureMap.genericBrush] = textureMap.grass

// map desert tile sprites
cutBackgroundMap[textureMap.desertPlant] = textureMap.desertBrush
cutBackgroundMap[textureMap.desertBrush] = textureMap.desertFloor

// map forest tile sprites
cutBackgroundMap[textureMap.forestTree] = textureMap.forestBrush
cutBackgroundMap[textureMap.forestBrush] = textureMap.forestFloor

// map snow tile sprites
cutBackgroundMap[textureMap.snowTree] = textureMap.snowBrush
cutBackgroundMap[textureMap.snowBrush] = textureMap.snowFloor

export const cutToBackgroundMap = Object.create(cutBackgroundMap)

/////////////////////////////////////////////////////////////////////////////
// cut collision map
// this is where we define how the collision map changes when tile sprites are cut
var cutCollisionMap = {}

// map generic tile sprites
cutCollisionMap[textureMap.tree] = collisionMap.noCollision
cutCollisionMap[textureMap.genericBrush] = collisionMap.noCollision

// map desert tile sprites
cutCollisionMap[textureMap.desertPlant] = collisionMap.noCollision
cutCollisionMap[textureMap.desertBrush] = collisionMap.noCollision

// map forest tile sprites
cutCollisionMap[textureMap.forestTree] = collisionMap.noCollision
cutCollisionMap[textureMap.forestBrush] = collisionMap.noCollision

// map snow tile sprites
cutCollisionMap[textureMap.snowTree] = collisionMap.noCollision
cutCollisionMap[textureMap.snowBrush] = collisionMap.noCollision

export const cutToCollisionMap = Object.create(cutCollisionMap)

/////////////////////////////////////////////////////////////////////////////
// cut interaction map
// this is where we define how the interaction map changes when tile sprites are cut
var cutInteractionMap = {}

// map generic tile sprites
cutInteractionMap[textureMap.tree] = interactionMap.addChoppedWood
cutInteractionMap[textureMap.genericBrush] = interactionMap.noInteraction

// map desert tile sprites
cutInteractionMap[textureMap.desertPlant] = interactionMap.addChoppedWood
cutInteractionMap[textureMap.desertBrush] = interactionMap.noInteraction

// map forest tile sprites
cutInteractionMap[textureMap.forestTree] = interactionMap.addChoppedWood
cutInteractionMap[textureMap.forestBrush] = interactionMap.noInteraction

// map snow tile sprites
cutInteractionMap[textureMap.snowTree] = interactionMap.addChoppedWood
cutInteractionMap[textureMap.snowBrush] = interactionMap.noInteraction

export const cutToInteractionMap = Object.create(cutInteractionMap)

/////////////////////////////////////////////////////////////////////////////
// walk to texture map (after interaction)
// this is where we define how the texture map changes when interactive tile sprites are walked on
var walkInteractionTextureMap = {}

// map generic tile sprites
walkInteractionTextureMap[textureMap.healthDrain] = textureMap.grass
walkInteractionTextureMap[textureMap.healthSource] = textureMap.grass
walkInteractionTextureMap[textureMap.genericBrush] = textureMap.grass
walkInteractionTextureMap[textureMap.startTestMission] = textureMap.grass

// map desert tile sprites
walkInteractionTextureMap[textureMap.desertBrush] = textureMap.desertFloor

// map forest tile sprites
walkInteractionTextureMap[textureMap.forestBrush] = textureMap.forestFloor

// map snow tile sprites
walkInteractionTextureMap[textureMap.snowBrush] = textureMap.snowFloor

export const walkToInteractionTextureMap = Object.create(walkInteractionTextureMap)