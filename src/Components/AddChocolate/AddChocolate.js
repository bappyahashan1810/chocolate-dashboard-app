import React from 'react';
import Swal from 'sweetalert2'

const AddChocolate = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const newChocolate = { name, country, category, photo };
        console.log(newChocolate);
        fetch('http://localhost:5000/chocolates', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newChocolate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'The chocolate has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
            })
    }
    return (
        <div className='bg-[#FFF] max-w-[1240px] mx-auto p-10'>
            <form onSubmit={handleSubmit}>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-bold ">Chocolate Name</span>

                    </label>
                    <input type="text" name='name' placeholder="enter chocolate name" className="input input-bordered w-[75%]" />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-bold ">Country</span>

                    </label>
                    <input type="text" name='country' placeholder="enter country" className="input input-bordered w-[75%]" />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-bold ">Chocolate category</span>

                    </label>
                    <input type="text" name='category' placeholder="enter category name" className="input input-bordered w-[75%]" />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-bold ">Chocolate Photo</span>

                    </label>
                    <input type="text" name='photo' placeholder="enter category photo" className="input input-bordered w-[75%]" />

                </div>
                <input className='w-[75%] p-2 mt-5 bg-yellow-700 rounded' type="submit" value="Save" />

            </form>

        </div>
    );
};

export default AddChocolate;