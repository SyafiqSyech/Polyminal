import { Suspense } from "react";
import { useParams } from "react-router-dom";
import shapes from "../shapes.json";
import { Canvas } from "@react-three/fiber";
import { TrackballControls, useGLTF } from "@react-three/drei";

const Model = (props: { modelPath: any; shapeName: any; customColors: any }) => {
  const { nodes } = useGLTF(props.modelPath);
  return (
      <group {...props} dispose={null}>
          {nodes && nodes[props.shapeName] && nodes[props.shapeName].geometry && (
              <mesh
                  geometry={nodes[props.shapeName].geometry}
                  material-color={props.customColors.mesh}
              />
          )}
      </group>
  );
}

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
    <section>
      <div className="App canvas">
        <ThreeScene />
      </div>
      <div className="grid grid-cols-2 gap-6 p-10">
        <img
          src={`/img/${img}`}
          alt={`Image of ${name}`}
          className="border md:he"
        />
        <div>
          <h1 className="font-bold">{name}</h1>
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
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            ipsum rerum facilis sit a fugit, voluptatem iste quasi quisquam
            voluptatum!
          </p>
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
