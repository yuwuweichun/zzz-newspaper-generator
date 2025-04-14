import * as THREE from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

/**
 * loadGLTFModel
 */
const loader = new GLTFLoader()
const loadGLTFModel = (path, onload) => {
    loader.load(
        path,
        (gltf) => {
            const model = gltf.scene
            onload(model)

        },
        (xhr) => {
            const currentProgress = (xhr.loaded / xhr.total)
            if (currentProgress == 1) {
                console.log(`${path} has been loaded`)
            }
        },
        (error) => {
            console.error(`Failed to load ${path}\n`, error)
        }
    )
}

export { loadGLTFModel }