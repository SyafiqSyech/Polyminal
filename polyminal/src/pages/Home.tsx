import shapes from "../shapes.json";
import ShapeCard from "../components/ShapeCard.tsx";
import { Canvas } from "@react-three/fiber";
import { TrackballControls, useGLTF } from "@react-three/drei";

const HeroLogo = () => {
  // const gltf = useLoader(GLTFLoader, '/model/hexa.gltf')

  return (
      <Canvas camera={{ fov: 35, position: [2, 2, 2]}}>
          <TrackballControls noZoom={true} noPan={true} dynamicDampingFactor={.2} rotateSpeed={2}/>
          <mesh>
            <directionalLight position={[20, 8, 16]} intensity={6}lookAt={[0, 0, 0]}/>
            <directionalLight position={[-20, -8, -16]} intensity={6} lookAt={[0, 0, 0]}/>
            <ambientLight intensity={.1}/>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color='orange' roughness={.5} metalness={1}/>
          </mesh>
      </Canvas>
    );
}

const Home = () => {
  return (
    <div className="bg-black">
      <div className="fixed h-screen w-full z-[2]">
        <HeroLogo/>
      </div>
      <div className="h-screen relative">
        <p className="title titleBlur">POLYMINAL</p>
        <p className="title">POLYMINAL</p>
        <p className="title titleBorder z-10 notouch">POLYMINAL
          {/* <div className="titleHover"></div> */}
        </p>
      </div>
      <div className="h-screen mb-96 w-full flex justify-center items-center">
        <p className="z-10 h-fit w-96 pointer-events-none text-justify notouch">ini quote keren tentang polyminal yang keren. karena polyminal itu keren. Btw thanks matt udh ngerjain project labnya. Lorem ipsum bla bla bla. end of quote. thanks for watching dont for like to subscribe.</p>
      </div>
      <main className="w-full pb-24 flex justify-center items-center z-10 relative pointer-events-none notouch">
        <div className="relative w-full z-0 pointer-events-auto">
          {shapes.map((shape) => (
            <ShapeCard key="{id}" data={shape} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
