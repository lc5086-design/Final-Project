import * as THREE from 'three'
import { ThreeMFLoader } from 'three/examples/jsm/Addons.js'
export const addsphereMeshes = () =>{
//
const geometry = new THREE.SphereGeometry (1, 32, 32)
const material = new THREE.MeshBasicMaterial({color:0xff0000})
const mesh = new THREE.Mesh(geometry,material)
mesh.position.x = 2;

return mesh


}
