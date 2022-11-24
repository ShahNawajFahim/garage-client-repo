import React from 'react';

const CategoryCard = ({ category }) => {
    const { name, picture } = category;
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <div className="card-body ">
                <h2 className="card-title ">{name}</h2>
            </div>
        </div>
    );
};

export default CategoryCard;