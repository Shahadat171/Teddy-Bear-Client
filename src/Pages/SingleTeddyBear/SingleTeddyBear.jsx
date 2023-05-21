import { Rating } from "@mui/material";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import cart from "../../assets/cart1.png";

const SingleTeddyBear = () => {
  const teddyBear = useLoaderData();
  return (
    <div className="hero min-h-[80vh] bg-base-200">
      <div className="shadow-2xl w-1/2 rounded-lg">
        <div className="hero-content rounded-lg bg-teal-400 flex-col lg:flex-row">
          <div className="text-center">
            <img src={teddyBear.image} className="max-w-sm rounded-lg" />
            <h1 className="text-3xl font-bold">{teddyBear.name}</h1>
            <p>
              <p>
                <Rating
                  className="text-ceneter justify-center my-2"
                  name="half-rating-read"
                  defaultValue={teddyBear.rating}
                  precision={0.5}
                  readOnly
                ></Rating>
              </p>
            </p>
          </div>
          <div>
            {teddyBear.sellerName && (
              <p>Seller Name : {teddyBear.sellerName}</p>
            )}
            {teddyBear.sellerEmail && (
              <p>Seller Email : {teddyBear.sellerEmail}</p>
            )}
            <p className="mb-1">{teddyBear.description}</p>
            <p className="flex gap-1 mb-1 items-center">
              <span className="text-black flex items-center gap-2 font-semibold text-lg">
                {" "}
                <img className="w-9 h-8" src={cart} alt="" /> Available quantity
              </span>
              <FaAngleLeft />
              {teddyBear.quantity}
              <FaAngleRight />
            </p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${teddyBear.price}
              </span>
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleTeddyBear;
