import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import shapes from "../shapes.json";
import { Canvas } from "@react-three/fiber";
import { TrackballControls, useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial } from 'three';

interface ModelProps {
  modelPath: string;
  shapeName: string;
  customColors: {
    mesh: string; // Adjust the type according to your needs
  };
}



const Model: React.FC<ModelProps> = (props) => {
  const { nodes } = useGLTF(props.modelPath);

  if (!nodes || !nodes[props.shapeName] || !nodes[props.shapeName].geometry) {
    return null; // or handle the case where geometry is not available
  }

  return (
    <group>
      <mesh geometry={nodes[props.shapeName].geometry}>
        <meshStandardMaterial
          roughness={.5} metalness={1}
          attach="material"
          color={props.customColors.mesh}
        />
      </mesh>
    </group>
  );
};

// function Model(props) {
//   const { nodes } = useGLTF(props.modelPath);
//   return (
//       <group {...props} dispose={null}>
//           {nodes && nodes[props.shapeName] && nodes[props.shapeName].geometry && (
//               <mesh
//                   geometry={nodes[props.shapeName].geometry}
//                   material={<meshStandardMaterial attach="material" color={props.customColors.mesh} />}              />
//           )}
//       </group>
//   );
// }

const ShapeDetail = () => {
  //   const { id } = useParams<{ id: string }>();
  //   const shape = shapes.find((s) => s.id.toString() === id);

  //   if (!shape) {
  //     return <div>Shape not found</div>;
  //   }
  // Retrieve the shape ID from the URL parameters
  const { id } = useParams<{ id: string }>();
  const shape = shapes.find((s) => s.id.toString() === id);

  if (!shape) {
    return <div>Shape not found</div>;
  }

  const { name, img, model } = shape;

  function ThreeScene() {
    return (
        <Canvas camera={{ fov: 35, position: [2.5, 2.5, 2.5]}}>
            <Suspense fallback={null}>
                <TrackballControls noZoom={true} noPan={true} dynamicDampingFactor={.2} rotateSpeed={2}/>
                <directionalLight position={[20, 8, 36]} intensity={6}lookAt={[0, 0, 0]}/>
                <directionalLight position={[-20, -8, -16]} intensity={6} lookAt={[0, 0, 0]}/>
                <ambientLight intensity={.3}/>
                <Model
                    modelPath={`/model/${model}`}
                    shapeName={name}
                    customColors={{ mesh: '#5e5dad' }}
                />
            </Suspense>
        </Canvas>
    );
  }

  // function ThreeScene() {
  //   return (
  //     <Canvas camera={{ position: [2, 2, 2] }}>
  //       <Suspense fallback={null}>
  //         <TrackballControls />
  //         <Model customColors={{ mesh: "red" }} />
  //       </Suspense>
  //     </Canvas>
  //   );
  // }

  // function Model(props) {
  //   // const group = useRef();
  //   const { nodes, materials } = useGLTF("/model/cone.gltf");
  //   return (
  //     <group {...props} dispose={null}>
  //       <mesh
  //         geometry={nodes.Cone.geometry}
  //         // material={materials["Material.004"]}
  //         material-color={props.customColors.mesh}
  //       />
  //     </group>
  //   );
  // }

  return (
    // Your existing ShapeDetail component code
    // Use the 'shape' object to display details
    <section className="bg-black">
      <div className="fixed h-screen w-full z-[2]">
        <ThreeScene/>
      </div>
      <div className="h-screen relative">
        <p className="smalltitle titleBlur">{name}</p>
        <p className="smalltitle">{name}</p>
        <p className="smalltitle titleBorder z-10 notouch">{name}
          {/* <div className="titleHover"></div> */}
        </p>
      </div>
      {/* <div className="grid grid-cols-2 gap-6 p-10"> */}
      <div className="pt-10">
        {/* <img
          src={`/img/${img}`}
          alt={`Image of ${name}`}
          className="border md:he"
        /> */}
        <div className="h-screen z-10 flex items-center relative pointer-events-none notouch">
          <div className="grid grid-cols-2 gap-x-5 pl-12">
            <p>Faces</p>
            <p>Faces</p>
            <p>Edges</p>
            <p>Edges</p>
            <p>Vertices</p>
            <p>Vertices</p>
            <p>Schläfli symbol</p>
            <p>Schläfli symbol</p>
          </div>
        </div>
        <div className="h-screen w-full flex justify-center items-center">
          <p className="z-10 h-fit w-[32rem] pointer-events-none text-justify notouch">ini quote keren tentang polyminal yang keren. karena polyminal itu keren. Btw thanks matt udh ngerjain project labnya. Lorem ipsum bla bla bla. end of quote. thanks for watching dont for like to subscribe.</p>
        </div>
      </div>
    </section>
  );
};

// export default ShapeDetail;
// const ShapeDetail = () => {
//   return (
//     // <h1>Shape Detail</h1>
//     <section>
//         <div className="grid grid-cols-2 gap-6 p-10">
//             <img src="public/img/torus.png" alt="" className="md:he"/>
//             <div>
//                 <h1 className="font-bold">Fun Fact</h1>
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ipsum
//                     rerum facilis sit a fugit, voluptatem iste quasi quisquam voluptatum!</p>
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ipsum
//                     rerum facilis sit a fugit, voluptatem iste quasi quisquam voluptatum!</p>
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ipsum
//                     rerum facilis sit a fugit, voluptatem iste quasi quisquam voluptatum!</p>
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ipsum
//                     rerum facilis sit a fugit, voluptatem iste quasi quisquam voluptatum!</p>
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ipsum
//                     rerum facilis sit a fugit, voluptatem iste quasi quisquam voluptatum!</p>
//             </div>
//             <div>
//                 <h1 className="font-bold">Fun Fact</h1>
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ipsum
//                     rerum facilis sit a fugit, voluptatem iste quasi quisquam voluptatum!</p>
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ipsum
//                     rerum facilis sit a fugit, voluptatem iste quasi quisquam voluptatum!</p>
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ipsum
//                     rerum facilis sit a fugit, voluptatem iste quasi quisquam voluptatum!</p>
//             </div>
//         </div>
//     </section>
//   )
// }

export default ShapeDetail;
