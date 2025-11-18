import * as THREE from 'three'
import { addDefaultMeshes } from './addDefaultMeshes';
import { addsphereMeshes } from './addspheremeshes';

import { GeometryCompressionUtils } from 'three/examples/jsm/Addons.js';
// import (addDefaultMeshes)
// import (addTexturedMeshes)
import { addTexturedMeshes } from './addTexturedMeshes';
// addTexturedMesh
import { addPhongMesh } from './addphongmesh.js';
import { addStandardMesh } from './addstandardmesh.js';
import { addPhysicalMesh } from './addPhysicalMesh.js';
import Model from './Model.js';
import { SceneNode } from 'three/webgpu';


const scene = new THREE.Scene()
let scene2;
const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
)
const Clock = new THREE.Clock();
camera.position.set(0, 0, 5)
const renderer = new THREE.WebGLRenderer({ antialias: true })
const meshes = {}
const mixers = []


init()
function init() {
//
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

//add our meshes into our container then add to scene
meshes.default = addDefaultMeshes ()
meshes.sphere = addsphereMeshes ()
meshes.texturedMeshes = addTexturedMeshes ()

scene.add(meshes.sphere)
scene.add (meshes.texturedMeshes)
//add to scene
scene.add(meshes.default)

const torusGeometry = new THREE.TorusGeometry( 1, 0.4, 16, 100 );
const material2 = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const torus = new THREE.Mesh( torusGeometry, material2 );
scene.add( torus );
torus.position.x = -3;

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(5, 5, 5);
scene.add(light);

instances()
animate()
}
function instances(){
    const flower =new Model({
        scene: scene,
        meshes: meshes,
        name: 'flower',
        url: '/flowers.glb',
        scale: new THREE.Vector3(2,2,2),
        position: new THREE.Vector3 (-0,-0.8,3),
        animationState: true,
        mixers: mixers,


    } )
flower.init()
} 

function animate() {
// meshes.default.position.x += 0.1
// meshes.default.scale.y += 0.1
requestAnimationFrame(animate)
meshes.texturedMeshes.rotation.y += 0.0035
meshes.texturedMeshes.rotation.x += 0.0025
meshes.texturedMeshes.material.emissiveIntensity =
    1.25 + Math.sin(Clock.getElapsedTime() * 4) * 0.4
meshes.texturedMeshes.material.displacementScale =
    0.15 + Math.sin(Clock.getElapsedTime() * 2) * 0.2
    
//meshes.planetone.position.x = Math.sin(Clock.getElapsedTime()) * 1.5;
//meshes.planetone.position.y = Math.cos(Clock.getElapsedTime()) * 1.5;
//meshes.planetwo.position.x = Math.sin(Clock.getElapsedTime() * 0.75) * 3.0;
 //meshes.planetwo.position.y = Math.cos(Clock.getElapsedTime() * 0.75) * 3.0;
//meshes.planethree.position.x = 
   // Math.sin(Clock.getElapsedTime() * 0.5) * 4.5;
//meshes.planethree.position.y = 
  //  Math.cos(Clock.getElapsedTime() * 0.5) * 4.5;
//meshes.planetTwo.rotation.y += 0.001
//meshes.PlanetTwo.rotation.z += 0.003
//meshes.planetThree.rotation.x += 0.003
//meshes.planetThree.rotation.z -= 0.003

// const delta = Clock.getDelta();
for (const mixer of mixers) {
    // console.log(mixer)
    mixer.update(Clock.getDelta());
}
renderer.render(scene, camera)





// console.log(delta)



}


