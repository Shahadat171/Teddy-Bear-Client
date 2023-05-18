import banner1 from "../../../assets/banner-image/banner1.jpg";
import './Banner.css'

const Banner = () => {
    // bg-gradient-to-r from-indigo-500 
    // top-[25%] left-[20%] right-[20%]
    return (
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner1})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-8 text-5xl font-bold font-serif">Pick The Best Toy For
Your Kid</h1>
      <p className="mb-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="inline-flex rounded-full items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium">
        View More</button>
    </div>
  </div>
</div>
    );
};

export default Banner;