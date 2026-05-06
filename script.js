// Three.js 3D Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('threejs-bg').appendChild(renderer.domElement);

// Add some geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x3498db, wireframe: true });
const cubes = [];

for (let i = 0; i < 10; i++) {
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = (Math.random() - 0.5) * 20;
    cube.position.y = (Math.random() - 0.5) * 20;
    cube.position.z = (Math.random() - 0.5) * 20;
    scene.add(cube);
    cubes.push(cube);
}

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cubes.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    });
    renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});