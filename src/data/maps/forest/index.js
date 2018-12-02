import { createGround } from '../../../config/utils'

///////////////////////////////////////////////////////////////////////////
// map tile styles
// grass: 0
// tree: 1
// treasure-chest: 2
// rock: 3

const width = 20
const height = 10
const probArray = [0, 0, 0, 0, 0, 1, 1, 1, 1, 3]

export const tiles = createGround(width, height, probArray)

///////////////////////////////////////////////////////////////////////////
// map tile collision detection
// walkable: 0
// unwalkable: 1

export const collision = tiles.map(row => {
    return row.map(tile => {
        switch (tile) {

            case 0: // if tile is grass
                return 0 // no collision

            case 1: // if tile is tree
                return 1 // collision

            case 2: // if tile is treasure chest
                return 1 // collision

            case 3: // if tile is rock
                return 1 // collision

            default: // no collision by default
                return 0

        }
    })
})

///////////////////////////////////////////////////////////////////////////
// on tile interaction detection
// none: 0
// gain health: 1
// lose health: 2

export const ontile = tiles.map(row => {
    return row.map(tile => {
        switch (tile) {

            case 0: // if tile is grass
                return 0 // no interaction

            case 1: // if tile is tree
                return 0 // interaction

            case 2: // if tile is treasure chest
                return 0 // interaction

            case 3: // if tile is rock
                return 0 // interaction

            default: // no interaction by default
                return 0

        }
    })
})