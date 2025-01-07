import Button from '@/components/Button'
import React from 'react'

const SmallGrayCard = ({button, title, subTitle, smallText}: {button: any; title: String, subTitle?: String; smallText?: String}) => {
  return (
    <div className='bg-dimGray min-h-[400px] flex items-end p-6'>
        <div className='space-y-2 max-w-[700px]'>
            <Button cta={button} className='bg-cerise text-white' polycolor='bg-dimGray'/>
            <h3>{title}</h3>
            <p>{subTitle}</p>
            <h5>{smallText}</h5>
        </div>
    </div>
  )
}

export default SmallGrayCard