import React from 'react';

const FAQ = () => {
    return (
        <div className='text-center mb-20 '>

            <h1 className='text-5xl mb-8'>FAQ's</h1>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-stone-400 text-black">
                    How can i sell my car?
                </div>
                <div className="collapse-content">
                    <p>It's very simple!!!! you can just make a post in our site and we will help you for the rest.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-stone-400 text-black">
                    What is the process of sell post?
                </div>
                <div className="collapse-content">
                    <p> step 1 : you should log in as a seller <br />
                        step 2 : press the 'sell your car' button.<br />
                        step 3 : Fill the sell post form. <br />
                        step 4 : Click the post button.
                    </p>
                </div>
            </div>


            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-stone-400 text-black">
                    Is it possible to sell the car too quicly?
                </div>
                <div className="collapse-content">
                    <p>Sorry for this convenience. It is not possible for us to do so.But you can give advertisement for early selling.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;