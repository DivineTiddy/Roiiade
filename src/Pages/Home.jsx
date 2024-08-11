import Footer from "../Components/Footer"
import Main from "../Components/Main"
import Nav from "../Components/Nav"

const Home = () => {
  return (
    <div className="flex flex-col  justify-end w-[343px] h-[100%]  ">
      <section className="flex flex-col justify-between h-[100%] ">
      <Nav/>
      <p className="text-[60px] font-extrabold w-[258px] my-[20px]  text-[#FFFFFF] leading-[89.9%]">
        THE
        <br />
        FUTURE.
      </p>
      <p className="w-[315px]  text-[16px] leading-[177.9%] text-[#C2C2C2]">
        Rolade is an ever-expanding ecosystem of interconnected apps and
        services, built for a decentralized future.
      </p>
      </section>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home