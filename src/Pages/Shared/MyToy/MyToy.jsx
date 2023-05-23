import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import EveryMyToy from "./EveryMyToy";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [MyTeddyBear, setMyTeddyBear] = useState([]);
  const [asending, setAsending] = useState(true)

  const url = `http://localhost:5000/myTeddyBear?sellerEmail=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyTeddyBear(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/myTeddyBear/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = MyTeddyBear.filter(
              (teddybear) => teddybear._id !== id
            );
            setMyTeddyBear(remaining);
          }
        });
    }
  };

  const handleSortByDate = (AdState) =>{
    setAsending(AdState)
  }

  return (
    <div style={{ minHeight: "40vh" }}>
      <div className="w-8 mt-5 mx-auto">
        <div className=" form-control">
          <div className="input-group">
            <select className="select select-bordered">
              <option disabled selected>
                Check By Price
              </option>
              <option onClick={()=>handleSortByDate(true)}>Low to High</option>
              <option onClick={()=>handleSortByDate(false)}>High to low</option>
            </select>
            <button className="btn">Go</button>
          </div>
        </div>
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
