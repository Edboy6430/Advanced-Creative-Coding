import * as PIXI from 'pixi.js'
import { Model, SceneState } from './model/model'
import { gsap } from "gsap"
import * as filters from 'pixi-filters'

import { guiSetup } from './controllers/gui'

let mModel = new Model()

let tl = gsap.timeline()

let graphs: Array<PIXI.Graphics> = []
let sizes: Array<any> = []
let colors: Array<any> = []

const load = (app: PIXI.Application) => {
    return new Promise<void>((resolve) => {
        app.loader.add('world1', 'assets/hello-world.png').load(() => {
            resolve()
        })
    })
}

const main = async () => {
    // Actual app
    let app = new PIXI.Application({antialias: true, backgroundColor: 0x000000})

    // Display application properly
    document.body.style.margin = '0'
    app.renderer.view.style.position = 'absolute'
    app.renderer.view.style.display = 'block'

    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight)

    // Load assets
    await load(app)

	for (let i = 0; i < 10; i++) {
		const element = new PIXI.Graphics()
		element.x = window.innerWidth/2
		element.y = window.innerHeight/2

		element.x += 50 * Math.cos(i/10*Math.PI*2)
		element.y += 50 * Math.sin(i/10*Math.PI*2)	

		let adjustment = new filters.AdjustmentFilter()
		element.filters = [adjustment]

		graphs.push(element)
		app.stage.addChild(element)

		sizes[i] = {
			value: 10
		}
	}

    app.stage.interactive = true
    app.stage.hitArea = new PIXI.Polygon([
        0,0,
        window.innerWidth, 0,
        window.innerWidth, window.innerHeight,
        0, window.innerHeight
    ])


    // Handle window resizing
    window.addEventListener('resize', (_e) => {
        app.renderer.resize(window.innerWidth, window.innerHeight)
        app.stage.hitArea = new PIXI.Polygon([
            0,0,
            window.innerWidth, 0,
            window.innerWidth, window.innerHeight,
            0, window.innerHeight
        ])
    })

    document.body.appendChild(app.view)

    guiSetup(mModel, tl)


	sizes.forEach((size, i) => {
		tl.to(size,
			{
				value: window.innerHeight / 2,
				duration: 0.75
			}, "-=1.45")
		tl.to(colors[i],
			{
				duration: 1.5
			}, "<")
	})

    sizes.forEach((size, i) => {
		tl.to(size,
			{
				value: 10,
				duration: 0.75
			}, "-=1.45")
		tl.to(colors[i],
			{
				duration: 1.5
			}, "<")
	})


    app.ticker.add(update)
}

// Cannot be an arrow function. Arrow functions cannot have a 'this' parameter.
function update(delta: number) {
    graphs.forEach((graph, i) => {
        graph.clear()

        graph.beginFill(0xFFB900)
        graph.drawRoundedRect(0, 0, (sizes[i].value * 0.1), (sizes[i].value * 2), 100)
        graph.angle = ((i) * (360 / 10)) - 90
    })
}

main()