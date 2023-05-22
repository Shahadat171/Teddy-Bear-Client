import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PhotoGallary from "../PhotoGallary/PhotoGallary";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <PhotoGallary></PhotoGallary>
        <Category></Category>
        <Testimonial></Testimonial>
    </div>
  )
}

export default Home;
