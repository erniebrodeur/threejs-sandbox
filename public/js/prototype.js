$(window).load(function() {

    init();
    animate();
});

game = {
    camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000),
    scene: new THREE.Scene(),
    renderer: new THREE.CanvasRenderer(),
    objects: []
}

function init() {

    game.camera.position.z = 1000;
    game.renderer.setSize(window.innerWidth, window.innerHeight);
    $("#canvas").append(game.renderer.domElement);

    addCube();
}

function addCube() {
    var geometry = new THREE.CubeGeometry(200, 200, 200);
    var material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true
    });

    mesh = new THREE.Mesh(geometry, material);
    game.scene.add(mesh);
}

function animate() {

    // note: three.js includes requestAnimationFrame shim
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    game.renderer.render(game.scene, game.camera);

}
