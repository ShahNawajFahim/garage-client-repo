import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SellPostCard from './SellPostCard';


const Category = () => {
    const categorySellPost = useLoaderData()
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-10 sm:mx-auto'>
            {
                categorySellPost.map(sellPost => <SellPostCard
                    key={sellPost._id}
                    sellPost={sellPost}
                ></SellPostCard>)
            }
        </div>
    );
};

export default Category;