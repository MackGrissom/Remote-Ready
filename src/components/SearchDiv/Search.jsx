import React from 'react'
import { ImSearch, AiOutlineCloseCircle, RiSuitcaseLine, GrLocation } from 'react-icons/all'
import logo from '/home/mackgrissom/code/MackGrissom/jobboardproject/remotejobboard/src/assets/remoteready.svg'
const Search = () => {
    return (
        <div className='searchDiv grid gap-10 bg-[#ff58332e] rounded-[10px] p-[3rem]'>
            <form action="" className=' h-[50%] align-middle justify-center'>
                <div className='flex align-middle justify-center'>
            <img src={logo} className='h-[250px] align-center justify-center flex'/>
            </div>
                <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
                    <div className='flex gap-2 items-center w-full' >
                        <ImSearch className='text-[25px] icon' />
                        <input type='text' className='bg-transparent text-[#FF5733] focus:outline-none w-[100%]' placeholder='Search Remote Jobs...'></input>
                        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-transparent icon' />
                    </div>
                    <div className='flex gap-2 items-center w-full' >
                        <RiSuitcaseLine className='text-[25px] icon' />
                        <input type='text' className='bg-transparent text-[#FF5733] focus:outline-none w-[100%]' placeholder='Search By Company..'></input>
                        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-transparent icon' />
                    </div>
                    <div className='flex gap-2 items-center w-full' >
                        <GrLocation className='text-[25px] icon' />
                        <input type='text' className='bg-transparent text-[#FF5733] focus:outline-none w-[100%]' placeholder='Search By Location..'></input>
                        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-transparent icon' />
                    </div>
                    <button className="bg-orangeColor h-full p-5 px-10 rounded-[10px]  text-white cursor-pointer hover:bg-orange-200">Search</button>
                </div>
            </form>

            <div className="secDiv flex items-center gap-10 justify-center">

                <div className="singleSearch items-center flex gap-2">

                    <label htmlFor='relevance' className='"text-[#808080] font-semibold"'> Sort By:</label>

                    <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="">Relevance</option>
                        <option value="">Latest Jobs</option>
                        <option value="">Highest Paid</option>
                        <option value="">Lowest Paid</option>
                        <option value="">Most Viewed</option>
                        <option value="">Hottest</option>
                        <option value="">Best Benefits</option>


                    </select>
                    <label htmlFor='type' className='"text-[#808080] font-semibold"'> Type:</label>

                    <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="">Full-Time</option>
                        <option value="">Part-Time</option>
                        <option value="">Contract</option>
                        
                        


                    </select>
                    <label htmlFor='level' className='"text-[#808080] font-semibold"'> Level:</label>

                    <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="">Senior</option>
                        <option value="">Jr</option>
                        <option value="">Entry Level</option>
                        <option value="">Intermediate</option>
                    </select>
                </div>

                <span className='text-[#a1a1a1] cursor-pointer'> Clear All </span>

            </div>

        </div>
    )
}

export default Search