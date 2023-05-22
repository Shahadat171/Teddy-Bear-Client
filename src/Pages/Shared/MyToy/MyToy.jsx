import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import EveryMyToy from "./EveryMyToy";

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [MyTeddyBear, setMyTeddyBear] = useState([]);

    const url = `http://localhost:5000/myTeddyBear?sellerEmail=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyTeddyBear(data))
    }, [url]);

    const handleDelete = (id) =>{
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/myTeddyBear/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = MyTeddyBear.filter(teddybear => teddybear._id !== id);
                        setMyTeddyBear(remaining);
                    }
                })
        }
    }
   

    // const handleBookingConfirm = id => {
    //     fetch(`http://localhost:5000/bookings/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ status: 'confirm' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 // update state
    //                 const remaining = bookings.filter(booking => booking._id !== id);
    //                 const updated = bookings.find(booking => booking._id === id);
    //                 updated.status = 'confirm'
    //                 const newBookings = [updated, ...remaining];
    //                 setBookings(newBookings);
    //             }
    //         })
    // }

    return (
        <div style={{minHeight: "40vh"}}>
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
              <th ><span className="ml-9">Details</span></th>
            </tr>
          </thead>
          <tbody>
            {
                MyTeddyBear.map(EveryMyTeddyBear=> <EveryMyToy
                key={EveryMyTeddyBear._id}
                mytoy={EveryMyTeddyBear}
                handleDelete={handleDelete}
                ></EveryMyToy>)
            }
          </tbody>
        </table>
        </div>
    );
};

export default MyToy;