//Array of maze levels
//The array will contain a level object with three properties: Game Map, Player Start Coordinates and Goal Coordinates
let levels = [];

levels[0] = {
//0 = floor  1 = wall
    map:[
        [1,1,1,0,1,1,1,1,1,1,1,1],
        [1,0,1,0,0,1,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,1,0,1,0,1],
        [1,0,0,1,0,1,0,1,0,1,1,1],
        [1,0,0,0,0,0,0,1,0,0,0,1],
        [1,0,1,1,1,0,0,0,0,1,1,1],
        [1,1,1,0,1,1,1,1,0,1,0,1],
        [1,0,0,0,1,1,0,0,0,1,0,1],
        [1,1,1,0,0,0,0,1,0,0,0,1],
        [1,0,1,0,1,1,1,1,0,1,1,1],
        [1,0,0,0,0,1,0,0,0,0,0,1],
        [1,1,1,1,0,1,1,1,1,1,1,1]
    ],
    // x and y values will be the players starting position
    player:{
        x:4,
        y:11
    },
    // x and y values will be the goal positon
    goal:{
        x:3,
        y:0
    },
    theme:'default'
};