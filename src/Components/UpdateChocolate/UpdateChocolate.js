import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateChocolate = () => {
    const chocolate = useLoaderData();
    const { name, country, category, photo, _id } = chocolate;
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const newChocolate = { name, country, category, photo };
        fetch(`http://localhost:5000/chocolates/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newChocolate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    return (
        <div>
            <div className='bg-[#FFF] max-w-[1240px] mx-auto p-10'>
                <form onSubmit={handleSubmit}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold ">Chocolate Name</span>

                        </label>
                        <input type="text" name='name' defaultValue={name} placeholder="enter chocolate name" className="input input-bordered w-[75%]" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold ">Country</span>

                        </label>
                        <input type="text" name='country' defaultValue={country} placeholder="enter country" className="input input-bordered w-[75%]" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold ">Chocolate category</span>

                        </label>
                        <input type="text" name='category' defaultValue={category} placeholder="enter category name" className="input input-bordered w-[75%]" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold ">Chocolate Photo</span>

                        </label>
                        <input type="text" name='photo' defaultValue={photo} placeholder="enter category photo" className="input input-bordered w-[75%]" />

                    </div>
                    <input className='w-[75%] p-2 mt-5 bg-yellow-700 rounded' type="submit" value="Update" />

                </form>

            </div>
        </div>
    );
};

export default UpdateChocolate;