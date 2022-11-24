import React, { useState, useEffect } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';


const Categories = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 sm:mx-auto'>
            {
                categories &&
                categories.map(category => <CategoryCard
                    key={category._id}
                    category={category}
                ></CategoryCard>)
            }
        </div>
    );
};

export default Categories;