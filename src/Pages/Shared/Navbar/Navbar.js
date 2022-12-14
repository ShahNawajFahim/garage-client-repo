import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider';
import useSeller from '../../../hooks/useSeller';
import useAdmin from '../../../hooks/useAdmin';
import logo from '../../../assets/images/logo1.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div>
            <div className="navbar bg-neutral">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                        </ul>
                    </div>
                    <img src={logo} alt='' className='h-9 ' />
                    <Link to='/' className="btn btn-ghost normal-case text-xl font-bold">Garage</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {user?.photoURL ?
                                    <img src={user?.photoURL} alt="" style={{ height: '50px' }} className='rounded-full mr-3' />
                                    : <FaUser className='mx-auto'></FaUser>
                                }
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>{
                                user?.uid ?
                                    <>
                                        <span className='mr-1'>{user?.displayName}</span>
                                        <button className="btn btn-outline btn-black text-black font-semibold align-middle" onClick={handleLogOut}>Logout</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' className='mr-4'>Login</Link>
                                        <Link to='/signup' className='mr-4'>Signup</Link>
                                    </>
                            }</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;