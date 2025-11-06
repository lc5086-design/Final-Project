import * as THREE from 'three'
import { addDefaultMeshes } from './addDefaultMeshes';
import { addsphereMeshes } from './addspheremeshes';

import { GeometryCompressionUtils } from 'three/examples/jsm/Addons.js';
import (addDefaultMeshes)
const scene = new THREE.Scene()
let scene2;
const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
)
camera.position.set(0, 0, 5)
const renderer = new THREE.WebGLRenderer({ antialias: true })
const meshes = {}

init()
function init() {
//
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

//add our meshes into our container then add to scene
meshes.default = addDefaultMeshes ()
meshes.sphere = addsphereMeshes ()

scene.add(meshes.sphere)




//add to scene
scene.add(meshes.default)

const torusGeometry = new THREE.TorusGeometry( 1, 0.4, 16, 100 );
const material2 = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const torus = new THREE.Mesh( torusGeometry, material2 );
scene.add( torus );
torus.position.x = -3;

animate()
}

function animate() {
// meshes.default.position.x += 0.1
// meshes.default.scale.y += 0.1
requestAnimationFrame(animate)
renderer.render(scene, camera)
}


