import { Model, SceneState } from '../model/model'
import { Scene } from './scene'

export class SceneTwo extends Scene {
    constructor(model: Model) {
        super(model)

        this.button.on('pointerdown', () => {
            this.model.sceneState = SceneState.first
            this.button.isPressed = false
        })
        this.button.position.x = window.screen.width / 2
        this.button.position.y = window.screen.height / 2
    }

    update(): void {
        super.update()

        let tempColor = this.model.buttonData.secondColor.slice(1)
        tempColor = '0x' + tempColor

        this.button.fill = parseInt(tempColor)
        this.button.width = this.model.buttonData.width
        this.button.height = this.model.buttonData.height
        this.button.update()
    }
}