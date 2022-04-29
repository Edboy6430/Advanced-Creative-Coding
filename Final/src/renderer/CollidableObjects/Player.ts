import { BoxGeometry, MeshNormalMaterial, Mesh } from "three"
import { CollidableObject } from "./CollidableObject"



export class Player extends CollidableObject {

    constructor(geometry: any, material: any) {

        super(geometry, material)
    }
}