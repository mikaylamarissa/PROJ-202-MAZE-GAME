//Array of maze levels
//The array will contain a level object with three properties: Game Map, Player Start Coordinates and Goal Coordinates
let levels = [];

//Level 1
levels[0] = {
    name: 1,
    //0 = floor  1 = wall
    map: [
        [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1],
        [1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1]
    ],
    // x and y values will be the players starting position
    player: {
        x: 4,
        y: 11
    },
    // x and y values will be the goal positon
    goal: {
        x: 3,
        y: 0
    },
    theme: 'default'
};

//Level 2
levels[1] = {
    name: 2,
    //0 = floor  1 = wall
    map: [
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1],
        [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1]
    ],
    //     // x and y values will be the players starting position
    player: {
        x: 6,
        y: 11
    },
    //     // x and y values will be the goal positon
    goal: {
        x: 1,
        y: 0
    },
    theme: 'default'
};
//Level 3
levels[2] = {
    name: 3,
    //0 = floor  1 = wall
    map: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
        [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1],
        [1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]
    ],
    // x and y values will be the players starting position
    player: {
        x: 10,
        y: 11
    },
    // x and y values will be the goal positon
    goal: {
        x: 10,
        y: 0
    },
    theme: 'default'
};
//Level 4
levels[3] = {
    name: 4,
    //0 = floor  1 = wall
    map: [
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1]
    ],
    // x and y values will be the players starting position
    player: {
        x: 9,
        y: 13
    },
    // x and y values will be the goal positon
    goal: {
        x: 8,
        y: 0
    },
    theme: 'default'
};
//Level 5
levels[4] = {
    name: 5,
    //0 = floor  1 = wall
    map: [
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    // x and y values will be the players starting position
    player: {
        x: 1,
        y: 13
    },
    // x and y values will be the goal positon
    goal: {
        x: 1,
        y: 0
    },
    theme: 'default'
};
//Level 6
levels[5] = {
    name: 6,
    //0 = floor  1 = wall
    map: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
        [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1]

    ],
    // x and y values will be the players starting position
    player: {
        x: 6,
        y: 13
    },
    // x and y values will be the goal positon
    goal: {
        x: 13,
        y: 3
    },
    theme: 'default'
};
//Level 7
levels[6] = {
    name: 7,
    //0 = floor  1 = wall
    map: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        [1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
        [1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1]

    ],
    // x and y values will be the players starting position
    player: {
        x: 6,
        y: 13
    },
    // x and y values will be the goal positon
    goal: {
        x: 10,
        y: 0
    },
    theme: 'default'
};
//Level 8
levels[7] = {
    name: 8,
    //0 = floor  1 = wall
    map: [
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1]
    ],
    // x and y values will be the players starting position
    player: {
        x: 10,
        y: 13
    },
    // x and y values will be the goal positon
    goal: {
        x: 4,
        y: 0
    },
    theme: 'default'
};
//Level 9
levels[8] = {
    name: 9,
    //0 = floor  1 = wall
    map: [
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1]
    ],
    // x and y values will be the players starting position
    player: {
        x: 7,
        y: 13
    },
    // x and y values will be the goal positon
    goal: {
        x: 6,
        y: 0
    },
    theme: 'default'
};
//Level 10
levels[9] = {
    name: 10,
    //0 = floor  1 = wall
    map: [
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]
    ],
    // x and y values will be the players starting position
    player: {
        x: 12,
        y: 13
    },
    // x and y values will be the goal positon
    goal: {
        x: 6,
        y: 0
    },
    theme: 'default'
};

function Game(id, levelNum) {
    this.el = document.getElementById(id);
    this.currentLevelNum = levelNum;
    this.tileTypes = ['floor', 'wall'];
    this.tileSize = 32;
    //inheritting the level's properties
    const level = levels[levelNum];
    this.map = level.map;
    this.theme = level.theme;
    this.player = { ...level.player };
    this.goal = { ...level.goal };
    this.number = level.name;
    this.player.el = null;
};


Game.prototype.populateMap = function () {
    //Adding the theme class to the maze game container
    this.el.className = 'mazeGame ' + this.theme;

    //creating the tiles layer by using the DOM
    let tiles = document.getElementById('tiles');

    for (var y = 0; y < this.map.length; ++y) {
        for (var x = 0; x < this.map[y].length; ++x) {
            let tileCode = this.map[y][x];
            let tileType = this.tileTypes[tileCode];
            let tile = this.createEl(x, y, tileType);
            //add to the tile layer
            tiles.appendChild(tile);
        }
    }
};

//Creating Tile and Sprite
Game.prototype.createEl = function (x, y, type) {
    // Makes the div element and sets the class
    let el = document.createElement('div');
    el.className = type;
    // Sets the size and locations
    el.style.width = el.style.height = this.tileSize + 'px';
    el.style.left = x * this.tileSize + 'px';
    el.style.top = y * this.tileSize + 'px';

    return el;
};

Game.prototype.sizeUp = function () {
    let map = this.el.querySelector('.mazeLevel');
    map.style.height = this.map.length * this.tileSize + 'px';
    map.style.width = this.map[0].length * this.tileSize + 'px';
};

// Add Player Goal and Sprites
Game.prototype.placeSprite = function (type) {
    let x = this[type].x
    let y = this[type].y
    let sprite = this.createEl(x, y, type);
    sprite.id = type;

    let layer = this.el.querySelector('#sprites');
    layer.appendChild(sprite);

    return sprite;
};

Game.prototype.movePlayer = function (event) {
    event.preventDefault();
    //Key codes for the arrow buttons are: left(37), up(38), right(39), down(40)
    if (event.keyCode < 37 || event.keycode > 40) {
        return;
    }

    switch (event.keyCode) {
        //moves player to the left
        case 37:
            this.moveLeft();
            break;

        //moves player up
        case 38:
            this.moveUp();
            break;

        //moves player to the right
        case 39:
            this.moveRight();
            break;

        //moves player down
        case 40:
            this.moveDown();
            break;
    }
};

//Move Player Up
Game.prototype.moveUp = function () {
    // Only move up if greater than zero
    if (this.player.y == 0) {
        this.collide();
        return;
    }
    //Adding wall detection
    let nextTile = this.map[this.player.y - 1][this.player.x];
    if (nextTile == 1) {
        this.collide();
        return;
    }
    this.player.y -= 1;
    this.updateVerticals();
};

//Move Player Down
Game.prototype.moveDown = function () {
    // Only move down if it is less than the index of last row in array
    if (this.player.y == this.map.length - 1) {
        this.collide();
        return;
    }
    //Adding wall detection
    let nextTile = this.map[this.player.y + 1][this.player.x];
    if (nextTile == 1) {
        this.collide();
        return;
    }
    this.player.y += 1;
    this.updateVerticals();
};

//Update Vertical Position
Game.prototype.updateVerticals = function () {
    this.player.el.style.top = this.player.y * this.tileSize + 'px'
};

//Move Player Left
Game.prototype.moveLeft = function (sprite) {
    //Only move left if greater than zero
    if (this.player.x == 0) {
        this.collide();
        return;
    }
    //Adding wall detection
    let nextTile = this.map[this.player.y][this.player.x - 1];
    if (nextTile == 1) {
        this.collide();
        return;
    };
    this.player.x -= 1;
    this.updateHorizontals(sprite);
    document.getElementById("player").style.transform = "scaleX(-1)";
};

//Move Player Right
Game.prototype.moveRight = function (sprite) {
    //Only move right if less than the index in last row in the array
    if (this.player.x == this.map[this.player.y].length - 1) {
        this.collide();
        return;
    };
    // Adding wall detection
    let nextTile = this.map[this.player.y][this.player.x + 1];
    if (nextTile == 1) {
        this.collide();
        return;
    };
    this.player.x += 1;
    this.updateHorizontals(sprite);
    document.getElementById("player").style.transform = "scaleX(1)";
};

//Update Horizontal Positoin 
Game.prototype.updateHorizontals = function (sprite) {
    this.player.el.style.left = this.player.x * this.tileSize + 'px'
};

Game.prototype.keyboardListener = function (event) {
    document.addEventListener('keydown', event => {
        this.movePlayer(event);
        //Checks to see if they reached goal
        this.checkGoal();
    }
    );
};

//Goal detection
Game.prototype.checkGoal = function () {
    let body = document.querySelector('body');
    if (this.player.y == this.goal.y && this.player.x == this.goal.x) {
        alert("Level Complete!!");
        this.changeLevel(1);
        // Clear tile and sprite layers
        let layers = this.el.querySelectorAll('.layer');
        for (layer of layers) {
            layer.innerHTML = '';
        };
        this.placeLevel();
    }
    else {
        body.className = '';
    }
};

// Change levels
Game.prototype.changeLevel = function (num) {
    // this.second=0;
    // this.minute=0;
    // this.hour=0;
    this.startTimer();
    this.currentLevelNum += num;
    this.level;
    if (this.currentLevelNum > levels.length - 1) {
        body.className='sucess'
    };
    let level = levels[this.currentLevelNum];
    document.getElementById("levelArea").innerHTML = this.currentLevelNum + 1;
    this.map = level.map;
    this.theme = level.theme;
    this.player = { ...level.player };
    this.goal = { ...level.goal };
};

Game.prototype.writeLevel = function () {
    document.getElementById("levelArea").innerHTML = this.currentLevelNum + 1;
};

//Collision
Game.prototype.collide = function () {
    this.player.el.className += ' collide';
    let delay = 200;
    let obj = this;
    window.setTimeout(function () {
        obj.player.el.className = 'player';
    }, delay);
};

//Button Listeners
Game.prototype.buttonListeners = function (info_msg, goal_msg) {
    let up = document.getElementById('up');
    let down = document.getElementById('down');
    let left = document.getElementById('left');
    let right = document.getElementById('right');

    let obj = this;

    //Add event listener for each button
    up.addEventListener('mousedown', function () {
        obj.moveUp();
        obj.checkGoal(info_msg, goal_msg);
    });

    down.addEventListener('mousedown', function () {
        obj.moveDown();
        obj.checkGoal(info_msg, goal_msg);
    });

    left.addEventListener('mousedown', function () {
        obj.moveLeft();
        obj.checkGoal(info_msg, goal_msg);
    });

    right.addEventListener('mousedown', function () {
        obj.moveRight();
        obj.checkGoal(info_msg, goal_msg);
    });
};

//Reorganized everything that was in the init function
Game.prototype.addListeners = function () {
    this.keyboardListener();
    // this.addMazeListener();
    this.buttonListeners();
};

Game.prototype.placeLevel = function () {
    this.populateMap();
    this.sizeUp();
    this.placeSprite('goal');
    let playerSprite = this.placeSprite('player');
    this.player.el = playerSprite;
};

Game.prototype.timerInterval = null;

//Timer that counts down
Game.prototype.startTimer = function () {
    const timer = document.getElementById("timer");
    // Then we clear the variables
    let second = 0;
    let minute = 0;
    let hour = 0;
    if (this.timerInterval !== null) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
    }
    const reset = () => {
        this.changeLevel(0);
        // Clear tile and sprite layers
        let layers = this.el.querySelectorAll('.layer');
        for (layer of layers) {
            layer.innerHTML = '';
        };
        this.placeLevel();
        this.checkGoal();
    };
    // Next we set a interval every 1000 ms
    this.timerInterval = setInterval(function () {
        console.log("tick" + second)
        // Toggle the odd class every interval
        timer.classList.toggle('odd');
        // We set the timer text to include a two digit representation
        timer.innerHTML =
            (hour ? hour + ":" : "") +
            (minute < 10 ? "0" + minute : minute) +
            ":" +
            (second < 10 ? "0" + second : second);

        // Next we add a new second since one second is passed
        second++;
        if (second >= 32) {
            reset();
            alert("Sorry, you took to long. Try Again.");
        }
    }, 1000);
};



function init() {
    let myGame = new Game('mazeGameContainer', 0);
    myGame.placeLevel();
    myGame.addListeners();
    myGame.startTimer();
    myGame.writeLevel();
};
init();
