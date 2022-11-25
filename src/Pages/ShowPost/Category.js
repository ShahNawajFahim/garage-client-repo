import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SellPostCard from './SellPostCard';


const Category = () => {
    const categorySellPost = useLoaderData()
    return (
        <div>
            <h1>News Category:{categorySellPost.length}</h1>
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