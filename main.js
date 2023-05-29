import { BoxBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  Color
} from "three";

// Get a reference to the container element that will hold our scene
const container = document.querySelector('#app');

// Create the Scene
const scene = new Scene();

// Set the background color
scene.background = new Color('skyblue');

// Create a camera
const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 100;

const camera = new PerspectiveCamera(fov, aspect, near, far);

// Move the camera back so we can view the scene 
camera.position.set(0, 0, 10);
// camera.position.x = 0;
// camera.position.y = 0;
// camera.position.z = 0;

// Create a geometry 
const geometry = new BoxBufferGeometry(2, 2, 2);

// Create a default (white) Basic material 
const material = new MeshBasicMaterial();

// Create a Mesh containing the geometry and material
const cube = new Mesh(geometry, material);

// Add the Mesh to the Scene
scene.add( cube );

// Create the renderer
const renderer = new WebGLRenderer();

// Set the renderer to the same size as out container element
renderer.setSize( container.clientWidth, container.clientHeight );

// Set the pizel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio( window.devicePixelRatio );

// Add the automatically created <canvas> element to the page
container.append( renderer.domElement );

// Render, or 'create a still image', of the scene
renderer.render(scene, camera);