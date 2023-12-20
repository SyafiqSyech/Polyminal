import React from 'react';
import { useParams } from 'react-router-dom';
import shapes from '../shapes.json';

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

    const { name, img } = shape;

  return (
    // Your existing ShapeDetail component code
    // Use the 'shape' object to display details
    <section>
        <div className="grid grid-cols-2 gap-6 p-10">
            <img src={`/img/${img}`} alt={`Image of ${name}`} className="border md:he"/>
            <div>
                <h1 className="font-bold">{name}</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ipsum
                    rerum facilis sit a fugit, voluptatem iste quasi quisquam voluptatum!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ipsum
                    rerum facilis sit a fugit, voluptatem iste quasi quisquam voluptatum!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ipsum
                    rerum facilis sit a fugit, voluptatem iste quasi quisquam voluptatum!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ipsum
                    rerum facilis sit a fugit, voluptatem iste quasi quisquam voluptatum!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ipsum
                    rerum facilis sit a fugit, voluptatem iste quasi quisquam voluptatum!</p>
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

export default ShapeDetail