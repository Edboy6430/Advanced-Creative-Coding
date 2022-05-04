import {
	AmbientLight,
	Mesh,
	Texture,
	MeshBasicMaterial,
	MeshNormalMaterial,
	PointLight,
	BoxGeometry,
	WebGLRenderer,
	TextureLoader,
	RepeatWrapping,
	Material,
	MeshStandardMaterial,
	Color,
	Group,
	MeshPhongMaterial
} from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { Screen } from "./Screen"

import pongNormalMap from "../assets/textures/Pong Normal Map.png"
import pongGLTF from "../assets/models/Pong.gltf"



export class StartScreen extends Screen {

	lightPoint: PointLight
	lightAmbient: AmbientLight

    controls: OrbitControls

	pongGroup: Group
	pongTexture: Texture

	gltfLoader: GLTFLoader
	
	textureMaterial: MeshStandardMaterial



	constructor(model: any, renderer: WebGLRenderer) {

		super(model, renderer)



		this.pongGroup = new Group()
		this.pongTexture = new Texture()

		const pongGeometry = new BoxGeometry
		const pongMaterial = new MeshPhongMaterial({ color: 0xCC00CC })

		let textureMaterial: Material
		let textureLoader = new TextureLoader

		textureLoader.load(pongNormalMap, (texture) => {

			texture.wrapS = texture.wrapT = RepeatWrapping
			texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy()

			this.pongTexture = texture

			// textureMaterial = new MeshBasicMaterial({ map: texture })
			textureMaterial = new MeshNormalMaterial

			const gltfLoader = new GLTFLoader()
			gltfLoader.load(pongGLTF, (gltf) => {

				this.pongGroup = gltf.scene

				interface gltfMesh extends THREE.Object3D<THREE.Event> {

					material: THREE.Material
				}

				this.pongGroup.traverse((child: THREE.Object3D<THREE.Event>) => {

					(child as gltfMesh).material = textureMaterial
				})

				this.pongGroup.scale.set(0.01, 0.01, 0.01)
				this.scene.add(this.pongGroup)
			})
		})



		this.lightPoint = new PointLight(0xCCCCCC)
		this.lightPoint.intensity = 0.66
		this.lightPoint.position.set(-5, 3, 4)

		const mapSize = 1024
		const cameraNear = 0.5
		const cameraFar = 500

		this.lightPoint.shadow.mapSize.width = mapSize
		this.lightPoint.shadow.mapSize.height = mapSize
		this.lightPoint.shadow.camera.near = cameraNear
		this.lightPoint.shadow.camera.far = cameraFar

		this.scene.add(this.lightPoint)

		this.lightAmbient = new AmbientLight(0xFF0000)
		this.lightAmbient.intensity = 0.2

		this.scene.add(this.lightAmbient)



        // Camera controls
        this.controls = new OrbitControls(this.camera, renderer.domElement)

        this.controls.addEventListener("dragstart", function (event) {

            event.object.material.emissive.set(0xAAAAAA)
        })

        this.controls.addEventListener("dragend", function (event) {

            event.object.material.emissive.set(0x000000)
        })

        if (this.controls) this.controls.update()
	}
}