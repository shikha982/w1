 class Ghost{
    constructor(x, y,r) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0
        }
       // this.visibility = 255;
       this.x=x;
       this.y=y;
       this.r=r;
       this.image = loadImage("Catapult.png"); 
       this.body = Bodies.circle(this.x,this.y,this.r,options);
       World.add(world, this.body);
      }
      display(){
      //  if(this.body.speed < 2){
        //  console.log(this.body.speed);
            var pos = this.body.position
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            ellipseMode(CENTER);
            image(this.image, 0, 0, this.r*2, this.r*2);
            pop();

      //  }
//         // else{
//         //     World.remove(world,this.body);
//         //     // push()
//         //     // tint(255,this.visibility)
//         //     // this.visibility = this.visibility-5;
//         //     // pop()
//         // }

     }
}