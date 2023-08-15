import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaDollarSign } from "react-icons/fa";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const Category = () => {
  const [type, setType] = useState("Blackbear");
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`https://teddy-bear-server.vercel.app/teddyBear/${type}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [type]);

  const handleSubCategory = (category) => {
    setType(category);
  };

  return (
    <div className="">
      <div className="w-2/3 mx-auto text-center pt-5 ">
        <Tabs>
          <TabList className="flex-grow bg-gray-200 pt-2 pb-4 rounded-md space-x-4">
            <Tab onClick={() => handleSubCategory("Blackbear")}>
              {" "}
              <span className="font-serif text-xl">Black Teddy Bear</span>
            </Tab>
            <Tab onClick={() => handleSubCategory("Grizzlybear")}>
              {" "}
              <span className="font-serif text-xl ">Grizzly Teddy Bear </span>
            </Tab>
            <Tab onClick={() => handleSubCategory("Panda")}>
              {" "}
              <span className="font-serif text-xl">Panda Teddy Bear </span>
            </Tab>
          </TabList>

          <TabPanel className="">
            <div className="flex gap-6 mt-5 mb-5">
              {toys.map((blackTeddyBear) => (
                <div
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    maxHeight: "485px",
                  }}
                  className="card w-96  shadow-xl "
                  key={blackTeddyBear.id}
                >
                  <figure className="bg-[#E6EFFF] px-10 pt-10 pb-10">
                    <img src={blackTeddyBear.image} />
                  </figure>
                  <div className="card-body bg-orange-200 text-center">
                    <h2 className="text-center text-xl font-semibold font-serif ">
                      {blackTeddyBear.name}
                    </h2>
                    <p className="text-center font-sans flex justify-center items-center font-semibold ">
                      Price:
                      <FaDollarSign className="" />
                      {blackTeddyBear.price}
                    </p>
                    <Rating
                      className="text-ceneter justify-center my-2"
                      name="half-rating-read"
                      defaultValue={blackTeddyBear.rating}
                      precision={0.5}
                      readOnly
                    ></Rating>
                    <div className="">
                      <Link to={`/singleTeddyBear/${blackTeddyBear._id}`}>
                        <button className="inline-flex rounded-full items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex gap-6 mt-5">
              {toys.map((grizzlyTeddyBear) => (
                <div
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    maxHeight: "450px",
                  }}
                  className="card w-96 bg-base-100 shadow-xl"
                  key={grizzlyTeddyBear.id}
                >
                  <figure className="bg-[#E6EFFF] px-3 py-3">
                    <img src={grizzlyTeddyBear.image} />
                  </figure>
                  <div className="card-body bg-orange-200 text-center">
                    <h2 className="text-center text-xl font-semibold font-serif ">
                      {grizzlyTeddyBear.name}
                    </h2>
                    <p className="text-center font-sans flex justify-center items-center font-semibold ">
                      Price:
                      <FaDollarSign className="" />
                      {grizzlyTeddyBear.price}
                    </p>
                    <Rating
                      className="text-ceneter justify-center my-2"
                      name="half-rating-read"
                      defaultValue={grizzlyTeddyBear.rating}
                      precision={0.5}
                      readOnly
                    ></Rating>
                    <div className="">
                      <Link to={`/singleTeddyBear/${grizzlyTeddyBear._id}`}>
                        <button className="inline-flex rounded-full items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex gap-6 mt-5">
              {toys.map((pandaTeddyBear) => (
                <div
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    maxHeight: "500px",
                  }}
                  className="card w-96 bg-base-100 shadow-xl"
                  key={pandaTeddyBear.id}
                >
                  <figure className="bg-[#E6EFFF] px-10 pt-14 pb-14">
                    <img src={pandaTeddyBear.image} />
                  </figure>
                  <div className="card-body bg-orange-200 text-center">
                    <h2 className="text-center text-xl font-semibold font-serif ">
                      {pandaTeddyBear.name}
                    </h2>
                    <p className="text-center font-sans flex justify-center items-center font-semibold ">
                      Price:
                      <FaDollarSign className="" />
                      {pandaTeddyBear.price}
                    </p>
                    <Rating
                      className="text-ceneter justify-center my-2"
                      name="half-rating-read"
                      defaultValue={pandaTeddyBear.rating}
                      precision={0.5}
                      readOnly
                    ></Rating>
                    <div className="">
                      <Link to={`/singleTeddyBear/${pandaTeddyBear._id}`}>
                        <button className="inline-flex rounded-full items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Category;
