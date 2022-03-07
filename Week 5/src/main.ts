import * as PIXI from 'pixi.js'
import { Model, SceneState } from './model/model'
import { gsap, random } from "gsap"
import * as filters from 'pixi-filters'
import { AdjustmentFilter, TiltShiftAxisFilter } from 'pixi-filters'
import { guiSetup } from './controllers/gui'
import { Application, Container, TimeLimiter } from 'pixi.js'
import { Button } from './components/button'

// Timelines
let itemTimeline = gsap.timeline()
let circleTimeline = gsap.timeline()

// Arrays for storing the elements from each roll
let circleArray: Array<PIXI.Graphics> = []
let randomizedItemArray: Array<PIXI.Sprite> = []
let randomizedColorArray: Array<string> = []

// Creates item textures
const commonItem = PIXI.Texture.from('assets/dull-blade.png')
const uncommonItem = PIXI.Texture.from('assets/silver-sword.png')
const rareItem = PIXI.Texture.from('assets/cool-steel.png')
const srItem = PIXI.Texture.from('assets/sacrificial-sword.png')
const ssrItem = PIXI.Texture.from('assets/skyward-blade.png')

// Creates an array of items
const itemArray: Array<PIXI.Texture> = [
    commonItem,
    uncommonItem,
    rareItem,
    srItem,
    ssrItem
]

// Creates an array of colors that represent an item's rarity
const colorArray: Array<string> = [
    "0xA2A3A5",
    "0x8CC4A4",
    "0x88A6C2",
    "0x9787B6",
    "0xC5976D"
]

// Button for rolling
var rollButton = new Button(0, 0, 500, 100, "Roll!")

// Creates the application
let app = new PIXI.Application({ antialias: true, backgroundColor: 0xF5F5DC })


const main = async () => {
    document.body.appendChild(app.view)

    // Displays application properly
    document.body.style.margin = '0'
    app.renderer.view.style.position = 'absolute'
    app.renderer.view.style.display = 'block'

    // Resizes the viewport size to that of the window's size
    app.renderer.resize(window.innerWidth, window.innerHeight)

    // Creates the roll button
    rollButton.position.x = (innerWidth * 0.5) / 8
    rollButton.position.y = (innerHeight * 7) / 8

    rollButton.root.zIndex = 100;
    rollButton.on('pointerover', () => { rollButton.isOver = true })
    rollButton.on('pointerout', () => { rollButton.isOver = false })
    rollButton.on('pointerdown', () => { rollButton.isPressed = true })
    rollButton.on('pointerup', () => { rollButton.isPressed = false })

    rollButton.on('pointerdown', () => {
        rollButton.isPressed = false
    })

    app.stage.addChild(rollButton.root)

    rollButton.on('mousedown', function(e) {
        clearItems()
        rollItems()
    })



    app.ticker.add(update)
}

function rollItems() {
    // Creates five randomly chosen item sprites and draws circles behind each sprite
    for (let i = 0; i < 5; i ++) {
        // Chooses a random number for indexing
        const randomArrayNumber = Math.floor(Math.random() * itemArray.length)

        // Randomized item and item sprite
        const randomItem = itemArray[randomArrayNumber]
        const randomItemSprite = new PIXI.Sprite(randomItem)

        // Sets the item coordinates so that they appear offscreen
        randomItemSprite.x = -innerWidth
        randomItemSprite.y = innerHeight / 3

        randomItemSprite.scale.x = 1.5
        randomItemSprite.scale.y = 1.5

        // Stores the corresponding rarity color in the randomized color array
        randomizedColorArray.push(colorArray[randomArrayNumber])

        // Pushes the elements into their respective arrays
        randomizedItemArray.push(randomItemSprite)



        // Adds circles to an array
        const circle = new PIXI.Graphics()
        circle.x = -innerWidth
        circle.y = innerHeight / 3

        circle.x += 150
        circle.y += 150
        
        circleArray.push(circle)
        


        // Adds the circle and item sprite to the app stage
        app.stage.addChild(circle)
        app.stage.addChild(randomItemSprite)
    }



    // Displays each circle behind the item
    circleArray.forEach((circle, i) => {
        circleTimeline.to(circle, {
            x: ((circleArray.length - 0.1) - i) * (innerWidth / 6),
            duration: 2.20
        }, "-=1.60")
    })

    // Displays each item in the randomized item array
    randomizedItemArray.forEach((item, j) => {
        // The timeline is set up so that each item rolls out one after the other
        itemTimeline.to(item, {
            x: ((randomizedItemArray.length - 0.5) - j) * (innerWidth / 6),
                duration: 2
        }, "-=1.50")
    })
}

function clearItems() {
    // Moves the old circles offscreen
    circleArray.forEach((circle, i) => {
        circleTimeline.to(circle, {
            // x: (innerWidth + 400),
            y: (0 - 400),
            duration: 2
        }, "-=1.50")

        delete circleArray[i]
    })

    // Moves the old items offscreen
    randomizedItemArray.forEach((item, j) => {
        itemTimeline.to(item, {
            // x: (innerWidth + 400),
            y: (innerHeight + 400),
            duration: 2
        }, "-=1.50")
        
        delete randomizedItemArray[j]
    })
}


// Cannot be an arrow function. Arrow functions cannot have a 'this' parameter.
function update(delta: number) {
    rollButton.fill = 0xFF8A65
    rollButton.update()

    circleArray.forEach((circle, i) => {
        circle.clear()
        circle.beginFill(parseInt(randomizedColorArray[i]))
        circle.drawCircle(0, 0, 100)
        circle.endFill()
    })
}



main()