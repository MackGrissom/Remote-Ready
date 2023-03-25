import React from 'react'
import {RxTimer, FaReact} from 'react-icons/all'
const Jobs = () => {
  return (
    <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
<div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-orangeColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

<span className='flex justify-between items-center gep-4 hover:text-white'> 
<h1 className='text-[14px] font-semibold text-textColor group-hover:text-white'>Jr React Developer</h1>
  <span className='flex items-center text-[#ccc] gap-5'>
<RxTimer/> Now
  </span>
</span>
<h6 className='text-[#ccc] text-[12px]'>United States</h6>
<p className='text=[13px] text-[#959595] hover:text-white pt-[-20px] border-t-[2px] mt-[20px] group-hover:text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, esse. Mollitia voluptatibus vitae laboriosam sunt fugiat.</p>
</div>

    </div>
  )
}

export default Jobs