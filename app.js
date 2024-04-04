import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Loader
const loader = new OBJLoader();
loader.load(
    'path/to/your/model.obj', // e.g., 'assets/model.obj'
    function (object) {
        scene.add(object);
        object.position.set(0, 0, 0);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    function (error) {
        console.log('An error happened');
    }
);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
