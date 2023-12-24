import shapes from "../shapes.json";
import ShapeCard from "../components/ShapeCard.tsx";
import ThreeShape from "../components/ThreeShape.tsx";
import Sky from "../components/Sky.tsx";
import ThreeTest from "../components/ThreeTest.tsx";

const Home = () => {
  return (
    <div className="">
      <div className="fixed h-screen w-full z-[-2]">
        <Sky />
      </div>
      <div className="fixed h-screen w-full z-[2]">
        <ThreeShape model={"Icosahedron"} />
        {/* <ThreeShape name={shapes[4].name} model={shapes[4].model} color={shapes[2].color} /> */}
      </div>
      <div className="w-full mb-36">
        <div className="h-screen relative">
          <p className="title titleBlur">POLYMINAL</p>
          <p className="title">POLYMINAL</p>
          <p className="title titleBorder z-10 notouch">POLYMINAL</p>
        </div>
        <div className="h-screen w-full flex justify-center items-center">
          <p className="z-10 h-fit w-96 pointer-events-none text-justify notouch">
            ini quote keren tentang polyminal yang keren. karena polyminal itu
            keren. Btw thanks matt udh ngerjain project labnya. Lorem ipsum bla
            bla bla. end of quote. thanks for watching dont for like to subscribe.
          </p>
        </div>
      </div>
      <div className="relative w-full pointer-events-auto flex justify-center items-center flex-wrap pb-48 px-[3%]">
        {shapes.map((shape, id) => (
          <ShapeCard key={id} data={shape} />
        ))}
      </div>
    </div>
  );
};

export default Home;
