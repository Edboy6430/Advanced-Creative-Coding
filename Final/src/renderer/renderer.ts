import "./index.css"
import * as THREE from "three"
import Stats from "three/examples/jsm/libs/stats.module"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { Mesh, ShaderMaterial} from "three"

import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader.js"
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js"

import workSansBlackRegularPath from "./fonts/Work Sans Black_Regular.json"
import systemBoldPath from "./fonts/System_Font_Bold.json"



let renderer: THREE.WebGLRenderer
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let lightPoint: THREE.PointLight
let controls: OrbitControls
let stats: any
let shaderMat: ShaderMaterial



let leftPlayerBox3: THREE.Box3
let leftPlayerMesh: THREE.Mesh

let rightPlayerBox3: THREE.Box3
let rightPlayerMesh: THREE.Mesh

let pongBallSphere: THREE.Sphere
let pongBallMesh: THREE.Mesh

let topWallBox3: THREE.Box3
let topWallMesh: THREE.Mesh

let bottomWallBox3: THREE.Box3
let bottomWallMesh: THREE.Mesh

let middleLineMesh: THREE.Mesh



let xMovementValue = (Math.random() * 0.02) - 0.02
let yMovementValue = (Math.random() * 0.02) - 0.02

let testText = "Hi there"
let textMesh: THREE.Mesh
let textGeometry: TextGeometry
let textMaterial: THREE.MeshNormalMaterial



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

    controls = new OrbitControls(camera, renderer.domElement)

    const shadowIntensity = 0.25

    lightPoint = new THREE.PointLight(0xFFFFFF)
    lightPoint.position.set(-0.5, 0.5, 4)
    lightPoint.castShadow = true
    lightPoint.intensity = shadowIntensity
    scene.add(lightPoint)

    const lightPoint2 = lightPoint.clone()
    lightPoint2.intensity = 1 - shadowIntensity
    lightPoint2.castShadow = false
    scene.add(lightPoint2)

    const mapSize = 1024 // Default value: 512
    const cameraNear = 0.5 // Default value: 0.5
    const cameraFar = 500 // Default value: 500

    lightPoint.shadow.mapSize.width = mapSize
    lightPoint.shadow.mapSize.height = mapSize
    lightPoint.shadow.camera.near = cameraNear
    lightPoint.shadow.camera.far = cameraFar



    const uniforms = {

		u_time: { type: "f", value: 1.0 },
		u_resolution: { type: "v2", value: new THREE.Vector2(800, 800) },
		u_mouse: { type: "v2", value: new THREE.Vector2() }
	}

	shaderMat = new THREE.ShaderMaterial( {

		uniforms: uniforms,
		side: THREE.DoubleSide
	} )



    // let textGeometry = new TextGeometry("Pong", {
        
    //     font: workSansBlackRegularPath,
    //     size: 40,
    //     height: 5
    // })

    // let textMesh = new THREE.Mesh(textGeometry, textMaterial)
    // scene.add(textMesh)
    let fontLoader = new FontLoader().load("./fonts/System_Font_Bold.json", function(text) {

        const textGeometry = new TextGeometry("Pong", {

            font: text,
            size: 40,
            height: 5
        })

        let textMesh = new THREE.Mesh(textGeometry, textMaterial)

        scene.add(textMesh)
    })



    // Player Objects
    const playerGeometry = new THREE.BoxGeometry(0.5, 2.5, 0.25, 10, 10)
    const playerMaterial = new THREE.MeshNormalMaterial({})

    leftPlayerMesh = new THREE.Mesh(playerGeometry, playerMaterial)
    rightPlayerMesh = new THREE.Mesh(playerGeometry, playerMaterial)

    leftPlayerMesh.position.x = -6
    rightPlayerMesh.position.x = 6

    // Pong Ball Object
    const ballGeometry = new THREE.SphereGeometry(0.25)
    const ballMaterial = new THREE.MeshNormalMaterial({ })

    pongBallMesh = new THREE.Mesh(ballGeometry, ballMaterial)

    // Top and bottom wall objects
    const wallGeometry = new THREE.BoxGeometry(12, 1, 0.25)
    const wallMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF })

    topWallMesh = new THREE.Mesh(wallGeometry, wallMaterial)
    bottomWallMesh = new THREE.Mesh(wallGeometry, wallMaterial)

    topWallMesh.position.y = 4
    bottomWallMesh.position.y = -4

    // Middle line object
    const lineGeometry = new THREE.BoxGeometry(0.25, 8, 0.1)
    const lineMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF })

    middleLineMesh = new THREE.Mesh(lineGeometry, lineMaterial)

    middleLineMesh.position.z = -0.125



    // Bounding Boxes and Bounding Sphere
    leftPlayerBox3 = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3())
    rightPlayerBox3 = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3())

    pongBallSphere = new THREE.Sphere(pongBallMesh.position, 1)

    topWallBox3 = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3())
    bottomWallBox3 = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3())

    leftPlayerBox3.setFromObject(leftPlayerMesh)
    rightPlayerBox3.setFromObject(rightPlayerMesh)

    leftPlayerMesh.geometry.computeBoundingBox()
    rightPlayerMesh.geometry.computeBoundingBox()

    pongBallMesh.geometry.computeBoundingSphere()

    topWallMesh.geometry.computeBoundingBox()
    bottomWallMesh.geometry.computeBoundingBox()



    scene.add(leftPlayerMesh)
    scene.add(rightPlayerMesh)

    scene.add(pongBallMesh)

    scene.add(topWallMesh)
    scene.add(bottomWallMesh)

    scene.add(middleLineMesh)



    // Controls for moving camera
    controls.addEventListener("dragstart", function (event) {

		event.object.material.emissive.set(0xAAAAAA)
	})

	controls.addEventListener("dragend", function (event) {

		event.object.material.emissive.set(0x000000)
	})



    // Init animation
    animate()
}

function initListeners() {

    window.addEventListener("resize", onWindowResize, false)



    // Capacitive touch movement for the left player
    window.electronAPI.leftPlayerTouchMovement((event: any, value: any) => {

        if (leftPlayerMesh.position.y < 2) {

            if (value == 8) {

                leftPlayerMesh.position.y += 0.35
            }
        }

        if (leftPlayerMesh.position.y > -2) {

            if (value == 5) {

                leftPlayerMesh.position.y -= 0.35
            }
        }
    })

    // Capacitive touch movement for the right player
    window.electronAPI.rightPlayerTouchMovement((event: any, value: any) => {

        if (rightPlayerMesh.position.y < 2) {

            if (value == 6) {

                rightPlayerMesh.position.y += 0.35
            }
        }

        if (rightPlayerMesh.position.y > -2) {

            if (value == 3) {

                rightPlayerMesh.position.y -= 0.35
            }
        }
    })



    // Keyboard movement for the left player
    window.addEventListener("keydown", leftPlayerKeyboardMovement)

    function leftPlayerKeyboardMovement(event: any) {

        if (leftPlayerMesh.position.y < 2) {

            // keyCode for "W"
            if (event.keyCode == 87) {

                leftPlayerMesh.position.y += 0.5
            }
        }

        if (leftPlayerMesh.position.y > -2) {

            // keyCode for "S"
            if (event.keyCode == 83) {

                leftPlayerMesh.position.y -= 0.5
            }
        }
    }

    // Keyboard movement for the right player
    window.addEventListener("keydown", rightPlayerKeyboardMovement)

    function rightPlayerKeyboardMovement(event: any) {

        if (rightPlayerMesh.position.y < 2) {

            // keyCode for "Up"
            if (event.keyCode == 38) {

                rightPlayerMesh.position.y += 0.5
            }
        }

        if (rightPlayerMesh.position.y > -2) {

            // keyCode for "Down"
            if (event.keyCode == 40) {

                rightPlayerMesh.position.y -= 0.5
            }
        }
    }
}



function onWindowResize() {

    camera.aspect = (window.innerWidth / window.innerHeight)
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}



function animate() {

    requestAnimationFrame(() => {

        animate()
    })

    // Updates bounding boxes and bounding sphere
    leftPlayerBox3.copy(leftPlayerMesh.geometry.boundingBox).applyMatrix4(leftPlayerMesh.matrixWorld)
    rightPlayerBox3.copy(rightPlayerMesh.geometry.boundingBox).applyMatrix4(rightPlayerMesh.matrixWorld)
    pongBallSphere.copy(pongBallMesh.geometry.boundingSphere).applyMatrix4(pongBallMesh.matrixWorld)

    topWallBox3.copy(topWallMesh.geometry.boundingBox).applyMatrix4(topWallMesh.matrixWorld)
    
    bottomWallBox3.copy(bottomWallMesh.geometry.boundingBox).applyMatrix4(bottomWallMesh.matrixWorld)

    // Pong Ball Movement
    pongBallMesh.position.x += xMovementValue
    pongBallMesh.position.y += yMovementValue

    if ((pongBallMesh.position.x < -10) || (pongBallMesh.position.x > 10)) {

        pongBallMesh.position.x = 0
        xMovementValue = 0
        yMovementValue = 0
    }



    if (stats) stats.update()

    if (controls) controls.update()

    checkCollisions()

    renderer.render(scene, camera)
}



function checkCollisions() {

    if ((pongBallSphere.intersectsBox(leftPlayerBox3)) || (pongBallSphere.intersectsBox(rightPlayerBox3))) {

        xMovementValue *= (-1.05)
    }

    if ((pongBallSphere.intersectsBox(topWallBox3)) || (pongBallSphere.intersectsBox(bottomWallBox3))) {

        yMovementValue *= (-1.0)
    }
}



main()



export interface IElectronAPI {

	handleColor: (callback: (event: any, value: any) => void) => void

	leftPlayerTouchMovement: (callback: (event: any, value: any) => void) => void
    rightPlayerTouchMovement: (callback: (event: any, value: any) => void) => void
}

declare global {

	interface Window {
        
		electronAPI: IElectronAPI
	}
}