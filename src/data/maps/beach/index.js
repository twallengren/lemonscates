import { createGround } from '../../../config/utils'
import { constants, tileToCollisionMap, tileToInteractionMap } from '../../../config/constants'
import { textureMap } from '../../../config/maps'

///////////////////////////////////////////////////////////////////////////
// Beach tiles
const ground = textureMap.grass
const drain = textureMap.healthDrain
const source = textureMap.healthSource
const rock = textureMap.rock

///////////////////////////////////////////////////////////////////////////
// map tile styles

const width = 100
const height = 100
const probArray = Array(10).fill(ground)
    .concat(Array(1).fill(drain))
    .concat(Array(1).fill(source))
    .concat(Array(1).fill(rock))

const rockWall = Array(width + constants.window_size - 1).fill(rock)

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

tilesStart[11][11] = textureMap.toLemonscates
tilesStart[12][12] = textureMap.toDesert
tilesStart[13][13] = textureMap.toForest
tilesStart[14][14] = textureMap.toWinter

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