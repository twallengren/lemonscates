import { createGround } from '../../../config/utils'
import { tileToCollisionMap, tileToInteractionMap } from '../../../config/constants'

///////////////////////////////////////////////////////////////////////////
// map tile styles
// grass: 0
// tree: 1
// treasure-chest: 2
// rock: 3
// health drain: 4
// health source: 5
// desert: 6
// desert plant: 7

const width = 20
const height = 10
const probArray = [0, 0, 0, 0, 0, 0, 0, 0, 1, 3]

export const tiles = createGround(width, height, probArray)

///////////////////////////////////////////////////////////////////////////
// map tile collision detection
// walkable: 0
// unwalkable: 1

export const collision = tiles.map(row => {
    return row.map(tile => {
        return tileToCollisionMap[tile]
    })
})

///////////////////////////////////////////////////////////////////////////
// on tile interaction detection
// none: 0
// gain health: 1
// lose health: 2

export const ontile = tiles.map(row => {
    return row.map(tile => {
        return tileToInteractionMap[tile]
    })
})