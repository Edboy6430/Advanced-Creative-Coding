import "./index.css"
import * as THREE from "three"
import Stats from "three/examples/jsm/libs/stats.module"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { BoxGeometry, SphereGeometry, MeshNormalMaterial, ShaderMaterial, Mesh } from "three"



let renderer: THREE.WebGLRenderer
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera

let lightPoint: THREE.PointLight

let controls: OrbitControls
let stats: any

let debugCubeMesh: THREE.Mesh



let leftPlayerBox3: THREE.Box3
let leftPlayerMesh: THREE.Mesh

let rightPlayerBox3: THREE.Box3
let rightPlayerMesh: THREE.Mesh

let pongBallSphere: THREE.Sphere
let pongBallMesh: THREE.Mesh

let xMovementValue = (Math.random() * 0.01) - 0.01
let yMovementValue = (Math.random() * 0.01) - 0.01
console.log("xMovementValue: " + String(xMovementValue))
console.log("yMovementValue: " + String(yMovementValue))



// let exampleTexture: THREE.Texture

let shaderMat: ShaderMaterial



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

    renderer = new THREE.WebGLRenderer()
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
		side: THREE.DoubleSide,
	} )



    // Debug Cube
    const boxGeometry = new THREE.BoxGeometry()
    const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xFF00FF })
    
    debugCubeMesh = new THREE.Mesh(boxGeometry, boxMaterial)

    debugCubeMesh.scale.set(1, 1, 1)

    // scene.add(debugCubeMesh)



    // Player Objects
    const playerGeometry = new THREE.BoxGeometry(2, 10, 2, 5, 3)
    const playerMaterial = new THREE.MeshNormalMaterial({})

    leftPlayerMesh = new THREE.Mesh(playerGeometry, playerMaterial)
    rightPlayerMesh = new THREE.Mesh(playerGeometry, playerMaterial)

    leftPlayerMesh.scale.set(0.25, 0.25, 0.25)
    rightPlayerMesh.scale.set(0.25, 0.25, 0.25)

    leftPlayerMesh.position.x = -5
    rightPlayerMesh.position.x = 5

    // Pong Ball Object
    const ballGeometry = new THREE.SphereGeometry(1)
    const ballMaterial = new THREE.MeshNormalMaterial({ })

    pongBallMesh = new THREE.Mesh(ballGeometry, ballMaterial)
    pongBallMesh.scale.set(0.5, 0.5, 0.5)



    // Bounding Boxes and Bounding Sphere
    leftPlayerBox3 = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3())
    rightPlayerBox3 = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3())

    pongBallSphere = new THREE.Sphere(pongBallMesh.position, 1)

    leftPlayerBox3.setFromObject(leftPlayerMesh)
    rightPlayerBox3.setFromObject(rightPlayerMesh)

    leftPlayerMesh.geometry.computeBoundingBox()
    rightPlayerMesh.geometry.computeBoundingBox()

    pongBallMesh.geometry.computeBoundingSphere()



    scene.add(leftPlayerMesh)
    scene.add(rightPlayerMesh)
    scene.add(pongBallMesh)



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



    // Movement for the left player
    window.addEventListener("keydown", leftPlayerMovement)



    function leftPlayerMovement(event: any) {

        if (leftPlayerMesh.position.y < 4) {

            // keyCode for "W"
            if (event.keyCode == 87) {

                leftPlayerMesh.position.y += 0.5
            }
        }

        if (leftPlayerMesh.position.y > -4) {

            // keyCode for "S"
            if (event.keyCode == 83) {

                leftPlayerMesh.position.y -= 0.5
            }
        }
    }

    // Movement for the right player
    window.addEventListener("keydown", rightPlayerMovement)

    function rightPlayerMovement(event: any) {

        if (rightPlayerMesh.position.y < 4) {

            // keyCode for "Up"
            if (event.keyCode == 38) {

                rightPlayerMesh.position.y += 0.5
            }
        }

        if (rightPlayerMesh.position.y > -4) {

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

    // Pong Ball Movement
    pongBallMesh.position.x += xMovementValue
    pongBallMesh.position.y += yMovementValue

    if ((pongBallMesh.position.x < -4) || (pongBallMesh.position.x > 4)) {
        xMovementValue *= (-1)
    }
    if ((pongBallMesh.position.y < -6) || (pongBallMesh.position.y > 6)) {
        yMovementValue *= (-1)
    }



    if (stats) stats.update()

    if (controls) controls.update()

    renderer.render(scene, camera)
}

main()

export interface IElectronAPI {

	handleColor: (callback: (event: any, value: any) => void) => void

	rotateXAxis: (callback: (event: any, value: any) => void) => void
    rotateYAxis: (callback: (event: any, value: any) => void) => void
}

declare global {

	interface Window {
        
		electronAPI: IElectronAPI
	}
}