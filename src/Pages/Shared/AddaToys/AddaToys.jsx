import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AddaToys = () => {
    const {user} = useContext(AuthContext)

    const handleAddToy =(event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const image = form.photo.value;
        const sellerName = form.yourName.value;
        const sellerEmail = form.email.value;
        const type = form.category.value;
        const rating = form.rating.value;
        const price = parseFloat(form.price.value);
        const quantity = form.quantity.value;
        const description = form.description.value;
        const newTeddyBear = {name,image,sellerName,type,rating,sellerEmail,price,quantity,description}
        console.log(newTeddyBear)
        
        fetch('http://localhost:5000/teddyBear', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(newTeddyBear)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
              Swal.fire(
                'Added',
                'Your Toy has been Successfully',
                'success'
              )
            }
        })
    }

    return (
        <div style={{paddingLeft: "30%"}} className="hero place-items-start min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            
          </div>
          <div style={{minWidth: '650px'}} className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl mt-5 text-center font-bold font-serif">Add Your Teddy Bear</h1>
            <div  className="card-body ">
              <form onSubmit={handleAddToy}>
                <div className='grid gap-3 grid-cols-2'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Toy Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="photo" name='photo' placeholder="Photo Url" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input defaultValue={user.displayName} type="text" name='yourName' placeholder="Your name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input type="email" name='email' defaultValue={user.email} placeholder="Your Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input type="text" placeholder="Category" name='category' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" name='price' placeholder="Price" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input type="text" placeholder="qauntity" name='quantity' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input type="text" placeholder="description" name='description' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input type="text" placeholder="Address" className="input input-bordered" />
              </div>
              </div>
              <div  className=" w-full mt-6">
                <input type="submit" value='Add Your Toy' className="btn w-full btn-primary" />
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddaToys;