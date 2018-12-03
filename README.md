## LEMONSCATES

Lemonscates is a 2d role playing game. Clone this repo, then run

### `npm install`

and

### `npm start`

to start!

## Adding a new tile sprite

1. To add a new tile sprite in the game, first put the desired sprite image in `/public/tiles`.
2. Open up `/src/config/maps.js` and add the sprite to the texture map (you are just assigning it a number).
3. Open up `/src/config/constants.js` and add sprite to collision and interaction maps (and any other necessary maps, like the cut maps if the sprite is cutable).
