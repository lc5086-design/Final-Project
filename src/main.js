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
import { HDRI } from './environment.js';
import {WheelAdaptor} from 'three-story-controls';
import  gsap  from 'gsap';
import { postprocessing } from './postprocessing.js';  



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
const loadingManager = {}
scene.background = HDRI()
scene.environment = HDRI()
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
let composer = null;    
const wheelAdaptor = new WheelAdaptor({ type: 'discrete' })
wheelAdaptor.connect()
wheelAdaptor.addEventListener('trigger', (e) => {

	gsap.to(camera.position, {
		x: camera.position.x + 15,
		duration: 2,
		ease: 'back.inOut',
	})
})
init()

function init() {
//
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

//add our meshes into our container then add to scene
//meshes.default = addDefaultMeshes ()
//meshes.sphere = addsphereMeshes ()
//meshes.texturedMeshes = addTexturedMeshes ()

//scene.add(meshes.sphere)
//scene.add (meshes.texturedMeshes)
//add to scene
// scene.add(meshes.default)

//const torusGeometry = new THREE.TorusGeometry( 1, 0.4, 16, 100 );
//const material2 = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
//const torus = new THREE.Mesh( torusGeometry, material2 );
//scene.add( torus );
//torus.position.x = -3;

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(5, 5, 5);
scene.add(light);
composer=postprocessing(scene, camera, renderer)


instances()
animate()
}
function instances(){
        const Car1 = new Model({
            scene: scene,
            meshes: meshes,
            name: 'Car1',
            url: '/Car1.glb',
            // manager:loadingManager,
            scale: new THREE.Vector3(80,80,80),
            position: new THREE.Vector3 (0,-0.35,0),

    } )
    Car1.init()
   const Car2 = new Model({
            scene: scene,
            meshes: meshes,
            name: 'Car2',
            url: '/Car2.glb',
            // manager: loadingManager,
            scale: new THREE.Vector3(0.5,0.5,0.5),
            position: new THREE.Vector3 (15,1,-5)
        })
    Car2.init()
        const Car3 = new Model({
            scene: scene,
            meshes: meshes,
            name: 'Car3',
            url: '/Car3.glb',
            // manager: loadingManager,
            scale: new THREE.Vector3(80,80,80),
            position: new THREE.Vector3 (30,1,-5)

        } )
        Car3.init()
        const Car4 = new Model({
            scene: scene,
            meshes: meshes,
            name: 'Car4',
            url: '/Car4.glb',
            // manager: loadingManager,
            scale: new THREE.Vector3(0.8,0.8,0.8),
            position: new THREE.Vector3 (45,1,-5)
        } )
Car4.init()
        const Car5 = new Model({
            scene: scene,
            meshes: meshes,
            name: 'Car5',
            url: '/Car5.glb',
            // manager: loadingManager,
            scale: new THREE.Vector3(0.000067,0.000067,0.000067),
            position: new THREE.Vector3 (60,1,-5)
        } )
Car5.init()
}
    // const flower =new Model({
    //     scene: scene,
    //     meshes: meshes,
    //     name: 'flower',
    //     url: '/flowers.glb',
    //     scale: new THREE.Vector3(2,2,2),
    //     position: new THREE.Vector3 (-0,-0.8,3),
    //     animationState: true,
    //     mixers: mixers
    // )}


    

//flowers.init()
// }

function animate() {

// meshes.default.position.x += 0.1
// meshes.default.scale.y += 0.1
requestAnimationFrame(animate)
//meshes.texturedMeshes.rotation.y += 0.0035
//meshes.texturedMeshes.rotation.x += 0.0025
//meshes.texturedMeshes.material.emissiveIntensity =
//    1.25 + Math.sin(Clock.getElapsedTime() * 4) * 0.4
//meshes.texturedMeshes.material.displacementScale =
//   0.15 + Math.sin(Clock.getElapsedTime() * 2) * 0.2
    
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
//renderer.render(scene, camera)
composer.composer.render();

// function mouseclick() {
//     window.addEventListener ('click', (event) => {
//         PointerEvent.x = (event.clientX/window, 
//             innerWidth) * 2-1
//             PointerEvent.y = (event.clientY/ window,
//                 innerHeight) * -2 +1
//         raycaster.setFromCamera(mouse, camera)
//         const inersects = raycaster.intersectObjects(scene.children,)
//         for (let i = 0; i < inersects.length; i++) {
//             let object = intersects [i].object
//             while(object){
//                 if (object.userData.groupName === 'basic'){
//                     gsap.to(meshes.default.material.color,{
//                         r: Math.random(),
//                         g: Math.random(),
//                         b: Math.random(),
//                         duration: 1,
//                     })
//                     break
//                 }else if (object.userData.groupName === 'standard'){
//                     gsap.to(meshes.standard.scale,{
//                         x:3,
//                         y:3,
//                         z:3,
//                         duration:1,
//   })
//                 object = object.parent 
  

}



// console.log(delta)




 
