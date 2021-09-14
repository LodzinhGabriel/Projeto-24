class Stone{
	constructor(x,y)
	{
		var options = {
			isStatic: false,
			'restitution':0.8,
			'friction':0.9,
			'density':12
		}
		this.x=x;
		this.y=y;
		this.w=60;
		this.h=60;
		this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, options);
		World.add(world, this.body);

	}
	display(){
		var rubberpos=this.body.position;
		var angle = this.body.angle;	
		push()
		translate(rubberpos.x, rubberpos.y);
		rotate(angle);
		rectMode(CENTER)
		strokeWeight(4);
		stroke("black");
		fill("red");
		rect(0, 0, this.w, this.h);
		pop();
	}

}