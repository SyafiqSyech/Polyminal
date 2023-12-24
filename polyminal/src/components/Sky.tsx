import { OrbitControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';

const Sky = () => {
  function SkyBox() {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();

    // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
    const texture = loader.load([
      "/skybox/right.png",
      "/skybox/left.png",
      "/skybox/top.png",
      "/skybox/bottom.png",
      "/skybox/front.png",
      "/skybox/back.png",
    ]);

    // Set the scene background property to the resulting texture.
    scene.background = texture;
    return null;
  }

  return(
    <>
      <Canvas>
        <OrbitControls autoRotate={true}/>
        <SkyBox/>
      </Canvas>
    </>
  )
}

export default Sky