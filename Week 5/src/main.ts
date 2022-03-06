import * as PIXI from 'pixi.js'
import { Model, SceneState } from './model/model'
import { SceneOne } from './views/sceneOne'
import { SceneTwo } from './views/sceneTwo'
import { gsap, random } from "gsap"
import * as filters from 'pixi-filters'
import { AdjustmentFilter } from 'pixi-filters'
import { guiSetup } from './controllers/gui'
import { Container } from 'pixi.js'

let sceneModel = new Model()
let sceneOne: SceneOne = new SceneOne(sceneModel)
let sceneTwo: SceneTwo = new SceneTwo(sceneModel)

let tl = gsap.timeline()

// Creates the item textures
const commonItem = PIXI.Texture.from('assets/Silver Sword.png')
const uncommonItem = PIXI.Texture.from('assets/Cool Steel.png')
const rareItem = PIXI.Texture.from('assets/Sacrificial Sword.png')

// Creates an array of items
const items: Array<PIXI.Texture> = [
    commonItem,
    uncommonItem,
    rareItem
]

// // Creates colored circles behind each item that represents the item's rarity
// let rarityCircle = new PIXI.Graphics()

let rarityColors: Array<string> = [
    "0x8CC4A4",
    "0x88A6C2",
    "0x9787B6"
]

// Creates one container to hold items, and creates another container to hold circles
const itemContainer = new PIXI.Container()
const rarityCircleContainer = new PIXI.Container()

const main = async () => {
    // Creates the application
    const app = new PIXI.Application({ antialias: true })
    document.body.appendChild(app.view)

    // Display application properly
    document.body.style.margin = '0'
    app.renderer.view.style.position = 'absolute'
    app.renderer.view.style.display = 'block'

    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight)



    // Centers the containers within the screen's center
    itemContainer.x = app.screen.width / 2
    itemContainer.y = app.screen.height / 2
    
    rarityCircleContainer.x = app.screen.width / 2
    rarityCircleContainer.y = app.screen.height / 2



    // Creates five randomly chosen item sprites and draws circles behind each sprite
    for (let i = 0; i < 5; i ++) {
        const randomArrayNumber = Math.floor(Math.random() * items.length)

        const randomItemTexture = items[randomArrayNumber]
        const rarityColor = rarityColors[randomArrayNumber]
        
        const randomItem = new PIXI.Sprite(randomItemTexture)
        const rarityCircle = new PIXI.Graphics()

        rarityCircle.beginFill(parseInt(rarityColor))
        rarityCircle.drawCircle(((i % 5) * (app.screen.width / 5)), 0, 100)
        rarityCircle.endFill()

        randomItem.anchor.set(0.5)
        randomItem.x = (i % 5) * (app.screen.width / 5)
        randomItem.y = 0



        // Adds the item and circle to their respective containers
        rarityCircleContainer.addChild(rarityCircle)
        itemContainer.addChild(randomItem)
    }

        // Adds itemContainer and rarityCircleContainer to the app stage
        app.stage.addChild(rarityCircleContainer)
        app.stage.addChild(itemContainer)


    // Centers the sprites and circles within the containers' coordinates
    itemContainer.pivot.x = itemContainer.width / 2
    itemContainer.pivot.y = itemContainer.height / 2

    rarityCircleContainer.pivot.x = itemContainer.width / 2
    rarityCircleContainer.pivot.y = itemContainer.height / 2


    app.ticker.add(update)
}



// Cannot be an arrow function. Arrow functions cannot have a 'this' parameter.
function update(delta: number) {
}



main()