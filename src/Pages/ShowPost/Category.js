import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import SellPostCard from './SellPostCard';


const Category = () => {
    const categorySellPost = useLoaderData()
    const [bookingInfo, setBookingInfo] = useState(null);
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-10 sm:mx-auto'>
                {
                    categorySellPost.map(sellPost => <SellPostCard
                        key={sellPost._id}
                        sellPost={sellPost}
                        setBookingInfo={setBookingInfo}
                    ></SellPostCard>)
                }
            </div>
            {
                bookingInfo &&
                <BookingModal

                    bookingInfo={bookingInfo}
                    setBookingInfo={setBookingInfo}

                ></BookingModal>
            }
        </div>
    );
};

export default Category;