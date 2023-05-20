import facebook from '../../../assets/Social media/facebook.png'
import twitter from '../../../assets/Social media/twitter.png'
import google from '../../../assets/Social media/google.png'
import instragram from '../../../assets/Social media/instragram.png'

const Footer = () => {
  return (
     <div className='bg-black'>
    <div className="text-slate-300 text-center py-12">
      <h1 className="text-2xl font-bold font-serif tracking-wide ">
      Enchant with our cuddly toy. 
      </h1>
      <p className="w-1/3 mx-auto mt-5 text-slate-400">
        Discover warmth, joy, and enchantment with our extraordinary teddy bear
        collection. Embrace love, create cherished memories, and indulge in
        endless cuddles. 
      </p>
      <div  className='flex gap-4 mt-5 justify-center '>
        <img src={instragram} />
        <img src={facebook} />
        <img src={twitter} />
        <img src={google} />
      </div>
      <div className='mt-5'>
      <button className="btn mr-4 rounded-full btn-outline btn-success">Articles</button>
      <button className="btn mr-4 rounded-full btn-outline btn-success">About Us</button>
      <button className="btn mr-4 rounded-full btn-outline btn-success">Contact</button>
      <button className="btn rounded-full btn-outline btn-success">Discount</button>
      </div>
      
    </div>
    <div>
      <p className="mb-0 text-center text-slate-500 ">© 2023 Your Teddy Bear Emporium. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
