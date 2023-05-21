import { Link } from "react-router-dom";

const EveryMyToy = ({ mytoy,handleDelete,handleUpdate}) => {

  return (
    <tr>
      <td>1</td>
      <td>{mytoy.name}</td>
      <td>{mytoy.type}</td>
      <td>{mytoy.sellerName ? mytoy.sellerName : "No seller"}</td>
      <td>${mytoy.price}</td>
      <td>{mytoy.quantity}</td>
      <td className="mx-auto flex items-center">
      <Link to={`/singleTeddyBear/${mytoy._id}`}>
        <button className="btn btn-secondary rounded-full">View Details</button></Link>
        <button onClick={()=>handleDelete(mytoy._id)}>
          <img
            className="w-8 h-8 rounded-full ml-3"
            src="https://i.ibb.co/Bfkb8Wh/delete.png"
            alt=""
          />
        </button>
        <button  onClick={()=>handleUpdate(mytoy._id)}>
          <img
            className="w-8 h-8 rounded-full ml-3"
            src="https://i.ibb.co/Q8js7jb/update.png"
            alt=""
          />
        </button>
      </td>
    </tr>
  );
};

export default EveryMyToy;
