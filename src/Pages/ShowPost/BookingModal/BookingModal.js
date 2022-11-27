import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';


const BookingModal = ({ bookingInfo, setBookingInfo }) => {
    const { user } = useContext(AuthContext);

    const { productName, resalePrice } = bookingInfo;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const booking = {
            name,
            email,
        }


        setBookingInfo(null);
    }




    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={productName} placeholder="Your Name" className="input w-full input-sm font-bold" readOnly />
                        <input name="name" type="text" defaultValue={`Price:${resalePrice} $`} placeholder="Your Name" className="input w-full input-sm font-bold" readOnly />
                        <input name="name" type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-sm " readOnly />
                        <input name="email" type="email" defaultValue={user?.email} placeholder="Email Address" className="input w-full input-sm " readOnly />
                        <input name="phone" type="number" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Location of meeting" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;