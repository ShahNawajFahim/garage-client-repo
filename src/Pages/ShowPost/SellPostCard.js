import React from 'react';

const SellPostCard = ({ sellPost }) => {
    const { productName, location, originalPrice, resalePrice, yearsOfUse, sellerName, image, category_id } = sellPost;
    return (
        <div>
            <div className="card card-compact w-auto bg-base-100 shadow-xl mx-5 ">
                <figure><img src={image} alt="Shoes" style={{ height: 280, width: 500 }} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{productName}</h2>
                </div>
            </div>
        </div>
    );
};

export default SellPostCard;