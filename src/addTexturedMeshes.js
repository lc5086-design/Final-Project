import * as THREE from 'three';

export const addTexturedMeshes = () => {
//
const tloader = new THREE.TextureLoader();
const color = tloader.load ('/T1/color.png'); 
const normal = tloader.load('/T1/normal.png');
const ao = tloader.load('/T1/ao.png');
const displace = tloader.load('/T1/displacement.png');

const geometry = new THREE.SphereGeometry(1, 250, 256);
const material = new THREE.MeshPhysicalMaterial({
    //color; 0xff0000,
    normalMap: normal,
    displacementMap: displace,
    displacementScale: 0.2,
    aoMap: ao,
    aoMapIntensity: 1,
    map: color, 
    emissive: 0x222222,
    metalness: 0.1,
    roughness: 0,
    transmission: 0.5,

   
})

const mesh = new THREE.Mesh(geometry, material);
return mesh;


}