import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
    selector: 'app-page-not-found',
    imports: [],
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {
    cordCanvas: HTMLCanvasElement
    visorCanvas: HTMLCanvasElement
    //ctx: CanvasRenderingContext2D
    //ctxVisor: CanvasRenderingContext2D
    private ctx!: CanvasRenderingContext2D

    @ViewChild('cord', { static: true })
    cordCanvasRef!: ElementRef<HTMLCanvasElement>

    @ViewChild('visor', { static: true })
    visorCanvasRef!: ElementRef<HTMLCanvasElement>

    constructor() {
        this.cordCanvas = document.getElementById('cord') as HTMLCanvasElement
        this.visorCanvas = document.getElementById('visor') as HTMLCanvasElement
    }

    ngOnInit() {
        this.cordCanvas = this.cordCanvasRef.nativeElement
        this.visorCanvas = this.visorCanvasRef.nativeElement
        this.ctx = this.cordCanvasRef.nativeElement.getContext('2d')!

        this.drawVisor()
        this.animate()
    }

    drawVisor() {
        let ctx = this.ctx
        ctx.beginPath()
        ctx.moveTo(5, 45)
        ctx.bezierCurveTo(15, 64, 45, 64, 55, 45)

        ctx.lineTo(55, 20)
        ctx.bezierCurveTo(55, 15, 50, 10, 45, 10)

        ctx.lineTo(15, 10)

        ctx.bezierCurveTo(15, 10, 5, 10, 5, 20)
        ctx.lineTo(5, 45)

        ctx.fillStyle = '#2f3640'
        ctx.strokeStyle = '#f5f6fa'
        ctx.fill()
        ctx.stroke()
    }

    animate() {
        let y1 = 160
        let y2 = 100
        let y3 = 100

        let y1Forward = true
        let y2Forward = false
        let y3Forward = true
        requestAnimationFrame(this.animate)
        let ctx = this.ctx
        ctx.clearRect(0, 0, innerWidth, innerHeight)

        ctx.beginPath()
        ctx.moveTo(130, 170)
        ctx.bezierCurveTo(250, y1, 345, y2, 400, y3)

        ctx.strokeStyle = 'white'
        ctx.lineWidth = 8
        ctx.stroke()

        if (y1 === 100) {
            y1Forward = true
        }

        if (y1 === 300) {
            y1Forward = false
        }

        if (y2 === 100) {
            y2Forward = true
        }

        if (y2 === 310) {
            y2Forward = false
        }

        if (y3 === 100) {
            y3Forward = true
        }

        if (y3 === 317) {
            y3Forward = false
        }

        y1Forward ? (y1 += 1) : (y1 -= 1)
        y2Forward ? (y2 += 1) : (y2 -= 1)
        y3Forward ? (y3 += 1) : (y3 -= 1)
    }
}
