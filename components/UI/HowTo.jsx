import React from 'react'

const HowTo = () => {
  return (
    <div className='bg-primary px-6 md:px-20 hidden md:flex items-center justify-between font-Poppins' >
        <div className='text-white' >
            <p className='text-white font-semibold text-[18px] md:text-[37px]' >How do i sign up to Moola?</p>
            <p className='text-[18px] py-4 font-[500] ' >Download Xtrempay, set up saving plans and start <br /> winning with MOOLA.</p>
            <div>
                <img src='/images/downloadapp.png' alt='' />
            </div>
        </div>
        <div>
            <img src='/images/woman.png' alt='' />
        </div>
    </div>
  )
}

export default HowTo