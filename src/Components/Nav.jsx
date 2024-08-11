import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className=" z-10 flex justify-between items-center w-full h-[22px]  ">
      <p className="m-0 font-extrabold text-[24px] leading-[89.9%] bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF,#6C7BFF] via-[#FF00D6] to-[#0500FF,#6AB8FF]">
        ROllADE&quot;
      </p>
     <Link to="/">
     <svg
      className="cursor-pointer"
        width="19"
        height="10"
        viewBox="0 0 19 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1L19 1M5.43892e-08 9L19 9" stroke="white" strokeWidth="2" />
      </svg>
     </Link>
    </nav>
  );
};

export default Nav;

