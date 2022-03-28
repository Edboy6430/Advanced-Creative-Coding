import './style.scss';
import * as THREE from 'three'; 1
import Stats from 'three/examples/jsm/libs/stats.module';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { ShaderMaterial } from 'three';

let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let clock = new THREE.Clock();

let lightAmbient: THREE.AmbientLight;
let lightPoint: THREE.PointLight;

let controls: OrbitControls;
let stats: any;

let cube: THREE.Mesh;
let plane: THREE.Mesh;
let leftIceCream: THREE.Group;
let middleIceCream: THREE.Group;
let rightIceCream: THREE.Group;

let leftTexture: THREE.Texture;
let middleTexture: THREE.Texture;
let rightTexture: THREE.Texture;

import vertexShader from '../resources/shaders/shader.vert?raw';
import fragmentShader from '../resources/shaders/shader.frag?raw';
import { ThrowStatement } from 'typescript';
let shaderMat: ShaderMaterial;

function main() {
    initScene();
    initStats();
    initListeners();
}

function initStats() {
    stats = new (Stats as any)();
    document.body.appendChild(stats.dom);
}

function initScene() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const shadowIntensity = 0.25;

    lightPoint = new THREE.PointLight(0xffffff);
    lightPoint.position.set(-0.5, 0.5, 4);
    lightPoint.castShadow = true;
    lightPoint.intensity = shadowIntensity;
    scene.add(lightPoint);

    const lightPoint2 = lightPoint.clone();
    lightPoint2.intensity = 1 - shadowIntensity;
    lightPoint2.castShadow = false;
    scene.add(lightPoint2);

    const mapSize = 1024; // Default 512
    const cameraNear = 0.5; // Default 0.5
    const cameraFar = 500; // Default 500
    lightPoint.shadow.mapSize.width = mapSize;
    lightPoint.shadow.mapSize.height = mapSize;
    lightPoint.shadow.camera.near = cameraNear;
    lightPoint.shadow.camera.far = cameraFar;



    // Loads textures for 3 objects
    let leftTextureMaterial: THREE.Material;
    let middleTextureMaterial: THREE.Material;
    let rightTextureMaterial: THREE.Material;



    // Loads the texture for the left ice cream
    // '/resources/textures/pistachio.jpg'
    new THREE.TextureLoader().load('../dist/assets/pistachio.jpg', function (texture) {

        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

        leftTextureMaterial = new THREE.MeshBasicMaterial({ map: texture });

        const loader = new GLTFLoader().setPath('../resources/models/');
        loader.load('ice_cream_left.gltf', function (gltf) {
            leftIceCream = gltf.scene;

            interface gltfMesh extends THREE.Object3D<THREE.Event> {
                material: THREE.Material
            }

            leftIceCream.traverse((child: THREE.Object3D<THREE.Event>) => {
                (child as gltfMesh).material = leftTextureMaterial;
            })

            leftIceCream.scale.set(0.01, 0.01, 0.01)

            leftIceCream.position.x = -5
            leftIceCream.position.y = -2.5

            leftIceCream.rotation.y = -50

            scene.add(leftIceCream);
        });
    });

    // Loads the texture for the middle ice cream
    new THREE.TextureLoader().load('../dist/assets/snowcone.jpg', function (texture) {

        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

        middleTextureMaterial = new THREE.MeshBasicMaterial({ map: texture });

        const loader = new GLTFLoader().setPath('../resources/models/');
        loader.load('ice_cream_middle.gltf', function (gltf) {
            middleIceCream = gltf.scene;

            interface gltfMesh extends THREE.Object3D<THREE.Event> {
                material: THREE.Material
            }

            middleIceCream.traverse((child: THREE.Object3D<THREE.Event>) => {
                (child as gltfMesh).material = middleTextureMaterial;
            })

            middleIceCream.scale.set(0.004, 0.004, 0.004)
            middleIceCream.position.x = 0
            middleIceCream.position.y = -2.5

            middleIceCream.rotation.x -= 0.1

            scene.add(middleIceCream);
        });
    });

    // Loads the texture for the right ice cream
    new THREE.TextureLoader().load('../dist/assets/strawberry.jpg', function (texture) {

        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

        rightTextureMaterial = new THREE.MeshBasicMaterial({ map: texture });

        const loader = new GLTFLoader().setPath('../resources/models/');
        loader.load('ice_cream_right.gltf', function (gltf) {
            rightIceCream = gltf.scene;

            interface gltfMesh extends THREE.Object3D<THREE.Event> {
                material: THREE.Material
            }

            rightIceCream.traverse((child: THREE.Object3D<THREE.Event>) => {
                (child as gltfMesh).material = rightTextureMaterial;
            })

            rightIceCream.scale.set(0.0045, 0.0045, 0.0045)

            rightIceCream.position.x = 2.5
            rightIceCream.position.y = -2.5

            scene.add(rightIceCream);
        });
    });



    // Init animation
    animate();
}

function initListeners() {
    window.addEventListener('resize', onWindowResize, false);

    window.addEventListener('keydown', (event) => {
        const { key } = event;

        switch (key) {
            case 'e':
                const win = window.open('', 'Canvas Image');

                const { domElement } = renderer;

                // Makse sure scene is rendered.
                renderer.render(scene, camera);

                const src = domElement.toDataURL();

                if (!win) return;

                win.document.write(`<img src='${src}' width='${domElement.width}' height='${domElement.height}'>`);
                break;

            default:
                break;
        }
    });
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(() => {
        animate();
    });

    let delta = clock.getDelta();
    
    // shaderMat.uniforms.u_time.value += delta;

    // if (leftIceCream != undefined) {
    //     leftIceCream.rotation.y += 0.01
    // }

    // if (middleIceCream != undefined) {
    //     middleIceCream.rotation.y += 0.01
    // }

    // if (rightIceCream != undefined) {
    //     rightIceCream.rotation.y += 0.01
    // }

    if (stats) stats.update();

    // if (controls) controls.update();

    renderer.render(scene, camera);
}

main()