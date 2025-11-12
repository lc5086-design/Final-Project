import * as THREE from 'three'

export const addPhongMesh = (xpos = 0, ypos = 0, zpos =0) => {
    const geometry = new THREE.TorusKnotGeometry( 0.5, 0.1, 256, 64 );
    const material = new THREE.MeshPhongMaterial( { 
        color: 0x3d9cfff,
        emissive: 0x072534,
        specular: 0x111111,
        shininess: 100,
        side: THREE.DoubleSide,
        reflectivity: 1,
        flatShading: false,

    } )
    const mesh = new THREE.Mesh(geometry,material);
    mesh.position.set(xpos, ypos, zpos)
    return mesh
}

    