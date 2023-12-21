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
        <Canvas camera={{ position: [2, 2, 2] }}>
            <Suspense fallback={null}>
                <TrackballControls />
                <ambientLight />
                <Model
                    modelPath={`/model/${model}`}
                    shapeName={name}
                    customColors={{ mesh: 'red' }}
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
    <section>
      <div className="App canvas">
        <ThreeScene />
      </div>
      {/* <div className="grid grid-cols-2 gap-6 p-10"> */}
      <div className="pt-10">
        {/* <img
          src={`/img/${img}`}
          alt={`Image of ${name}`}
          className="border md:he"
        /> */}
        <div className="flex flex-col justify-center px-10">
          <h1 className="font-bold flex justify-center">{name}</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            ipsum rerum facilis sit a fugit, voluptatem iste quasi quisquam
            voluptatum!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            ipsum rerum facilis sit a fugit, voluptatem iste quasi quisquam
            voluptatum!
          </p>
          {/* <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            ipsum rerum facilis sit a fugit, voluptatem iste quasi quisquam
            voluptatum!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            ipsum rerum facilis sit a fugit, voluptatem iste quasi quisquam
            voluptatum!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            ipsum rerum facilis sit a fugit, voluptatem iste quasi quisquam
            voluptatum!
          </p> */}
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
