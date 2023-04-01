import React from 'react';

const NavBar = () => {
    return (
        <>
            <div>
            <div className="navbar bg-base-100 shadow-xl rounded-lg">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Programming Cafe</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                    <ul className='flex gap-4'>
                                <li><a href="#">HOME</a></li>
                                <li><a href="#">ABOUT</a></li>
                                <li><a href="#">CONTACT</a></li>
                            </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/279312602_734737191043200_3706230763934917786_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=P9NGc3zcbWsAX8vqyee&_nc_oc=AQm5mHm7_uT3AcO8MzApFA2cdbsUPT-g4J8QP6R_i1Mwvuk_bh7Mnf95ONsKZa44L2k&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfARg9AhwTkwTVLuI_3o2g8WO5_lSRZ1FMUgiUSX9WPhoQ&oe=642A154A" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default NavBar;