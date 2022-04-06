var canvas = document.querySelector("canvas");
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth/innerHeight,
                0.01,
                1000
            );
var renderer = new THREE.WebGLRenderer({canvas: canvas});;
renderer.setSize(window.innerWidth, window.innerHeight); 
alpha:true;
var loader = new THREE.GLTFLoader();

var obj;
loader.load("terre2.glb",function(gltf){
    obj = gltf.scene;
    scene.add(gltf.scene)
});
scene.background = new THREE.Color(0xffffff);

const light = new THREE.AmbientLight( 0x404040, 5 ); 
scene.add( light );
camera.position.set(0, 0, 10);
function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
scene.scale.x = 4;
scene.scale.y = 4;
scene.scale.z = 4;
scene.translateY( 1 );
/Faire en sorte que la 3D soit a la meme position si la fenetre change de taille/

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();

renderer.setSize( window.innerWidth, window.innerHeight );
//

}
function rotationterre(){
    requestAnimationFrame(rotationterre);
    scene.rotation.y += 0.005;
    scene.position.set(0,1,0);
    renderer.render(scene,camera);
}
rotationterre()

let test = document.getElementById("jouer");
