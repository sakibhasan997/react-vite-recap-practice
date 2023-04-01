import React, { useEffect, useState } from 'react';

const Design = ({ dataLoads }) => {
    console.log(dataLoads);
    // console.log(dataLoads);
    const { id, AuthorName, date, BlogTitle, BlogCoverImage, programmingImg, category, job, redTiming, blogs } = dataLoads;

     

    return (

        <>
            <div className="card w-full bg-base-100 shadow-xl my-5">
                <figure><img src={programmingImg} alt="Shoes" /></figure>
                <div className="">
                    <div className='tile flex justify-between mt-4 px-2 items-center'>
                        <div className='flex gap-5 items-center'>
                            <img className='w-12 rounded-full' src={BlogCoverImage} alt="" />
                            <div>
                                <h3 className='text-xl font-bold'>{AuthorName}</h3>
                                <p>{date}</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <p>{redTiming}  min read</p>
                            <span className='cursor-pointer'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg></span>
                        </div>
                    </div>
                    <h1 className='text-4xl font-bold my-8 leading-10 px-2'>{BlogTitle}</h1>
                    <div className='flex gap-4 px-2'>
                        <p className='font-bold text-gray-500'>{category}</p>
                        <p className='font-bold  text-gray-500'>{job}</p>
                    </div>
                    <div className="card-actions justify-start mt-8 mb-3 px-2">
                        <button  className='text-blue-600 underline font-bold '> Mark as read</button>
                    
                    </div>
                </div>
            </div>
        </>
    );
};

export default Design;