import React from 'react';

const SellPostCard = ({ sellPost, setBookingInfo }) => {
    const { productName, location, originalPrice, resalePrice, yearsOfUse, sellerName, image, } = sellPost;
    return (
        <div>
            <div className="card card-compact w-auto bg-base-100 shadow-xl mx-5 ">
                <figure><img src={image} alt="Shoes" style={{ height: 280, width: 500 }} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{productName}</h2>
                    <p>Original price: {originalPrice}$</p>
                    <p>Resale price: {resalePrice}$</p>
                    <p>Years of use: {yearsOfUse}</p>
                    <p>Location: {location}</p>
                    <p>Seller name: {sellerName}</p>
                    <div>
                        <label
                            htmlFor="booking-modal"
                            className="btn btn-primary text-white"
                            onClick={() => setBookingInfo(sellPost)}
                        >Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellPostCard;