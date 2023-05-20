import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaDollarSign } from "react-icons/fa";
import { Rating } from "@mui/material";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [Blackbear, setBlackbear] = useState([]);
  const [Grizzlybear, setGrizzlybear] = useState([]);
  const [Panda, setPanda] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/teddyBear`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const handleBlackbeardata = () => {
    const remaining = category.filter(
      (teddybear) => teddybear.type == "Blackbear"
    );
    setBlackbear(remaining);
  };
  const handleGrizzlydata = () => {
    const remaining = category.filter(
      (teddybear) => teddybear.type == "Grizzlybear"
    );
    setGrizzlybear(remaining);
  };
  const handlePandadata = () => {
    const remaining = category.filter((teddybear) => teddybear.type == "Panda");
    setPanda(remaining);
  };

  return (
    <div className="">
      <div className="w-2/3 mx-auto text-center pt-5 ">
        <Tabs>
          <TabList className="flex-grow bg-gray-200 pt-2 pb-4 rounded-md space-x-4">
            <Tab onClick={handleBlackbeardata}>
              {" "}
              <span className="font-serif text-xl">Black Teddy Bear</span>
            </Tab>
            <Tab onClick={handleGrizzlydata}>
              {" "}
              <span className="font-serif text-xl ">Grizzly Teddy Bear </span>
            </Tab>
            <Tab onClick={handlePandadata}>
              {" "}
              <span className="font-serif text-xl">Panda Teddy Bear </span>
            </Tab>
          </TabList>

          <TabPanel className="">
            <div className="flex gap-6 mt-5 mb-5">
              {Blackbear.map((blackTeddyBear) => (
                <div
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    maxHeight: "450px",
                  }}
                  className="card w-96  shadow-xl"
                  key={blackTeddyBear.id}
                >
                  <figure className="bg-[#E6EFFF]">
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
                      <button className="inline-flex rounded-full items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex gap-6 mt-5">
              {Grizzlybear.map((grizzlyTeddyBear) => (
                <div
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    maxHeight: "430px",
                  }}
                  className="card w-96 bg-base-100 shadow-xl"
                  key={grizzlyTeddyBear.id}
                >
                  <figure className="bg-[#E6EFFF]">
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
                      <button className="inline-flex rounded-full items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex gap-6 mt-5">
              {Panda.map((pandaTeddyBear) => (
                <div
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    maxHeight: "450px",
                  }}
                  className="card w-96 bg-base-100 shadow-xl"
                  key={pandaTeddyBear.id}
                >
                  <figure className="bg-[#E6EFFF]">
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
                      <button className="inline-flex rounded-full items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium">
                        View Details
                      </button>
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
