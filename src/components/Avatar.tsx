import React from 'react';
import Image from 'next/image';

type AvatarPropsType = {
  image: string
}

export default function Avatar(props: AvatarPropsType) {
  return (
    <div className='flex justify-center items-center w-9 h-9 rounded-full hover:bg-yellow-300 cursor-pointer'>
      <div className='relative flex justify-center items-center w-7 h-7 bg-white border rounded-full'>
        <Image className='rounded-full' src={props.image} fill={true} alt='Avatar' />
      </div>
    </div>
  )
}