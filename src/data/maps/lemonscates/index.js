import { createGround } from '../../../config/utils'
import { constants, tileToCollisionMap, tileToInteractionMap } from '../../../config/constants'
import { textureMap } from '../../../config/maps'
import { missions } from '../../missions/testmissions'

///////////////////////////////////////////////////////////////////////////
// Generic tiles
const ground = textureMap.grass
const plant = textureMap.tree
const rock = textureMap.rock

///////////////////////////////////////////////////////////////////////////
// map tile styles

const width = 100
const height = 100
const probArray = Array(29).fill(ground)
    .concat(Array(10).fill(plant))

const rockWall = Array(width + constants.window_size - 1).fill(rock)

var tilesStart = createGround(width, height, probArray).map(row => {
    for (var count = 0; count < Math.floor(constants.window_size / 2); count++) {

        row.push(rock)
        row.unshift(rock)

    }

    return row

})

tilesStart.unshift(rockWall)

for (var count = 0; count < Math.floor(constants.window_size / 2); count++) {

    tilesStart.push(rockWall)
    tilesStart.unshift(rockWall)

}

tilesStart[missions.testMissionOne.startingCoordinates[1]][missions.testMissionOne.startingCoordinates[0]] = textureMap.startTestMission
tilesStart[missions.testMissionTwo.startingCoordinates[1]][missions.testMissionTwo.startingCoordinates[0]] = textureMap.startTestMissionTwo
tilesStart[missions.testMissionTwo.endingCoordinates[1]][missions.testMissionTwo.endingCoordinates[1]] = textureMap.stopTestMissionTwo
tilesStart[11][11] = textureMap.toBeach
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