class Divisions {

constructor(x, y, width, height) {

this.body=Bodies.rectangle(x, y, width, height)
World.add(world, this.body)

this.width = width
this.height = height
}

display() {

    push()

    fill("white")
    rectMode(CENTER)
    translate(this.body.position.x, this.body.position.y)
rotate(this.body.angle)
rect(0, 0, this.width, this.height)

    pop()
    }
}