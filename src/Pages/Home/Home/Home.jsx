import banner1 from "../../../assets/banner-image/banner1.jpg";
import banner2 from "../../../assets/banner-image/banner2.jpg";
import banner3 from "../../../assets/banner-image/banner3.jpg";
import banner4 from "../../../assets/banner-image/banner4.jpg";

const Home = () => {
  return (
    <div className="carousel h-fit w-fit mx-auto">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="relative">
          <div className="absolute top-[25%] left-[20%] right-[20%] text-center text-white text-7xl">
            <h2>Pick The Best Toy ForYour Kid</h2>
            <button className=" rounded-full btn text-7xl bg-[#c00bb1] h-5 w-1/6"> <span className="text-yellow-100">Read More</span> </button>
          </div>
          <img src={banner1} className="w-full" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
