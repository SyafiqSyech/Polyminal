import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/ShapeDetail/${id}`);
      };

    return (
        <div 
            className="group hover:bg-white cursor-pointer w-full notouch" 
            onClick={handleClick}>
            {/* <img className="border border-black p-5" src={`/img/${img}`} alt=""/> */}
            <h5 className="p-5 text-center group-hover:text-black">{name}</h5>
        </div>
    )
}

export default ShapeCard