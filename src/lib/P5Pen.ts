import P5 from 'p5'

export type Point = { x: number; y: number; angle: number }

export class P5Pen {
  private p: P5
  allPoints: Point[][]
  currentPoints: Point[]
  private distance: number

  constructor(p: P5, distance = 20) {
    this.p = p
    this.allPoints = []
    this.currentPoints = []
    this.distance = distance
  }

  mousePressed() {
    this.currentPoints = []
    this.allPoints.push(this.currentPoints)
  }

  mouseDragged() {
    const lastPoint = this.currentPoints[this.currentPoints.length - 1]
    const mousePoint = { x: this.p.mouseX, y: this.p.mouseY, angle: 0 }

    if (lastPoint) {
      mousePoint.angle = this.p.atan2(
        mousePoint.y - lastPoint.y,
        mousePoint.x - lastPoint.x,
      )
    }

    if (
      !lastPoint ||
      this.p.dist(lastPoint.x, lastPoint.y, mousePoint.x, mousePoint.y) >=
        this.distance
    ) {
      this.currentPoints.push(mousePoint)
    }
  }
}
