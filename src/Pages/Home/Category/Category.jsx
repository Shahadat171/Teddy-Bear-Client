import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TeddyBearTab from "../TeddyBearTab/TeddyBearTab";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [Blackbear, setBlackbear] = useState([]);
  const [Grizzlybear, setGrizzlybear] = useState([]);
  const [Panda, setPanda] = useState([]);
  fetch("http://localhost:5000/teddyBear")
    .then((res) => res.json())
    .then((data) => {
      setCategory(data);
    });

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
    <div className="w-2/3 mx-auto text-center mt-5 ">
      <Tabs>
        <TabList className='flex-grow bg-gray-200 pt-2 pb-4 rounded-md space-x-4'>
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

        <TabPanel className=''>
          <div className="flex gap-6 mt-5">
            {Blackbear.map((blackTeddyBear) => (
              <div
                className="card w-96 bg-base-100 shadow-xl"
                key={blackTeddyBear.id}
              >
                <figure>
                  <img src={blackTeddyBear.image} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
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
                className="card w-96 bg-base-100 shadow-xl"
                key={grizzlyTeddyBear.id}
              >
                <figure>
                  <img src={grizzlyTeddyBear.image} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
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
                className="card w-96 bg-base-100 shadow-xl"
                key={pandaTeddyBear.id}
              >
                <figure>
                  <img src={pandaTeddyBear.image} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
