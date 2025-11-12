import * as THREE from 'three'

export const addStandardMesh = () => ({ xpos = 0, ypos = 0, zpos = 0 }) => {
    const geometry = new THREE.TorusknotGeometry (0.5, 0.1, 256, 64)
    const material = new THREE.MeshStandardMaterial( 
        { color: 0xb87333,
        metalness: 0.7,
        roughness: 0.2,
        emissive: 0x0a0a0a,
        emissiveIntensity: 0.3,  
        clearCoat: 1.0,
        clearCoatRoughness: 0.1 
        })
   
    
    const mesh = new THREE.Mesh( geometry, material )
    mesh.position.set (xpos, ypos, zpos)
    return mesh 

} 