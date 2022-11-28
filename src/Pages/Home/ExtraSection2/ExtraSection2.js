import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../assets/images/Brand-Lancia-Hero.jpg';

const ExtraSection2 = () => {
    return (
        <div className="hero h-96 mt-12 mb-20 rounded-2xl" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-overlay bg-opacity-10"></div>
            <div className=" text-center text-white">
                <div className="max-w-md flex justify-around">
                    <div>
                        <h1 className="mb-5 text-5xl font-bold">Finance Your Next Car</h1>
                        <p className="mb-5"> Get your dream car on the road in no time. Make your happiness affordable . </p>
                        <Link to='/dashboard/sellpost'><button className=" btn btn-info ">Sale your car</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection2;