import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { name, picture, _id } = category;



    return (



        <div className="card  rounded ">
            <figure><img src={picture} alt="" /></figure>
            <div className="card-body absolute text-white">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions ">
                    <Link to={`/category/${_id}`}> <button className="btn btn-primary">show</button></Link>
                </div>
            </div>
        </div>


    );
};

export default CategoryCard;