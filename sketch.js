
          var pathImage;
          var powerImage;
          var RunnerImage;
          var bombImage;
          var coinImage;
          var energyDrinkImage;

          function preload(){
            //pre-load images
            path.image = loadImage("path.png");
            power.image = loadImage("power.png");
            Runner.image = loadImage("runner.png");
            bomb.image = loadImage("bomb.png");
            coin.image = loadImage("coin.png");
            energyDrink.image = loadImage("energyDrink.png");

          }

          function setup(){
            createCanvas(400,400);
            //create sprites here
          createSprite = path();
          createSprite = power();
          createSprite = Runner();
          createSprite = bomb();
          createSprite = coin();
          createSprite = energyDrink();
          
          }

          function draw() {
            background(0);

          }
