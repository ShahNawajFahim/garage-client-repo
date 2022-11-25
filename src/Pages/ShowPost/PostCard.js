import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PostCard = () => {
    const post = useLoaderData()
    const { productName, location, originalPrice, resalePrice, yearsOfUse, sellerName, image, category_id } = post;
    return (
        <div>
            <div className="card card-compact w-auto bg-base-100 shadow-xl mx-5 ">
                <figure><img src={image} alt="Shoes" style={{ height: 280, width: 500 }} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{productName}</h2>
                </div>
            </div>
            <Link to={`/category/${category_id}`}>
                <button className="btn-primary">All news on this category</button>
            </Link>
        </div>
    );
};

export default PostCard;