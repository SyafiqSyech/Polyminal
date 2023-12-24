import { TrackballControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface ModelProps {
  modelPath: string;
  shapeName: string;
  customColors: {
    mesh: string; // Adjust the type according to your needs
  };
}

const Model: React.FC<ModelProps> = () => {
  const gltf = useLoader(GLTFLoader, "/model/Dodecahedron.glb");

  return (
    <>
      <primitive
        object={gltf.scene}
      />
    </>
  );
}

const ThreeTest = () => {
  return (
    <>
      <Canvas camera={{ fov: 35, position: [2, 2, 2] }}>
        <Suspense fallback={null}>
          <TrackballControls
            noZoom={true}
            noPan={true}
            dynamicDampingFactor={0.2}
            rotateSpeed={2}
          />
          {/* <pointLight position={[0, -50, 0]} intensity={500}/> */}
          <axesHelper/>
          <directionalLight position={[0, 50, 50]} intensity={1}/>
          <directionalLight position={[-50, -50, 50]} intensity={1}/>
          <directionalLight position={[50, 0, -50]} intensity={1}/>
          <Model modelPath={''} shapeName={''} customColors={{
            mesh: ''
          }} />
        </Suspense>
      </Canvas>
    </>
  )
}

export default ThreeTest