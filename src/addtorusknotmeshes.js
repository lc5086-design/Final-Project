import * as THREE from 'three'
import { ThreeMFLoader } from 'three/examples/jsm/Addons.js'
export const addtorusMeshes = () => {}
//
const geometry = new THREE.TorusKnotGeometry( 0.4, 0.1, 100, 8)
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } )
const mesh = new THREE.Mesh( geometry, material );
mesh.position.x = -2;

return mesh 

