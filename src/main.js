import './style.css'
import * as THREE from 'three'
import { addDefaultMeshes } from './addDefaultMeshes'
import { addsphereMeshes } from './addspheremeshes'

import { GeometryCompressionUtils } from 'three/examples/jsm/Addons.js'
import { addTexturedMeshes } from './addTexturedMeshes'
// addTexturedMesh
import { addPhongMesh } from './addphongmesh.js'
import { addStandardMesh } from './addstandardmesh.js'
import { addPhysicalMesh } from './addPhysicalMesh.js'
import Model from './Model.js'
import { SceneNode } from 'three/webgpu'
import { HDRI } from './environment.js'
import { WheelAdaptor } from 'three-story-controls'
import gsap from 'gsap'
import { postprocessing } from './postprocessing.js'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

// x
// :
// 1.7514018747331508
// y
// :
// 0.5307360414236355
// z
// :
// 35.028037494662975
const scene = new THREE.Scene()
let scene2
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)
const Clock = new THREE.Clock()
camera.position.set(1.75, 0.95, 34.5)

const renderer = new THREE.WebGLRenderer({ antialias: true })
const meshes = {}
const mixers = []

let composer = null
const cameraPositions = [
	{ x: 1.75, y: 0.833102668148886, z: 31.763657430587628 },
	{ x: 4.888458652045222, y: 0.7391582935385865, z: 27.432286544965372 },
	{ x: 0.17853876822329054, y: 0.7405525083009962, z: 21.984141476495534 },
]
const knightPositions = [
	{ x: 1.65, y: 1.05, z: 29 },
	{ x: 0.75, y: 0.99, z: 20 },
	{ x: 8.75, y: 1, z: 15 },
]
const music = ['/DISTANT.wav', '/GHOSTS.wav', '/HELIOPOLIS.mp3']
let counter = -1
const audio = document.getElementById('audio1')

const wheelAdaptor = new WheelAdaptor({ type: 'discrete' })
const lookAtTarget = new THREE.Vector3(0, 0, 0)
const enter = document.getElementById('enter')
enter.addEventListener('click', () => {
	gsap.to('#enterScreen', {
		opacity: 0,
		duration: 1,
		onComplete: () => {
			enter.style.display = 'none'
		},
	})
})
wheelAdaptor.connect()
wheelAdaptor.addEventListener('trigger', (e) => {
	audio.pause()
	counter++
	if (counter > cameraPositions.length - 1) {
		counter = 0
	}
	gsap.to(camera.position, {
		x: cameraPositions[counter].x,
		y: cameraPositions[counter].y,
		z: cameraPositions[counter].z,
		duration: 1,
		onComplete: ()=>{
			audio.src = music[counter]
			console.log(audio.src)
			audio.load()
			audio.play()	
		}
	})
	gsap.to(lookAtTarget, {
		x: knightPositions[counter].x,
		y: knightPositions[counter].y,
		z: knightPositions[counter].z,
		onUpdate: () => {
			camera.lookAt(lookAtTarget)
		},
		duration: 1,
	})

})

init()
// const controls = new OrbitControls(camera, renderer.domElement)

function init() {
	//
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	const light = new THREE.DirectionalLight(0xffffff, 3)
	light.position.set(5, 5, 5)
	scene.add(light)
	composer = postprocessing(scene, camera, renderer)

	instances()
	animate()
}
function instances() {
	const Castle = new Model({
		scene: scene,
		meshes: meshes,
		name: 'Castle',
		url: '/Castle.glb',
		// manager: loadingManager,
		scale: new THREE.Vector3(0.5, 0.5, 0.5),
		position: new THREE.Vector3(0.5, 0, 1),
	})
	Castle.init()
	const Knight = new Model({
		scene: scene,
		meshes: meshes,
		name: 'Knight',
		url: '/Knight.glb',
		// manager:loadingManager,
		scale: new THREE.Vector3(0.0075, 0.0075, 0.0075),
		position: new THREE.Vector3(2.75, 1.45, 29),
		rotation: new THREE.Vector3(0, Math.PI / 5, 0),
	})
	Knight.init()
	const Knight2 = new Model({
		scene: scene,
		meshes: meshes,
		name: 'Knight2',
		url: '/Knight2.glb',
		// manager: loadingManager,
		scale: new THREE.Vector3(2, 2, 2),
		position: new THREE.Vector3(2.75, 0.99, 20),
		rotation: new THREE.Vector3(0, Math.PI, 0),
	})
	Knight2.init()
	const Knight3 = new Model({
		scene: scene,
		meshes: meshes,
		name: 'Knight3',
		url: '/Knight3.glb',
		// manager: loadingManager,
		scale: new THREE.Vector3(2, 2, 2),
		position: new THREE.Vector3(2.75, 1, 25),
		// rotation: new THREE.Vector3(0, Math.PI, 0),
	})
	Knight3.init()
}

function animate() {
	// meshes.default.position.x += 0.1
	// meshes.default.scale.y += 0.1
	requestAnimationFrame(animate)

	for (const mixer of mixers) {
		// console.log(mixer)
		mixer.update(Clock.getDelta())
	}

	composer.composer.render()
}

// console.log(delta)
