import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../../Context/AuthProvider';




const SalePost = () => {

    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());


    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            return data;
        }
    })

    const handleSellPost = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        productName: data.productName,
                        location: data.location,
                        originalPrice: data.originalPrice,
                        resalePrice: data.resalePrice,
                        yearsOfUse: data.yearsOfUse,
                        category_id: data.category_id,
                        sellerName: data.sellerName,
                        image: imgData.data.url,
                        email: data.email,
                        // dateAndTime: data.dateAndTime

                    }

                    // save doctor information to the database
                    fetch('http://localhost:5000/sellpost', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`Sell post is added successfully`);
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7 mx-auto'>
            <h2 className="text-4xl">Sell your Car</h2>
            <form onSubmit={handleSubmit(handleSellPost)} >
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product name</span></label>
                    <input type="text" {...register("productName", {
                        required: "Name is Required"
                    })} className="input input-bordered input-sm w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: "Location is Required"
                    })} className="input input-bordered input-sm w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Original Price</span></label>
                    <input type="number" {...register("originalPrice", {
                        required: "Original price is Required"
                    })} className="input input-bordered input-sm w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resale Price</span></label>
                    <input type="number" {...register("resalePrice", {
                        required: "Resale Price is Required"
                    })} className="input input-bordered input-sm w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Years of use</span></label>
                    <input type="number" {...register("yearsOfUse", {
                        required: "years of use is Required"
                    })} className="input input-bordered input-sm w-full max-w-xs" />
                </div>
                <div className="form-control w-full  max-w-xs">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select
                        {...register('category_id')}
                        className="select input-bordered input-sm w-full max-w-xs">
                        {
                            categories.map(category => <option
                                key={category._id}
                                value={category._id}
                            >{category.name}</option>)
                        }


                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Seller Name</span></label>
                    <input type="text"{...register("sellerName", {
                        required: "Seller name is Required"
                    })} className="input input-bordered input-sm w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" defaultValue={user?.email} {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" readOnly />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered input-sm " />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>



                {/* <div className="form-control  max-w-xs mt-2">

                    <DatePicker
                        {...register("DateAndTime", {
                            required: "DateAndTime is Required"
                        })}

                        className='w-full rounded  input input-bordered input-sm'
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={1}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                    />
                </div> */}




                <input className='btn btn-accent w-full mt-4' value="POST" type="submit" />
            </form>
        </div>
    );
};


export default SalePost;