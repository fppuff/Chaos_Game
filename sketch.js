// Chaos Game https://en.wikipedia.org/wiki/Chaos_game

let seeds;
let previous; //*** random but avoiding the previous number
let current;
let percent = 0.5;

function setup() {
  createCanvas(windowWidth,windowHeight);
  reset();
 
}
function reset(){
  background(0);
  seeds = [];
  const seedNumber = 4; //***** change seed number
  for (let i = 0; i < seedNumber; i++){
    // *****get random vector from a circle
    let angle = i * TWO_PI / seedNumber;
    let v = p5.Vector.fromAngle(angle);
    v.mult(width/2); // radium
    v.add(width/2, height/2);
    

 
    // let v = createVector(random(width), random(height));//***** get random vector;
    seeds.push(v);
  }
  current = createVector(random(width), random(height));

  stroke(0,255,255, 200);
  strokeWeight(2);
  for (let p of seeds) {
    point(p.x, p.y);
  }
}

function draw() {
  
  if(frameCount % 500 == 0){
    reset();
  } 
 for (i = 0; i < 100; i++){ //****point cloud speed
   stroke(255,255,0,100);
   strokeWeight(1);
   let next = random(seeds);
   if (next !== previous) {
   current.x = lerp(current.x, next.x, percent);
   current.y = lerp(current.y, next.y, percent);
   point(current.x, current.y);
   }
   previous = next; 
   
   
 } 
}




