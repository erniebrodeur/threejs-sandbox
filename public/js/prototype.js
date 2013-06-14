$(window).load(function() {

    init();
    animate();
});

game = {
    camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000),
    scene: new THREE.Scene(),
    renderer: new THREE.CanvasRenderer(),
    stats: new Stats(),
    objects: []
}

function init() {

    game.camera.position.z = 1000;
    game.renderer.setSize(window.innerWidth, window.innerHeight);
    $("#canvas").append(game.renderer.domElement);

    initStats();
    addCube();
}
function initStats() {
    if (Stats) {
        console.log("Stats found, loading.");
        game.stats.className = "threejs_stats";
        $("#threejs_stats").append(game.stats.domElement);
    }
}
function addCube() {
    var geometry = new THREE.CubeGeometry(200, 200, 200);
    var material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true
    });
    var mesh = new THREE.Mesh(geometry, material);
    game.objects.push(mesh);
    game.scene.add(mesh);
}

function animate() {
    if (game.stats) game.stats.update();

    // note: three.js includes requestAnimationFrame shim
    requestAnimationFrame(animate);

    for(var mesh in game.objects) {
        game.objects[mesh].rotation.x += 0.01 + mesh * .001;
        game.objects[mesh].rotation.y += 0.02+ mesh * .001;
    }

    game.renderer.render(game.scene, game.camera);
}
