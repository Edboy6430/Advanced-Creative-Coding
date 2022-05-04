import {
    AmbientLight,
    Clock,
    Mesh,
    MeshPhongMaterial,
    MeshNormalMaterial,
    ShaderMaterial,
    TextureLoader,
    PointLight,
    BoxGeometry,
    SphereGeometry,
    Vector2,
    Vector3,
    Box3,
    Sphere,
    DoubleSide,
    WebGLRenderer
} from "three"

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import vertexShader from "../assets/shaders/shader.vert"
import fragmentShader from "../assets/shaders/shader.frag"
import { Screen } from "./Screen"

export class GameScreen extends Screen {

    pointLight: PointLight
    ambientLight: AmbientLight

    controls: OrbitControls

    shaderMaterial: ShaderMaterial

     leftPlayerBox3: THREE.Box3
     leftPlayerMesh: Mesh

     rightPlayerBox3: THREE.Box3
     rightPlayerMesh: Mesh

     pongBallSphere: THREE.Sphere
     pongBallMesh: Mesh

     topWallBox3: THREE.Box3
     topWallMesh: Mesh

     bottomWallBox3: THREE.Box3
     bottomWallMesh: Mesh

     middleLineMesh: Mesh

     xMovementValue = 0
     yMovementValue = 0



     constructor(model: any, renderer: WebGLRenderer) {

        super(model, renderer)

        const mapSize = 1024
		const cameraNear = 0.5
		const cameraFar = 500



        this.pointLight = new PointLight(0x4E5D94)
		this.pointLight.intensity = 0.66
		this.pointLight.position.set(-5, 3, 4)

		this.pointLight.shadow.mapSize.width = mapSize
		this.pointLight.shadow.mapSize.height = mapSize
		this.pointLight.shadow.camera.near = cameraNear
		this.pointLight.shadow.camera.far = cameraFar



		this.ambientLight = new AmbientLight(0xFFFFFF)
		this.ambientLight.intensity = 0.2



		this.scene.add(this.pointLight)
		this.scene.add(this.ambientLight)



        const uniforms = {

            u_time: { type: "f", value: 1.0 },
            u_resolution: { type: "v2", value: new Vector2(800, 800) },
            u_mouse: { type: "v2", value: new Vector2() }
        }
    
        this.shaderMaterial = new ShaderMaterial({
    
            uniforms: uniforms,
            side: DoubleSide
        })



        // Player Objects
        const playerGeometry = new BoxGeometry(0.5, 2.5, 0.25, 10, 10)
        const playerMaterial = new MeshNormalMaterial({})

        this.leftPlayerMesh = new Mesh(playerGeometry, playerMaterial)
        this.rightPlayerMesh = new Mesh(playerGeometry, playerMaterial)

        this.leftPlayerMesh.position.x = -6
        this.rightPlayerMesh.position.x = 6

    
    
        // Pong Ball Object
        const ballGeometry = new SphereGeometry(0.25)
        const ballMaterial = new MeshNormalMaterial({ })

        this.pongBallMesh = new Mesh(ballGeometry, ballMaterial)



        // Top and bottom wall objects
        const wallGeometry = new BoxGeometry(12, 1, 0.25)
        const wallMaterial = new MeshPhongMaterial({ color: 0xFFFFFF })

        this.topWallMesh = new Mesh(wallGeometry, wallMaterial)
        this.bottomWallMesh = new Mesh(wallGeometry, wallMaterial)

        this.topWallMesh.position.y = 4
        this.bottomWallMesh.position.y = -4



        // Middle line object
        const lineGeometry = new BoxGeometry(0.25, 8, 0.1)
        const lineMaterial = new MeshPhongMaterial({ color: 0xFFFFFF })

        this.middleLineMesh = new Mesh(lineGeometry, lineMaterial)

        this.middleLineMesh.position.z = -0.125



        // Bounding Boxes and Bounding Sphere
        this.leftPlayerBox3 = new Box3(new Vector3(), new Vector3())
        this.rightPlayerBox3 = new Box3(new Vector3(), new Vector3())

        this.pongBallSphere = new Sphere(this.pongBallMesh.position, 1)

        this.topWallBox3 = new Box3(new Vector3(), new Vector3())
        this.bottomWallBox3 = new Box3(new Vector3(), new Vector3())

        this.leftPlayerBox3.setFromObject(this.leftPlayerMesh)
        this.rightPlayerBox3.setFromObject(this.rightPlayerMesh)

        this.leftPlayerMesh.geometry.computeBoundingBox()
        this.rightPlayerMesh.geometry.computeBoundingBox()

        this.pongBallMesh.geometry.computeBoundingSphere()

        this.topWallMesh.geometry.computeBoundingBox()
        this.bottomWallMesh.geometry.computeBoundingBox()



        this.scene.add(this.leftPlayerMesh)
        this.scene.add(this.rightPlayerMesh)

        this.scene.add(this.pongBallMesh)

        this.scene.add(this.topWallMesh)
        this.scene.add(this.bottomWallMesh)

        this.scene.add(this.middleLineMesh)



        // Controls here
        this.controls = new OrbitControls(this.camera, renderer.domElement)


            // Controls for moving camera
        this.controls.addEventListener("dragstart", function (event) {

            event.object.material.emissive.set(0xAAAAAA)
        })

        this.controls.addEventListener("dragend", function (event) {

            event.object.material.emissive.set(0x000000)
        })

        if (this.controls) this.controls.update()
    }



    update(clock: Clock, delta: number): void {

        // Updates bounding boxes and bounding sphere
        this.leftPlayerBox3.copy(this.leftPlayerMesh.geometry.boundingBox).applyMatrix4(this.leftPlayerMesh.matrixWorld)
        this.rightPlayerBox3.copy(this.rightPlayerMesh.geometry.boundingBox).applyMatrix4(this.rightPlayerMesh.matrixWorld)
        this.pongBallSphere.copy(this.pongBallMesh.geometry.boundingSphere).applyMatrix4(this.pongBallMesh.matrixWorld)

        this.topWallBox3.copy(this.topWallMesh.geometry.boundingBox).applyMatrix4(this.topWallMesh.matrixWorld)
        
        this.bottomWallBox3.copy(this.bottomWallMesh.geometry.boundingBox).applyMatrix4(this.bottomWallMesh.matrixWorld)

        // Pong Ball Movement
        this.pongBallMesh.position.x += this.xMovementValue
        this.pongBallMesh.position.y += this.yMovementValue

        if ((this.pongBallMesh.position.x < -9) || (this.pongBallMesh.position.x > 9)) {

            this.pongBallMesh.position.x = 0
            this.xMovementValue = 0
            this.yMovementValue = 0
        }
	}
}