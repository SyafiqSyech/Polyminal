import { TrackballControls, useGLTF } from '@react-three/drei';
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

const Model: React.FC<ModelProps> = (props: {model: any}) => {
  return (
    <>
      
    </>
  );
}

const ThreeShape = (props: {model: any}) => {
  const gltf = useLoader(GLTFLoader, "/model/"+props.model+".glb");

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
          <directionalLight position={[0, 0, 50]} intensity={1}/>
          <directionalLight position={[0, 50, 0]} intensity={1}/>
          <directionalLight position={[50, 0, 0]} intensity={1}/>
          <directionalLight position={[0, 0, -50]} intensity={1}/>
          <directionalLight position={[0, -50, 0]} intensity={1}/>
          <directionalLight position={[-50, 0, 0]} intensity={1}/>
          <primitive
            object={gltf.scene}
          />
        </Suspense>
      </Canvas>
    </>
  )
}

export default ThreeShape