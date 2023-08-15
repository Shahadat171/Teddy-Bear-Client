import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateYourToy = () => {
  const teddyBear = useLoaderData();
  console.log(teddyBear);
  const [oldTeddyBear, setOldTeddyBear] = useState([]);

  useEffect(() => {
    fetch("https://teddy-bear-server.vercel.app/teddyBear")
      .then((res) => res.json())
      .then((data) => setOldTeddyBear(data));
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.photo.value;
    const sellerName = form.yourName.value;
    const sellerEmail = form.email.value;
    const type = form.category.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updatedTeddyBear = {
      name,
      image,
      sellerName,
      type,
      rating,
      sellerEmail,
      price,
      quantity,
      description,
    };

    console.log(updatedTeddyBear);
    fetch(
      `https://teddy-bear-server.vercel.app/updateSingleTeddyBear/${teddyBear._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedTeddyBear),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Updated", "Your Toy Updated Successfully", "success");
          form.reset("");
          const remaining = oldTeddyBear.filter(
            (everyOldTeddyBear) => everyOldTeddyBear._id !== teddyBear._id
          );
          const updated = oldTeddyBear.find(
            (everyOldTeddyBear) => everyOldTeddyBear._id === teddyBear._id
          );
          const newTeddyBear = [updated, ...remaining];
          setOldTeddyBear(newTeddyBear);
        }
      });
  };

  return (
    <div
      style={{ paddingLeft: "30%" }}
      className="hero place-items-start min-h-screen bg-base-200"
    >
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left"></div>
        <div
          style={{ minWidth: "650px" }}
          className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <h1 className="text-3xl mt-5 text-center font-bold font-serif">
            Update Your Teddy Bear
          </h1>
          <div className="card-body ">
            <form onSubmit={handleUpdate}>
              <div className="grid gap-3 grid-cols-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Toy Name</span>
                  </label>
                  <input
                    defaultValue={teddyBear.name}
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    defaultValue={teddyBear.photo}
                    type="photo"
                    name="photo"
                    placeholder="Photo Url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    defaultValue={teddyBear.sellerName}
                    type="text"
                    name="yourName"
                    placeholder="Your name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    defaultValue={teddyBear.sellerEmail}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <input
                    defaultValue={teddyBear.type}
                    type="text"
                    placeholder="Category"
                    name="category"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    defaultValue={teddyBear.rating}
                    type="text"
                    name="rating"
                    placeholder="Rating"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    defaultValue={teddyBear.price}
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    defaultValue={teddyBear.quantity}
                    type="text"
                    placeholder="qauntity"
                    name="quantity"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    defaultValue={teddyBear.description}
                    type="text"
                    placeholder="description"
                    name="description"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className=" w-full mt-6">
                <input
                  type="submit"
                  value="Update Your Toy"
                  className="btn w-full btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateYourToy;
