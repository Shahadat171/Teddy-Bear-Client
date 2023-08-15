import { useEffect, useState } from "react";
import EveryTeddyBear from "./EveryTeddyBear";

const AllToys = () => {
  const [teddyBear, setteddyBear] = useState([]);
  useEffect(() => {
    fetch(`https://teddy-bear-server.vercel.app/teddyBear`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length < 21) {
          setteddyBear(data);
        } else {
          const remaining = data.slice(0, 19);
          setteddyBear(remaining);
        }
      });
  }, []);

  const handleSearchToy = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const remaining = teddyBear.filter(
      (everyTeddyBear) => everyTeddyBear.name == name
    );
    setteddyBear(remaining);
  };

  return (
    <div className="bg-[#ddc06f]">
      <div className="form-control ml-[40%] pt-5">
        <form onSubmit={handleSearchToy} className="input-group">
          <input
            name="name"
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>
      </div>
      <div className="overflow-x-auto pb-14">
        <table
          style={{ backgroundColor: "#FFF5DA" }}
          className="table table-zebra drop-shadow-2xl w-1/2 mx-auto mt-12"
        >
          {/* head*/}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Seller</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {teddyBear.map((everyTeddyBear) => (
              <EveryTeddyBear
                key={everyTeddyBear._id}
                teddyBear={everyTeddyBear}
              ></EveryTeddyBear>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
