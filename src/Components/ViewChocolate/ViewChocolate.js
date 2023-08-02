import React, { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai'
import { AiOutlineDelete } from 'react-icons/ai'
import Swal from 'sweetalert2'

import { Link, useLoaderData } from 'react-router-dom';

import DataTable from 'react-data-table-component';

const ViewChocolate = () => {
    const loadchocolates = useLoaderData();
    const [chocolates, setChocolates] = useState(loadchocolates);




    const handlerDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).fire(
            'Deleted!',
            'Your Chocolate has been deleted.',
            'success'
        )
        fetch(`http://localhost:5000/chocolates/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.then((result) => {
                        if (result.isConfirmed) {

                        }
                    })
                }
                if (data.deletedCount) {
                    const remainingChocolates = chocolates.filter(chocolate => chocolate._id !== id);
                    setChocolates(remainingChocolates);
                }

            })
    }


    const columns = [
        {
            name: 'Chocolate Image',
            selector: row => <img width={50} height={50} src={row.photo}></img>
        },
        {
            name: `Chocolate Name`,
            selector: row => <p className=''>{row.name}</p>,
            sortable: true
        },
        {
            name: 'Chocolate Country',
            selector: row => <p>{row.country}</p>
        },
        {
            name: 'Chocolate Category',
            selector: row => <p>{row.category}</p>
        },
        {
            name: 'Actions',
            cell: row => <><Link to={`/update/${row._id}`}><AiOutlineEdit className='text-2xl bg-yellow-600 rounded text-white mr-3'></AiOutlineEdit></Link>
                <AiOutlineDelete onClick={() => handlerDelete(row._id)} className='text-2xl bg-yellow-600 rounded  text-white'></AiOutlineDelete></>
        }
    ]
    return (
        <DataTable
            columns={columns}
            data={chocolates}
            pagination
            fixedHeader
            fixedHeaderScrollHeight='400px'
            highlightOnHover
        >

        </DataTable>
    );
};

export default ViewChocolate;