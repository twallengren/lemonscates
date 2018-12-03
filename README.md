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
4. Open up `/src/features/map/styles.css` and add style for tile sprite (this is where you will use the image from `/public/tiles`)
5. The new tile sprites are usable at this point, so the last thing to do is to define where these tile sprites are used in maps. This will be done in `/src/data/maps`. Each map in this directory is an array of numbers defining which tile sprites to place where. Open up the desired map (ie the forest map `/src/data/maps/forest/index.js`) and the 2d array `tiles` should have entries corresponding to texture map values in `/src/config/maps.js` (ie desert floor is mapped to 200, so any entries in this 2d array whose value is 200 will generate a desert floor sprite).
