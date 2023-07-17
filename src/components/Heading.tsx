import React, { FC } from 'react'

interface HeadingProps {
    title: string,
    subTitle?: string,
    center?: string,
}

const Heading: FC<HeadingProps> = ({
    title,
    subTitle,
    center,
}) => {
  return (
    <div className={`${center ? 'text-center': 'text-start'}`}>
        <div className='font-bold text-2xl'>
            {title}
        </div>
        <div className='font-light text-neutral-500 mt-2'>
            {subTitle}
        </div>
    </div>
  )
}

export default Heading