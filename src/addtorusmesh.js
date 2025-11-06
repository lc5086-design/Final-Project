import * as THREE from 'three'
import { ThreeMFLoader } from 'three/examples/jsm/Addons.js'
export const addtorusMeshes = () => {}
//
const geometry = new THREE.TorusGeometry (1, 32, 32) 
const material = new THREE.MeshBasicMaterial ({color:0x00ff00})
const mesh = new THREE.Mesh(geometry,material)
mesh.position.x = -2;

return mesh 



