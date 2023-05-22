import { Link } from "react-router-dom";

const EveryTeddyBear = ({ teddyBear }) => {
  console.log(teddyBear);
  return (
    <tr>
      <td><input type="checkbox" className="checkbox" /></td>
      <td>{teddyBear.name}</td>
      <td>{teddyBear.type}</td>
      <td>{teddyBear.sellerName ? teddyBear.sellerName : "No seller"}</td>
      <td>${teddyBear.price}</td>
      <td>{teddyBear.quantity}</td>
      <td className="mx-auto">
        <Link to={`/singleTeddyBear/${teddyBear._id}`}>
          <button className="btn btn-secondary rounded-full">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default EveryTeddyBear;
