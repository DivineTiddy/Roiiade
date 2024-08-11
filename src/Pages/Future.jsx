import FutureImage from "../Components/FutureImage";
import Nav from "../Components/Nav";

const Future = () => {
  return (
    <div className="flex flex-col overflow-hidden  w-[343px] h-auto ">
      <Nav />
      {/* IMAGE BACKGROUND  */}
      <div className="h-[400px]  ">
        <FutureImage/>
      

      </div>

     {/* TEXT CONTAINER */}
     <div className="flex flex-col justify-around mt-[-170px] w-full h-[400px] ">
        <p className="w-[200px] ml-[-90px] mt-[-20px] rotate-90 text-[#C2C2C2] text-[16px]  leading-[89.9%] ">TECCHNOLOGY</p>
     <p className="w-auto h-auto text-[#FFFFFF] font-extrabold text-[50px] leading-[89.9%]  ">
        The most <br /> trusted <br /> way to build <br /> future.
      </p>
      <p className="text-[#C2C2C2] text-[16px] leading-[130.9%]">
        Rolade SDK is a state-of-the-art blockchain framework that powers the
        Rolade Hub and its rapidly expanding orbit of sovereign chains.
      </p>
      <p className="text-[#C2C2C2] text-[16px] leading-[130.9%]">
        Developers can use the SDK to build innovative applications that create
        value through exchange with the Rolade Hub.
      </p>
     </div>
    </div>
  );
};

export default Future;
