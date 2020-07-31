class player{
    constructor(x,y,width,height){
        
        var options = {
            friction : 0.1,
            density : 0.1,
            restitution : 0.1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("images/soldier3.png");
        
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
   
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}