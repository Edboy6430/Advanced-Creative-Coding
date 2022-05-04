import "./index.css"
import * as THREE from "three"
import Stats from "three/examples/jsm/libs/stats.module"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { ShaderMaterial } from "three"
import vertexShader from "./assets/shaders/shader.vert"
import fragmentShader from "./assets/shaders/shader.frag"

import { Screen } from "./Screens/Screen"
import { StartScreen } from "./Screens/StartScreen"
import { GameScreen } from "./Screens/GameScreen"



let model = {

	groupX: 0,
	groupY: 0,
	groupAngle: 0,
	activeScreen: 0,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
}



let renderer: THREE.WebGLRenderer
let clock = new THREE.Clock()
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let controls: OrbitControls
let stats: any

let startScreen: StartScreen
let gameScreen: GameScreen
let screens: Screen[] = []

let leftPlayerScore = 0
let rightPlayerScore = 0



function main() {

    initScene()
    initStats()
    initListeners()
}

function initStats() {

    stats = new (Stats as any)()
    document.body.appendChild(stats.dom)
}

function initScene() {

    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(75, (window.innerWidth / window.innerHeight), 0.1, 1000)
    camera.position.z = 5

    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    document.body.appendChild(renderer.domElement)



    startScreen = new StartScreen(model, renderer)
    startScreen.scene.background = new THREE.Color(0x4E5D94)
    screens.push(startScreen)

    gameScreen = new GameScreen(model, renderer)
    gameScreen.scene.background = new THREE.Color(0x4E5D94)
    screens.push(gameScreen)



    // Init animation
    animate()



    // Logs the score in console
    console.log("Score: " + String(leftPlayerScore) + "   |   " + String(rightPlayerScore))
}

function initListeners() {

    window.addEventListener("resize", onWindowResize, false)



    window.addEventListener("keydown", (event) => {
		const { key } = event

		switch (key) {

            case "ArrowLeft":

				model.activeScreen = (model.activeScreen - 1)

				if (model.activeScreen < 0) {
                    
					model.activeScreen = screens.length - 1;
				}

				break

			case "ArrowRight":

				model.activeScreen = (model.activeScreen + 1) % screens.length

				break

			default:
				break
		}
	})



    // Starts the game
    window.addEventListener("keydown", startGame)

    function startGame(event: any) {

        if ((model.activeScreen == 1)) {

            if ((gameScreen.xMovementValue == 0) && (gameScreen.yMovementValue == 0)) {

                if (event.keyCode == 32) {

                    gameScreen.xMovementValue = (Math.random() - 0.50) * 0.075
                    gameScreen.yMovementValue = (Math.random() - 0.50) * 0.050
                }
            }
        }
    }



    // Capacitive touch movement for the left player
    window.electronAPI.leftPlayerTouchMovement((event: any, value: any) => {

        if ((model.activeScreen == 1)) {

            if (gameScreen.leftPlayerMesh.position.y < 2) {

                if (value == 8) {

                    gameScreen.leftPlayerMesh.position.y += 0.35
                }
            }

            if (gameScreen.leftPlayerMesh.position.y > -2) {

                if (value == 5) {

                    gameScreen.leftPlayerMesh.position.y -= 0.35
                }
            }
        }
    })

    // Capacitive touch movement for the right player
    window.electronAPI.rightPlayerTouchMovement((event: any, value: any) => {

        if ((model.activeScreen == 1)) {

            if (gameScreen.rightPlayerMesh.position.y < 2) {

                if (value == 6) {

                    gameScreen.rightPlayerMesh.position.y += 0.35
                }
            }

            if (gameScreen.rightPlayerMesh.position.y > -2) {

                if (value == 3) {

                    gameScreen.rightPlayerMesh.position.y -= 0.35
                }
            }
        }
    })



    // Keyboard movement for the left player
    window.addEventListener("keydown", leftPlayerKeyboardMovement)

    function leftPlayerKeyboardMovement(event: any) {

        if ((model.activeScreen == 1)) {

            if (gameScreen.leftPlayerMesh.position.y < 2) {

                // keyCode for "W"
                if (event.keyCode == 87) {

                    gameScreen.leftPlayerMesh.position.y += 0.5
                }
            }

            if (gameScreen.leftPlayerMesh.position.y > -2) {

                // keyCode for "S"
                if (event.keyCode == 83) {

                    gameScreen.leftPlayerMesh.position.y -= 0.5
                }
            }
        }
    }

    // Keyboard movement for the right player
    window.addEventListener("keydown", rightPlayerKeyboardMovement)

    function rightPlayerKeyboardMovement(event: any) {

        if ((model.activeScreen == 1)) {

            if (gameScreen.rightPlayerMesh.position.y < 2) {

                // keyCode for "Up"
                if (event.keyCode == 38) {

                    gameScreen.rightPlayerMesh.position.y += 0.5
                }
            }

            if (gameScreen.rightPlayerMesh.position.y > -2) {

                // keyCode for "Down"
                if (event.keyCode == 40) {

                    gameScreen.rightPlayerMesh.position.y -= 0.5
                }
            }
        }
    }
}



function onWindowResize() {

    camera.aspect = (window.innerWidth / window.innerHeight)
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)

    startScreen.onWindowResize()
    gameScreen.onWindowResize()
}



function animate() {

    requestAnimationFrame(() => {

        animate()
    })



    let delta = clock.getDelta()

    

	switch (model.activeScreen) {
		case 0:

			startScreen.update(clock, delta)

			break

		default:

			break
	}



    // Updates bounding boxes and bounding sphere
    gameScreen.leftPlayerBox3.copy(gameScreen.leftPlayerMesh.geometry.boundingBox).applyMatrix4(gameScreen.leftPlayerMesh.matrixWorld)
    gameScreen.rightPlayerBox3.copy(gameScreen.rightPlayerMesh.geometry.boundingBox).applyMatrix4(gameScreen.rightPlayerMesh.matrixWorld)
    gameScreen.pongBallSphere.copy(gameScreen.pongBallMesh.geometry.boundingSphere).applyMatrix4(gameScreen.pongBallMesh.matrixWorld)

    gameScreen.topWallBox3.copy(gameScreen.topWallMesh.geometry.boundingBox).applyMatrix4(gameScreen.topWallMesh.matrixWorld)
    
    gameScreen.bottomWallBox3.copy(gameScreen.bottomWallMesh.geometry.boundingBox).applyMatrix4(gameScreen.bottomWallMesh.matrixWorld)

    // Pong Ball Movement
    gameScreen.pongBallMesh.position.x += gameScreen.xMovementValue
    gameScreen.pongBallMesh.position.y += gameScreen.yMovementValue

    if ((gameScreen.pongBallMesh.position.x < -9) || (gameScreen.pongBallMesh.position.x > 9)) {

        if (gameScreen.pongBallMesh.position.x < -9) {

            leftPlayerScore ++
    
            console.log("Left Player scores!")
            console.log("Score: " + String(leftPlayerScore) + "   |   " + String(rightPlayerScore))
        }
    
        if (gameScreen.pongBallMesh.position.x > 9) {
    
            rightPlayerScore ++
    
            console.log("Right Player scores!")
            console.log("Score: " + String(leftPlayerScore) + "   |   " + String(rightPlayerScore))
        }

        gameScreen.pongBallMesh.position.x = 0
        gameScreen.pongBallMesh.position.y = 0
        gameScreen.xMovementValue = 0
        gameScreen.yMovementValue = 0
    }



    if (stats) stats.update()

    if (controls) controls.update()



    checkCollisions()



    renderer.render(screens[model.activeScreen].scene, screens[model.activeScreen].camera)
}



function checkCollisions() {

    if ((gameScreen.pongBallSphere.intersectsBox(gameScreen.leftPlayerBox3)) || (gameScreen.pongBallSphere.intersectsBox(gameScreen.rightPlayerBox3))) {

        gameScreen.xMovementValue *= (-1.15)
    }

    if ((gameScreen.pongBallSphere.intersectsBox(gameScreen.topWallBox3)) || (gameScreen.pongBallSphere.intersectsBox(gameScreen.bottomWallBox3))) {

        gameScreen.yMovementValue *= (-1.05)
    }
}


main()



export interface IElectronAPI {

	handleColor: (callback: (event: any, value: any) => void) => void

	leftPlayerTouchMovement: (callback: (event: any, value: any) => void) => void
    rightPlayerTouchMovement: (callback: (event: any, value: any) => void) => void

    startGame: (callback: (event: any, value: any) => void) => void
}

declare global {

	interface Window {
        
		electronAPI: IElectronAPI
	}
}