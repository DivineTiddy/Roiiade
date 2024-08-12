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
      <button className="animate-bounce  flex justify-center items-center w-[63px] h-[63px] rounded-[78px] bg-[#3632FF]">
      <svg
          width="55"
          height="54"
          viewBox="0 0 123 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM122.061 13.0607C122.646 12.4749 122.646 11.5251 122.061 10.9393L112.515 1.3934C111.929 0.807611 110.979 0.807611 110.393 1.3934C109.808 1.97918 109.808 2.92893 110.393 3.51472L118.879 12L110.393 20.4853C109.808 21.0711 109.808 22.0208 110.393 22.6066C110.979 23.1924 111.929 23.1924 112.515 22.6066L122.061 13.0607ZM2 13.5L121 13.5L121 10.5L2 10.5L2 13.5Z"
            fill="white"
          />
        </svg>
      </button>
      </Link>
    </div>
  );
};

export default Footer;
