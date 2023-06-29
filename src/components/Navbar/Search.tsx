"use client"
import React from 'react';
import {BiSearch} from 'react-icons/bi';

function Search({}) {
    return (
        <div className='
            border-[1px]
            w-full
            md:w-auto
            py-2
            rounded-full
            shadow-sm
            hover:shadow-md
            transition
            cursor-pointer
        '>
            <div className='flex
                flex-row
                justify-row
                items-center

            '>
                <div className='text-sm font-semibold px-6'>
                    Anywhere
                </div>
                <div className='
                    hidden
                    sm:block
                    border-x-[1px]
                    font-semibold
                    px-6
                    flex-1
                    text-center
                    text-sm
                '>
                    Any Week
                </div>
                <div className='flex flex-row items-center justify-between px-3'>
                    <div className='text-sm font-semibold px-3'> Add Guest</div>
                    <div className='p-2 bg-rose-500 rounded-full text-white'>
                        <BiSearch size={18}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;