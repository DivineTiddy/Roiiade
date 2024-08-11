import Nav from "../Components/Nav";
import "../Components/Footer.css";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <>
    <div className="h-auto flex flex-col  justify-end w-[343px]  ">
      <section className="flex flex-col justify-between  h-[350px] ">
        <Nav />
        <div className="my-13">
          <p className="text-[60px] font-extrabold w-full  text-[#FFFFFF] leading-[89.9%] ">
            Join to building the future.
          </p>
          <p className="w-[333px] my-[10px]  text-[16px] leading-[177.9%] text-[#C2C2C2]">
            Rolade is the fastest blockchain in the world and the fastest
            growing ecosystem in crypto,with over 800 projects spanning DeFi,
            NFTs, Web3 and more.
          </p>
        </div>
      </section>
      {
        //...........................
      }
      <section className="my-5  h-[273px] w-[100%] ">
        <div className="brands ">
          <button className="item item1 flex justify-around items-center bg-[#1D1B26]  h-[41px] rounded-[10px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L8 7L16 7C16.5304 7 17.0391 7.21071 17.4142 7.58579C17.7893 7.96086 18 8.46957 18 9C18 9.53043 17.7893 10.0391 17.4142 10.4142C17.0391 10.7893 16.5304 11 16 11L8 11C6.93913 11 5.92172 11.4214 5.17157 12.1716C4.42143 12.9217 4 13.9391 4 15C4 16.0609 4.42143 17.0783 5.17157 17.8284C5.92172 18.5786 6.93913 19 8 19L16 19L16 22L20 18L16 14L16 17L8 17C7.46957 17 6.96086 16.7893 6.58579 16.4142C6.21071 16.0391 6 15.5304 6 15C6 14.4696 6.21071 13.9609 6.58579 13.5858C6.96086 13.2107 7.46957 13 8 13L16 13C17.0609 13 18.0783 12.5786 18.8284 11.8284C19.5786 11.0783 20 10.0609 20 9C20 7.93913 19.5786 6.92172 18.8284 6.17157C18.0783 5.42143 17.0609 5 16 5L8 5L8 2L4 6Z"
                fill="#0075FF"
              />
            </svg>
            <p className="text-[#FFFFFF] text-[16px]">Rollade&quot;Swap</p>
          </button>
          <button className="item item2 flex justify-around items-center bg-[#1D1B26]  h-[41px] rounded-[10px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L8 7L16 7C16.5304 7 17.0391 7.21071 17.4142 7.58579C17.7893 7.96086 18 8.46957 18 9C18 9.53043 17.7893 10.0391 17.4142 10.4142C17.0391 10.7893 16.5304 11 16 11L8 11C6.93913 11 5.92172 11.4214 5.17157 12.1716C4.42143 12.9217 4 13.9391 4 15C4 16.0609 4.42143 17.0783 5.17157 17.8284C5.92172 18.5786 6.93913 19 8 19L16 19L16 22L20 18L16 14L16 17L8 17C7.46957 17 6.96086 16.7893 6.58579 16.4142C6.21071 16.0391 6 15.5304 6 15C6 14.4696 6.21071 13.9609 6.58579 13.5858C6.96086 13.2107 7.46957 13 8 13L16 13C17.0609 13 18.0783 12.5786 18.8284 11.8284C19.5786 11.0783 20 10.0609 20 9C20 7.93913 19.5786 6.92172 18.8284 6.17157C18.0783 5.42143 17.0609 5 16 5L8 5L8 2L4 6Z"
                fill="#0075FF"
              />
            </svg>
            <p className="text-[#FFFFFF] text-[16px]">Kayang</p>
          </button>
        </div>

        <div className="brands ">
          <button className="item_middle item1 flex justify-around items-center bg-[#1D1B26]  h-[41px] rounded-[10px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 16.5L3 19.44L3 11L6 11M11 14.66L9.43 13.32L8 14.64L8 7L11 7M16 13L13 16L13 3L16 3M18.81 12.81L17 11L22 11L22 16L20.21 14.21L13 21.36L9.53 18.34L5.75 22L3 22L9.47 15.66L13 18.64"
                fill="#FF9C00"
              />
            </svg>
            <p className="text-[#FFFFFF] text-[16px]">Teyeng Finance</p>
          </button>
          <button className="item_middle item2 flex justify-around items-center bg-[#1D1B26]  h-[41px] rounded-[10px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_522_433)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.25 9.25C3.621 9.25 2.25 10.621 2.25 12.25C2.25 13.879 3.621 15.25 5.25 15.25C6.0375 15.25 6.933 14.884 7.9875 14.1595C8.7525 13.6345 9.525 12.9745 10.329 12.25C9.525 11.5255 8.751 10.867 7.989 10.3405C6.9315 9.616 6.0375 9.25 5.25 9.25ZM12 10.726C11.115 9.9265 10.194 9.127 9.2625 8.4865C8.067 7.6645 6.7125 7 5.25 7C2.379 7 1.6174e-08 9.379 3.56929e-08 12.25C5.52118e-08 15.121 2.379 17.5 5.25 17.5C6.7125 17.5 8.067 16.834 9.2625 16.0135C10.194 15.373 11.115 14.5735 12 13.774C12.885 14.5735 13.806 15.373 14.7375 16.0135C15.933 16.834 17.2875 17.5 18.75 17.5C21.621 17.5 24 15.121 24 12.25C24 9.379 21.621 7 18.75 7C17.2875 7 15.933 7.6645 14.7375 8.4865C13.806 9.127 12.885 9.9265 12 10.726ZM13.671 12.25C14.475 12.9745 15.249 13.633 16.011 14.1595C17.067 14.884 17.961 15.25 18.75 15.25C20.379 15.25 21.75 13.879 21.75 12.25C21.75 10.621 20.379 9.25 18.75 9.25C17.9625 9.25 17.067 9.616 16.0125 10.3405C15.2475 10.8655 14.475 11.5255 13.671 12.25Z"
                  fill="#0075FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_522_433">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="text-[#FFFFFF] text-[16px]">Tengkurep</p>
          </button>
        </div>

        <div className="brands ">
          <button className="item item1 flex justify-around items-center bg-[#1D1B26]  h-[41px] rounded-[10px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_522_424)">
                <path
                  d="M19.0401 13.3502C19.0411 13.3652 19.0621 13.5942 19.0701 13.7572C19.0761 13.8702 19.0701 14.0472 19.0701 14.0572C19.0731 14.0572 19.0991 14.0802 19.1001 14.0812C20.5281 15.2512 22.0431 16.8482 22.3041 18.0212C22.3771 18.3462 22.3601 18.6392 22.2321 18.8892C22.0801 19.1822 21.7931 19.3922 21.3981 19.5272C19.3521 20.2272 14.4731 18.8852 10.4911 16.9182C7.64613 15.5122 5.14913 13.8372 3.45913 12.1992C1.88913 10.6762 1.46413 9.48916 1.86913 8.77216C2.02413 8.50116 2.28913 8.30016 2.64513 8.16316C3.94413 7.65616 6.43313 8.01116 8.88413 8.74216C7.72413 9.60816 6.91613 10.7762 6.54213 11.9442L6.54113 11.9512C6.54091 11.9532 6.54058 11.9552 6.54013 11.9572C6.42513 13.0272 7.97413 14.4272 9.54013 15.2072C9.53813 15.2012 9.62413 15.2392 9.62413 15.2332C9.62213 15.2272 9.60913 15.1242 9.60713 15.1202C9.24113 12.4602 11.2551 8.48016 13.3721 7.60716C13.5081 7.55116 13.6261 7.51716 13.6421 7.51216L13.3691 7.48516C13.2951 7.47916 13.2211 7.47216 13.1411 7.47016C13.0505 7.46517 12.9598 7.46184 12.8691 7.46016C11.675 7.43662 10.4979 7.74544 9.46913 8.35216C5.37913 6.94816 2.38413 6.78316 1.13113 7.20116C0.634128 7.36816 0.298127 7.61916 0.131127 7.95216C-0.0428726 8.30216 -0.0438726 8.74216 0.129127 9.25816C0.699127 10.9622 3.18713 13.2902 6.34013 15.3572C6.79713 17.7642 8.95513 20.2322 12.0431 20.5612L12.1851 20.5762C12.2018 20.5747 12.2185 20.5747 12.2351 20.5762C12.1782 20.5312 12.1205 20.4872 12.0621 20.4442C11.1071 19.7082 10.2491 18.4952 9.95513 17.4442L10.1401 17.5372L10.2831 17.6072C15.2681 20.0722 20.4981 21.3272 22.8131 20.5542C23.3321 20.3802 23.7131 20.1362 23.8881 19.7862C24.0551 19.4512 24.0271 19.0062 23.8591 18.5082C23.4231 17.2082 21.5551 15.2242 19.1841 13.4562C19.1364 13.4196 19.0881 13.384 19.0391 13.3492"
                  fill="#FF9C00"
                />
              </g>
              <defs>
                <clipPath id="clip0_522_424">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-[#FFFFFF] text-[16px]">Sangkalputung</p>
          </button>
          <button className="item item2 flex justify-around items-center bg-[#1D1B26]  h-[41px] rounded-[10px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00002 3L8.00002 21M16 3L16 21M8.00002 14L16 14M8.00002 10L16 10M8.00002 6L16 6M8.00002 18L16 18"
                stroke="#0075FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-[#FFFFFF] text-[16px]">Kreak</p>

          </button>
        </div>
      </section>
      {
        //.......................
      }
     
    </div>
    <Link to="/future" className="w-full">
    <button className="flex items-center text-[#FFFFFF] font-bold text-[16px] justify-around bg-gradient-to-r from-[#0500FF] via-[#4440FF] to-[#0500FF] w-[100%] h-[103px] ">
        <span>EXPLORE THE FUTURE</span>
        <svg
          width="123"
          height="24"
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
    </>
  );
};

export default Join;
