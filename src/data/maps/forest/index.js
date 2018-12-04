import { createGround } from '../../../config/utils'
import { tileToCollisionMap, tileToInteractionMap } from '../../../config/constants'
import { textureMap } from '../../../config/maps'

///////////////////////////////////////////////////////////////////////////
// Forest tiles
const ground = textureMap.forestFloor
const plant = textureMap.forestTree
const rock = textureMap.forestRock

///////////////////////////////////////////////////////////////////////////
// map tile styles

const width = 20
const height = 10
const probArray = Array(10).fill(ground)
    .concat(Array(3).fill(plant))
    .concat(Array(1).fill(rock))

export const tiles = createGround(width, height, probArray)

///////////////////////////////////////////////////////////////////////////
// map tile collision detection

export const collision = tiles.map(row => {
    return row.map(tile => {
        return tileToCollisionMap[tile]
    })
})

///////////////////////////////////////////////////////////////////////////
// on tile interaction detection

export const ontile = tiles.map(row => {
    return row.map(tile => {
        return tileToInteractionMap[tile]
    })
})