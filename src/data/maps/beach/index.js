import { createGround } from '../../../config/utils'
import { tileToCollisionMap, tileToInteractionMap } from '../../../config/constants'
import { textureMap } from '../../../config/maps'

///////////////////////////////////////////////////////////////////////////
// map tile styles

const width = 20
const height = 10
const probArray = Array(10).fill(textureMap.grass)
    .concat(Array(5).fill(textureMap.healthDrain))
    .concat(Array(5).fill(textureMap.healthSource))

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