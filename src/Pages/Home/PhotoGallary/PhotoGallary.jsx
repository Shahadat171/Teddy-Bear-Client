import "./PhotoGallary.css";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const PhotoGallary = () => {
  useEffect(()=>{
    Aos.init({duration : 2000})
  },[])
  return (
    <div className="container text-center">
      <div>
        <h2 className="pt-12 text-5xl font-serif font-bold">Best Products</h2>
        <div
          style={{ maxWidth: "75%" }}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto pt-12 pb-12 items-center justify-center"
        >
          <div className="rounded-lg w-96 h-96 shadow-2xl" data-aos='fade-right'>
              <h1 className=" text-center text-2xl pt-5 ">Baby Toys</h1>
            <figure className="scale-75">
              <img src="https://i.ibb.co/Hnsz6cx/ok.png"/>
            </figure>
          
          </div>
          <div className="rounded-lg w-96 h-96 shadow-2xl" data-aos='fade-up'>
            <h1 className=" text-center text-2xl pt-5 ">Litle Brite</h1>
            <figure className="scale-75">
              <img
                src="https://i.ibb.co/PxWsv36/22-05-2023-00-35-19-REC-prev-ui.png"
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="rounded-lg w-96 h-96 shadow-2xl" data-aos='fade-left'>
            <h1 className=" text-center text-2xl pt-5 ">Gift Toys</h1>
            <figure className="scale-75">
              <img
                src="https://i.ibb.co/RQdX319/Grizzly-prev-ui.png"
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="rounded-lg w-96 h-96 shadow-2xl" data-aos='fade-right'>
            <h1 className=" text-center text-2xl pt-5 ">Play Toys</h1>
            <figure className="scale-75">
              <img
                src="https://i.ibb.co/DQQCNXs/Grizzly2-prev-ui.png"
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="rounded-lg w-96 h-96 shadow-2xl" data-aos='fade-up'>
            <h1 className=" text-center text-2xl pt-5 ">Soft Toys</h1>
            <figure className="scale-75">
              <img
                src="https://i.ibb.co/BHkzNLW/Griizly-prev-ui.png"
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="rounded-lg w-96 h-96 shadow-2xl" data-aos='fade-left'>
            <h1 className="text-center text-2xl pt-5 ">Key Toys</h1>
            <figure className="scale-75">
              <img
                style={{maxWidth: '22rem'}}
                src="https://i.ibb.co/SVWDv9f/panda-prev-ui.png"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallary;
