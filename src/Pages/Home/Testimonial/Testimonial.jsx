import { Rating } from "@mui/material";
import testimonial from "../../../assets/banner-image/banner3.jpg";
import man1 from "../../../assets/man1.avif";
import man2 from "../../../assets/man2.avif";
import './testimonial.css'
import 'aos/dist/aos.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Testimonial = () => {
  
  useEffect(()=>{
    Aos.init({duration : 2000})
  },[])

  return (
    <div
      className="hero mt-24 bg-slate-700 bg-blend-overlay min-h-screen"
      style={{
        backgroundImage: `url(${testimonial})`,
      }}
    >
      <div className=""></div>
      <div className="hero-content flex-col ">
        <div className="max-w-md">
          <h1 className="mb-12 text-4xl text-slate-300 font-semibold">
            Customer Review
          </h1>
        </div>
        <div className="flex sm:flex-col lg:flex-row mx-auto justify-center gap-16">
          <div className="container-card py-5 text-center  w-1/3  shadow-2xl" data-aos='fade-right'>
            <div>
              <img
                className=" rounded-full shadow-lg h-20 w-20 mx-auto"
                src={man2}
              ></img>
              <h5 className="text-lg text-center font-light mb-4">
                Maria Smantha
              </h5>
              <p className="text-center">
                <Rating
                  className="text-ceneter justify-center my-2"
                  name="half-rating-read"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                ></Rating>
              </p>
              <p className="text-white px-5">
                I want to express my heartfelt gratitude to Teddy Vile for the
                seamless online shopping experience and the most beautiful teddy
                bear I've ever received! The websites user-friendly interface
                and extensive collection made finding the perfect bear a breeze.
                The customer service team was responsive and helpful throughout
                the process. When the package arrived, I was amazed by the
                exquisite craftsmanship and attention to detail. I highly
                recommend teddyville for anyone looking for a high-quality teddy
                bear. Thank you for a wonderful experience!
              </p>
            </div>
          </div>
          <div className="container-card py-5 text-center  w-1/3  shadow-2xl" data-aos="fade-left">
            <div>
              <img
                className=" rounded-full shadow-lg h-20 w-20 mx-auto"
                src={man1}
              ></img>
              <h5 className="text-lg text-center font-light mb-4">
                David Watson
              </h5>
              <p className="text-center">
                <Rating
                  className="text-ceneter justify-center my-2"
                  name="half-rating-read"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                ></Rating>
              </p>
              <p className="text-white px-5">
                When looking for a website to purchase a teddy bear, it's
                important to consider a few key factors. First, take into
                account the website's reputation and customer reviews. Look for
                positive feedback from previous buyers to gauge the website's
                reliability and the quality of their teddy bears. Secondly,
                ensure that the website offers secure payment options to protect
                your personal and financial information during checkout.
                Thirdly, look for a website that provides a wide variety of
                teddy bears in different sizes, colors, and designs, with
                high-quality images and detailed product
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
