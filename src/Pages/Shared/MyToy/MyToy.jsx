import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import EveryMyToy from "./EveryMyToy";
import Swal from "sweetalert2";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [MyTeddyBear, setMyTeddyBear] = useState([]);

  const url = `https://teddy-bear-server.vercel.app/myTeddyBear?sellerEmail=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyTeddyBear(data));
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://teddy-bear-server.vercel.app/myTeddyBear/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your teddy bear has been deleted.",
                "success"
              );
              const remaining = MyTeddyBear.filter(
                (teddybear) => teddybear._id !== id
              );
              setMyTeddyBear(remaining);
            }
          });
      }
    });
  };

  const handleLowToHigh = () => {
    const acMyTeddyBear = MyTeddyBear.sort((a, b) => a.price - b.price);
    setMyTeddyBear(acMyTeddyBear);
  };
  const handleHighToLow = () => {
    const acMyTeddyBear = MyTeddyBear.sort((a, b) => a.price - b.price);
    setMyTeddyBear(acMyTeddyBear);
  };

  return (
    <div style={{ minHeight: "40vh" }}>
      <div className="mt-5 gap-8 items-center justify-center flex mx-auto">
        <button
          onClick={handleLowToHigh}
          type="button"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          High to Low
        </button>
        <button
          onClick={handleHighToLow}
          type="button"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Low to High
        </button>
      </div>
      <table
        style={{ backgroundColor: "#FFF5DA" }}
        className="table table-zebra drop-shadow-2xl w-1/2 mx-auto my-24 mt-12"
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
            <th>
              <span className="ml-9">Details</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {MyTeddyBear.map((EveryMyTeddyBear) => (
            <EveryMyToy
              key={EveryMyTeddyBear._id}
              mytoy={EveryMyTeddyBear}
              handleDelete={handleDelete}
            ></EveryMyToy>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToy;
