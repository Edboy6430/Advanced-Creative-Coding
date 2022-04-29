import { SphereGeometry, MeshNormalMaterial, Mesh } from "three"
import { CollidableObject } from "./CollidableObject"



export class PongBall extends CollidableObject {

    ballMesh: Mesh

    constructor(geometry: any, material: any) {

        super(geometry, material)

        this.ballMesh = new Mesh(geometry, material)
        this.ballMesh.scale.set(0.25, 0.25, 0.25)
    }
}