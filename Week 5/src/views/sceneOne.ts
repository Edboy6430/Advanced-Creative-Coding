import { Point, Polygon, Sprite } from 'pixi.js'
import { easeIn, easeOut, lerp } from '../utils/easing'
import { Model, SceneState } from '../model/model'
import { Scene } from './scene'

export class SceneOne extends Scene {

    sprite: Sprite = new Sprite()

    constructor(model: Model) {
        super(model)

        this.button.on('pointerdown', () => {
            this.model.sceneState = SceneState.second
            this.button.isPressed = false
        })
        this.button.position.x = window.innerWidth / 2
        this.button.position.y = window.innerHeight / 2
    }

    update(): void {
        super.update()

        let tempColor = this.model.buttonData.firstColor.slice(1)
        tempColor = '0x' + tempColor

        this.button.fill = parseInt(tempColor)
        this.button.width = this.model.buttonData.width
        this.button.height = this.model.buttonData.height
        this.button.update()
    }
}