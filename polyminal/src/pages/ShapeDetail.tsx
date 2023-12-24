import { useParams } from "react-router-dom";
import shapes from "../shapes.json";
import ThreeShape from "../components/ThreeShape";
import DetailHover from "../components/DetailHover";
import { useState } from "react";
import Sky from "../components/Sky";

const ShapeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const shape = shapes.find((s) => s.id.toString() === id);
  const [ detail, setDetail ] = useState('')

  if (!shape) {
    return <div>Shape not found</div>;
  }

  const changeDetail = (txt: any) => {
    setDetail(txt)
  }

  console.log(shape.funfact)

  return (
    // Your existing ShapeDetail component code
    // Use the 'shape' object to display details
    <section className="">
      <div className="fixed h-screen w-full z-[-2]">
        <Sky />
      </div>
      <div className="fixed h-screen w-full z-[2]">
        <ThreeShape model={shape.model}/>
      </div>
      <div className="h-screen relative">
        <p className="smalltitle caps titleBlur">{shape.name}</p>
        <p className="smalltitle caps">{shape.name}</p>
        <p className="smalltitle caps titleBorder z-10 notouch">
          {shape.name}
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
        {/* <p className="text-center caps">Other Names</p>
        <p className="text-center">{shape.names}</p> */}
        <div className="w-full grid grid-cols-[1fr_3fr_1fr]">
          <div className="flex flex-col items-center">
            <DetailHover mouseLeave={() => {changeDetail('')}} mouseEnter={() => {changeDetail(shape.elements)}} text={"Elements"} origin={0}/>
            <DetailHover mouseLeave={() => {changeDetail('')}} mouseEnter={() => {changeDetail(shape.conway)}} text={"Conway Notation"} origin={0}/>
            <DetailHover mouseLeave={() => {changeDetail('')}} mouseEnter={() => {changeDetail(shape.references)}} text={"References"} origin={0}/>
            <DetailHover mouseLeave={() => {changeDetail('')}} mouseEnter={() => {changeDetail(shape.facesbysides)}} text={"Faces by Sides"} origin={0}/>
          </div>
          <div className="flex justify-center items-center">
            <p className="z-10 relative text-5xl font-bold text-center">{detail}</p>
          </div>
          <div className="flex flex-col items-center">
            <DetailHover mouseLeave={() => {changeDetail('')}} mouseEnter={() => {changeDetail(shape.schlafli)}} text={"Schläfli Symbol"} origin={1}/>
            <DetailHover mouseLeave={() => {changeDetail('')}} mouseEnter={() => {changeDetail(shape.wyhoff)}} text={"Wyhoff Symbol"} origin={1}/>
            <DetailHover mouseLeave={() => {changeDetail('')}} mouseEnter={() => {changeDetail(shape.vertexfig)}} text={"Vertex Config."} origin={1}/>
            <DetailHover mouseLeave={() => {changeDetail('')}} mouseEnter={() => {changeDetail(shape.angle)}} text={"Angle"} origin={1}/>
          </div>
        </div>
        <div className="w-full text-justify pointer-events-none notouch z-10 relative">
            {shape.funfact.map((fact, id) => (
              <div className="h-screen w-full px-48 flex flex-col justify-center text-justify facts">
                <p className="w-[28rem] pb-4 caps">{fact.title}</p>
                <p className="w-[28rem]">{fact.content}</p>
              </div>
            ))}
        </div>
      </div>

      {/* <div className="pt-20 pb-20 pr-12 flex items-center justify-end cursor-pointer">
        <a href="../pages/Home.tsx">Go To Home</a>
      </div> */}

    </section>
  );
};

export default ShapeDetail;
