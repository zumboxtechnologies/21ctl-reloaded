import React from 'react'
import Button from './Button'

const ContactUs = () => {
  return (
    <div className='myContainer'>
        <div className='bg-cerise-lighter min-h-[85vh] myFlex flex-col justify-center p-6 text-center'>
            <div className='max-w-[658px]'>
                <h2>Contact us today to discuss your backup needs and start building a solution that works for you.</h2>
                <Button cta="Get Started Now" className='bg-cerise mt-3 text-white' polycolor='bg-cerise-lighter'/>
            </div>
        </div>
    </div>
  )
}

export default ContactUs