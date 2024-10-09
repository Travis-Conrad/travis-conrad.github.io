$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
createPlatform (100,600,100,100)
createPlatform (100,700,200,50)
createPlatform (0,100,400,100)
createPlatform (400,200,100,100)
createPlatform (500,200,300,100)
createPlatform (800, 200, 100, 100)
createPlatform (900, 000, 100, 100)
createPlatform (700,100,100,100)
createPlatform (900,300,300,100)
createPlatform (1200,200,100,100)
createPlatform (900, 000, 500, 100)
createPlatform (1300,400,100,300)
createPlatform (1100,400,100,200)
createPlatform (1100,700,300,100)
createPlatform (800,650,100,150)
createPlatform (600,550,100,200)
createPlatform (400,450,100,300)
createPlatform (0,100,100,700)

    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable('database', 830, 100, .2, 1)
    createCollectable('database', 1230, 100, .2, 1)
    createCollectable('database', 730, 650, .2, 1)
    createCollectable('database', 130, 500, .2, 1)

    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon('right', 100, 1500, 100, 100)
    createCannon('right', 220, 3600, 100, 100)
    createCannon('bottom',1200,5000,100,100)


    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
