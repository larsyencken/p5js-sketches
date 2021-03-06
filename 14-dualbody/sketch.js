var moonImg;
var system;

function preload() {
  moonImg = loadImage('moon.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  system = new System();
  setupMoons(system);
  setupShip(system);
}

function setupMoons(system) {
	var moon1 = new Moon(new p5.Vector(width / 2 - 100, height / 2));
 	moon1.velocity = new p5.Vector(0, -2);
	system.addBody(moon1);

	var moon2 = new Moon(new p5.Vector(width / 2 + 100, height / 2));
	moon2.velocity = new p5.Vector(0, 2);
	system.addBody(moon2);
}

function setupShip(system) {
	var ship = new Ship(
		new p5.Vector(width / 2, height / 2)
	);
	system.addBody(ship);
}

function draw() {
  background(0);
  system.run();
  maybeRespawnShip();
}

function maybeRespawnShip() {
  if (! system.bodies.some(function(x) { return x instanceof Ship; })) {
    setupShip(system);
  }
}
