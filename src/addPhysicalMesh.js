import * as THREE from 'three'

export const addPhysicalMesh = () => {
    const geometry = new THREE.TorusKnotGeometry( 0.5, 0.1, 256, 64 )
    const material = new THREE.MeshPhysicalMaterial( {
        color: 0x66aaf,
        metalness: 0.0,
        roughness: 0.05,
        metalness: 1.0,
        clearcoat: 1.0,
        clearcoatRoughness: 0.06,
        transmission: 1.0,
        ior: 1.5,
        thickness: 1.0,
        attenuationColor: 0x88dff,
        attenuationDistance: 2.5,
        sheen: 1.0,
        sheenColor: new THREE.Color (0xff66ff),
        sheenRoughness: 0.6,
        iridescence: 1.0, 
        iridescenceIOR: 1.3,
        iridescenceThicknessRange: (100, 400) 
     } )
    const mesh = new THREE.Mesh( geometry, material )
    return mesh
}
