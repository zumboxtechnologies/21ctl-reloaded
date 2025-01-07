import React from 'react'
import Button from '../../Button'

const GrayBgSection = ({buttontext, title, smallText}: {buttontext?: any, title: String, smallText?:String}) => {
  return (
    <div className='myContainer mt-16'>
       <div className='bg-dimGray min-h-[85vh] flex items-end p-6'>
            <div className='space-y-2 max-w-[700px]'>
                <Button cta={buttontext} className='bg-cerise text-white' polycolor='bg-dimGray'/>
                <h2>{title}</h2>
                <h5>{smallText}</h5>
            </div>
       </div>
    </div>
  )
}

export default GrayBgSection