import React from 'react'
import phone from '../Contact/imagesContact/phone.png'

const ContactUs = () => {
  return (
    <section className='w-full bg-amber-200 flex justify-center item'>

        <div className='w-[70%] bg-blue-200 flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center flex-col '>
                <div className='flex justify-center items-center gap-2 my-6'>
                    <h3 className='text-5xl'>Contact us</h3>
                    <img src={phone} alt=""  className='w-[50px] h-[50px]'/>
                </div>
                <div>
                    <p className='text-xl'>Have questions or need support? Get in touch with our team – we're here to help!</p>
                </div>
            </div>
            <div className='w-[80%] flex flex-wrap justify-center items-center bg-red-300 my-6 gap-2'>
                <div className='flex flex-col w-1/2 bg-green-300'>
                    <p className='text-xl p-2'>Full Name</p>
                    <input type="text" placeholder='Name'  className='border p-2 rounded-xl'/>
                </div>
                <div className='flex flex-col w-1/2 bg-green-300'>
                    <p className='text-xl p-2'>Full Name</p>
                    <input type="text" placeholder='Name'  className='border p-2 rounded-xl'/>
                </div>
                <div className='flex flex-col w-1/2 bg-green-300'>
                    <p className='text-xl p-2'>Full Name</p>
                    <input type="text" placeholder='Name'  className='border p-2 rounded-xl'/>
                </div>
                <div className='flex flex-col w-1/2 bg-green-300'>
                    <p className='text-xl p-2'>Full Name</p>
                    <input type="text" placeholder='Name'  className='border p-2 rounded-xl'/>
                </div>
                <div className='flex flex-col w-1/2 bg-green-300'>
                    <p className='text-xl p-2'>Full Name</p>
                    <input type="text" placeholder='Name'  className='border p-2 rounded-xl'/>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default ContactUs
