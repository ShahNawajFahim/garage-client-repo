import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostCard from './PostCard';

const ShowPost = () => {



    const categoryPosts = useLoaderData();
    console.log(categoryPosts);
    const { data } = categoryPosts;







    return (
        <div>
            {

                data.map(
                    post => <PostCard
                        post={post}
                        key={post._id}
                    ></PostCard>
                )


            }
        </div>
    );
};

export default ShowPost;