class Particles {

    constructor(x, y, radius) {

this.body=Bodies.circle(x, y, radius)
this.color=color( random(0, 255), random(0, 255), random(0, 255))
World.add(world, this.body)

    }

    display() {

    push()
    translate(this.body.position.x, this.body.position.y)
    rotate(this.body.angle)
    circle(0, 0, radius)
    pop()

    }
}