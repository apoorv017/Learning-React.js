import React from 'react'
import {ArrowRight} from 'lucide-react'
const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-medium rounded-full h-15 w-15 flex justify-center items-center'>{props.id + 1}</h2>
            <div>
                <p className='text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, voluptatibus.</p>
                <div className='flex justify-between'>
                    <button className='text-white bg-blue-600 font-semibold px-8 py-2 rounded-full'>{props.tag}</button>
                    <button className='text-white bg-blue-600 font-semibold px-4 py-2 rounded-full '><ArrowRight /></button>
                </div>
            </div>
    </div>
  )
}

export default RightCardContent
