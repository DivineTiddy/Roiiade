import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="relative flex justify-between items-center  bg-[#000000]  mt-[-50px] w-full h-[63px] ">
      <div className=" flex relative items-center overflow-hidden w-[235px] h-full  ">
        <div className="home_brands flex   w-[370px] ">
          <p className="item_Home itemHome1   text-[16px] text-[#C2C2C2]">Twitter</p>
          <p className="item_Home itemHome2   text-[16px] text-[#C2C2C2]">Disco</p>
          <p className="item_Home itemHome3   text-[16px] text-[#C2C2C2]">Git</p>
          <p className="item_Home itemHome4   text-[16px] text-[#C2C2C2]">Tele</p>


        </div>
        {
          //................
        }
        
      </div>
      <Link to="/Join">
      <button className="flex justify-center items-center w-[63px] h-[63px] rounded-[78px] bg-[#3632FF]">
        <i className="font-extrabold text-[32px] leading-[89.9%]">👋</i>
      </button>
      </Link>
    </div>
  );
};

export default Footer;
