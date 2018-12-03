const SPRITE_SIZE = 40

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

var tileCollisionMap = {}
tileCollisionMap[0] = 0 // grass maps to no collision
tileCollisionMap[1] = 1 // tree maps to collision
tileCollisionMap[2] = 1 // treasure chest maps to collision
tileCollisionMap[3] = 1 // rock maps to collision
tileCollisionMap[4] = 0 // health drain maps to no collision
tileCollisionMap[5] = 0 // health source maps to no collision

export const tileToCollisionMap = Object.create(tileCollisionMap)

var tileInteractionMap = {}
tileInteractionMap[0] = 0 // grass maps to no interaction
tileInteractionMap[1] = 0 // tree maps to no interaction
tileInteractionMap[2] = 0 // treasure chest maps to no interaction
tileInteractionMap[3] = 0 // rock maps to no interaction
tileInteractionMap[4] = 2 // health drain maps to lose health
tileInteractionMap[5] = 1 // health source maps to gain health

export const tileToInteractionMap = Object.create(tileInteractionMap)