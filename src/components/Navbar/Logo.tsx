import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

function Logo(props) {
    return (
        <Image 
         alt='logo'
         className='hidden md:block cursor-pointer'
         width={"100"}
         height={"100"}
         src={'/images/logo.png'}
        />
    );
}

export default Logo;
