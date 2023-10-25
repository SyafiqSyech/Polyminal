import React from 'react'

// function ShapeCard() {
//   return (
//     // <div>shapeCard</div>
//     <div className="shadow-lg rounded-lg justify-item-center p-5" key={shape.id}>
//       {/* <img className="border border-black p-5" src="./img/cone.jpeg" alt="" /> */}
//       <h5 className="p-3 text-xl font-bold flex justify-center">{shape.name}</h5>
//     </div>
//   )
// }

const ShapeCard = (props: { data: { id: any; name: any; img: any }; }) => {
    const {id, name, img} = props.data;

    return (
        <div className="bg-slate-600 shadow-2xl rounded-lg justify-item-center p-5" key={id}>
            <img className="border border-black p-5" src={img} alt="" />
            <h5 className="p-3 text-xl font-bold flex justify-center">{name}</h5>
        </div>
    )
}

export default ShapeCard