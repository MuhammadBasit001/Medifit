import React from 'react'
import women from '../images/women.png'
import link from '../images/link.png'

const Discount = () => {
  return (
    <section className="bg-[#EBE9E0] text-[#503017] w-full sm:px-4 py-8 md:px-12">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col  items-center gap-10">
    <div className='flex flex-col lg:flex-row  gap-4'> 
        <div className='sm:w-1/2 md:m-6   rounded-2xl'>           
            <img src={women} alt="" className='rounded-2xl' />
          
        </div>
        <div className='sm:w-1/2 bg-[#F2F2F2] flex flex-col gap-14 items-center justify-around rounded-2xl'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <p className='text-xl '>join our newsletter</p>
                <h4 className=' text-2xl md:text-5xl font-bold px-5 text-center'>Sign Up for an Instant 15% Discount</h4>           
            </div>
            <div className=' flex px-4 py-2 gap-4'> 
                <input type="text" placeholder='Enter Email'  className='border px-8 rounded-2xl'/>
                <button className='rounded-2xl bg-[#503017] text-white px-2 Md:px-5 gap-2 flex justify-center items-center py-2'><img src={link} alt="" /> <p>Sign Up</p></button>
            </div>
        </div>
    </div>
    
      </div>
    </section>
  )
}

export default Discount
