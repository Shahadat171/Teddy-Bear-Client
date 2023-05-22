import "./NewArrival.css";
const NewArrival = () => {
  return (
    <div className="min-h-[50vh] w-100 mx-20 mb-16">
      <h1 className="text-center mt-12 title-shadow font-serif text-5xl font-bold text-[#d1ce08]">
        Ways To Shop
      </h1>
      <fieldset className="order-solid border-4 border-slate-300 rounded-2xl  mt-6 min-h-[40vh]">
        <legend className=" text-3xl font-serif font-bold pr-2 pl-1">
          by age
        </legend>
        <div className="flex gap-8 px-8 py-8 justify-center">
          <div className="card bg-[#004EBD] w-80 shadow-xl">
            <figure className="px-10 pt-10 ">
              <img
                src="https://i.ibb.co/mDdrkyh/caroline-hernandez-u-Gg4-MQ14-Ua4-unsplash.jpgg"
                alt="Shoes"
                className="rounded-xl h-56 bg-gradient-to-r from-violet-500 to-fuchsia-500"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-serif text-slate-100 ">0-5 years</h2>
            </div>
          </div>
          <div className="card bg-[#004EBD] w-80 shadow-xl">
            <figure className="px-10 pt-10 ">
              <img
                src="https://i.ibb.co/ctwZbsH/qasim-sadiq-MUl-E4pw78-Ec-unsplash.jpg"
                alt="Shoes"
                className="rounded-xl h-56 bg-gradient-to-r from-violet-500 to-fuchsia-500"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-serif text-slate-100 ">5-8 years</h2>
            </div>
          </div>
          <div className="card bg-[#004EBD] w-80 shadow-xl">
            <figure className="px-10 pt-10 ">
              <img
                src="https://i.ibb.co/CK6QNKs/r-d-smith-k-f3-PYg-APw-Q-unsplash.jpg"
                alt="Shoes"
                className="rounded-xl h-56 bg-gradient-to-r from-violet-500 to-fuchsia-500"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-serif text-slate-100 ">8-10 years</h2>
            </div>
          </div>
          <div className="card  bg-[#004EBD] w-80 shadow-xl">
            <figure className="px-10 pt-10 ">
              <img
                src="https://i.ibb.co/C2HZQpz/adam-winger-Lce8uz19j-X8-unsplash.jpg"
                alt="Shoes"
                className="rounded-xl h-56 bg-gradient-to-r from-violet-500 to-fuchsia-500"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-serif text-slate-100 ">10+ years</h2>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default NewArrival;
