import { createGround } from '../../../config/utils'
import { constants, tileToCollisionMap, tileToInteractionMap } from '../../../config/constants'
import { textureMap } from '../../../config/maps'

///////////////////////////////////////////////////////////////////////////
// Forest tiles
const ground = textureMap.forestFloor
const plant = textureMap.forestTree
const rock = textureMap.forestRock

///////////////////////////////////////////////////////////////////////////
// map tile styles

const width = 100
const height = 100
const probArray = Array(10).fill(ground)
    .concat(Array(3).fill(plant))
    .concat(Array(1).fill(rock))

const rockWall = Array(width + Math.floor(constants.window_size / 2)).fill(rock)

var tilesStart = createGround(width, height, probArray).map(row => {
    for (var count = 0; count < Math.floor(constants.window_size / 2); count++) {

        row.push(rock)
        row.unshift(rock)

    }

    return row

})

for (var count = 0; count < Math.floor(constants.window_size / 2); count++) {

    tilesStart.push(rockWall)
    tilesStart.unshift(rockWall)

}

export const tiles = Array.from(tilesStart)

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