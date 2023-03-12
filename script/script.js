//Array of maze levels
//The array will contain a level object with three properties: Game Map, Player Start Coordinates and Goal Coordinates
let levels = [];

levels[0] = {
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

function Game(id, level) {
    this.el = document.getElementById(id);
    this.tileTypes = ['floor', 'wall'];
    this.tileSize = 32;
    //inheritting the level's properties
    this.map = level.map;
    this.theme = level.theme;

    this.player = { ...level.player };
    this.goal = { ...level.goal };
    this.player.el = null;
}

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

}

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
}

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

    sprite.style.borderRadius = this.tileSize + 'px';
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
            this.moveRight()
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
        return;
    }
    //Adding wall detection
    let nextTile = this.map[this.player.y - 1][this.player.x];
    if (nextTile == 1) {
        return;
    }
    this.player.y -= 1;
    this.updateVerticals();
};

//Move Player Down
Game.prototype.moveDown = function () {
    // Only move down if it is less than the index of last row in array
    if (this.player.y == this.map.length - 1) {
        return;
    }
    //Adding wall detection
    let nextTile = this.map[this.player.y + 1][this.player.x];
    if (nextTile == 1) {
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
        return;
    }
    //Adding wall detection
    let nextTile = this.map[this.player.y][this.player.x - 1];
    if (nextTile == 1) {
        return;
    }
    this.player.x -= 1;
    this.updateHorizontals(sprite);
};

//Move Player Right
Game.prototype.moveRight = function (sprite) {
    //Only move right if less than the index in last row in the array
    if (this.player.x == this.map[this.player.y].length - 1) {
        return;
    }
    // Adding wall detection
    let nextTile = this.map[this.player.y][this.player.x + 1];
    if (nextTile == 1) {
        return;
    }
    this.player.x += 1;
    this.updateHorizontals(sprite);
}

//Update Horizontal Positoin 
Game.prototype.updateHorizontals = function (sprite) {
    this.player.el.style.left = this.player.x * this.tileSize + 'px'
}


//Move the player
Game.prototype.keyboardListener = function (event) {
    document.addEventListener('keydown', event => {
        this.movePlayer(event);
    }
    )
};


//Test the map
function init() {
    let myGame = new Game('mazeGameContainer', levels[0]);
    myGame.populateMap();
    myGame.sizeUp();
    // Storing the element in the playerSprite variable
    let playerSprite = myGame.placeSprite('player');
    myGame.player.el = playerSprite;
    myGame.placeSprite('goal');
    myGame.keyboardListener();
}
init();