class Ground{
constructor(){
var options = {
isStatic:true
}
this.ground=Bodies.rectangle(450,390,900,20,options);
World.add(world,this.ground);
}
display(){
strokeweight(2);
fill("black");
rectMode(CENTER);
rect(this.ground.position,this.ground.position.y,200,20);
}
}