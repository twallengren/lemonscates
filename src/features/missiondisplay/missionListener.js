/*

Usage
missionListener(MissionDisplay)

Function to update mission status
Wraps MissionDisplay in an event listener and updates redux state

*/

import { constants } from '../../config/constants'

export default function missionListener(MissionDisplay) {

    function handleKeyDown(e) {

        e.preventDefault()

        switch (e.keyCode) {

            default:
                return
        }
    }

    window.addEventListener(constants.keydown, (e) => {
        handleKeyDown(e)
    })

    return MissionDisplay
}