class Dustbin{
  constructor(x,y,width,height){
   var options={
    isStatic:true,
    friction:0.1,
    density:2,
}

this.body = Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);
  }
    display(){

   var position=this.body.position
   fill(0, 255, 127);
   rect(this.body.position.x,this.body.position.y,this.width,this.height);
}



}