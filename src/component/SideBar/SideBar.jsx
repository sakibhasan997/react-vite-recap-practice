import React, { useEffect, useState } from 'react';

const SideBar = () => {

    


    return (
        <>
            <div className='sticky top-12 '>
                <div className="main   my-5 bg-slate-100 rounded-xl">
                    <div className="timeCounter w-full mx-auto ">
                        <h1 className='text-[#6047EC] font-bold text-2xl w-full h-20 flex justify-center items-center'>Spent time on read :  min</h1>
                    </div>
                </div>

                <div className="bookMark my-5 h-full py-8 bg-slate-100 rounded-xl ">
                    <div className='w-full mx-auto px-8'>
                        <div className='py-8'>
                            <h2 className='text-2xl font-bold'>Bookmarked Blogs :</h2>
                        </div>
                        <div className=' w-full h-24 my-4  bg-white rounded-xl shadow-lg  '>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};



export default SideBar;