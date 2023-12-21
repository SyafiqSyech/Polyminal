import shapes from "../shapes.json";
import ShapeCard from "../components/ShapeCard.tsx";
import { Canvas } from "@react-three/fiber";
import { TrackballControls, useGLTF } from "@react-three/drei";

const HeroLogo = () => {
  // const gltf = useLoader(GLTFLoader, '/model/hexa.gltf')

  return (
      <Canvas camera={{ fov: 35, position: [6, 6, 6]}}>
          <TrackballControls noZoom={true} noPan={true} dynamicDampingFactor={.2} rotateSpeed={2}/>
          <mesh>
            <pointLight position={[10, 8, 6]} intensity={700}/>
            <pointLight position={[-10, -8, -6]} intensity={700}/>
            <ambientLight intensity={.3}/>
            <boxGeometry args={[3, 3, 3]}/>
            <meshStandardMaterial color='#ef8c5e' roughness={1} metalness={0}/>
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
