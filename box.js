class Box {
    constructor(x, y,width,height) {
      var options = {
        'density':4,
        'friction': 1.0,
        'restitution':0.5
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
  
      push();
      translate(pos.x,pos.y);
      strokeWeight(3);
      stroke('green')
      fill('yellow')
      rectMode(CENTER)
      rect(0, 0,this.width,this.height);
      pop();
    };
  };