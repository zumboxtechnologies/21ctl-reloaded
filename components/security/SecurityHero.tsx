import React from 'react'
import Button from '../Button'
import Lightbg from './LightBgtext'

const SecurityHero = ({title, lightbgTitle, subTitle, buttontext}: {title: String, lightbgTitle?: string, subTitle: String, buttontext?: any}) => {
  return (
    <div className='myContainer bg-cerise w-full h-[570px] myFlex justify-center'>
        <div className='text-center max-w-[877px] space-y-2'>
            <h1 className='text-white'>{title}</h1>
            <Lightbg classname='bg-cerise w-8 h-6'>
              <h1 className='text-white py-1 px-4'>{lightbgTitle}</h1>
            </Lightbg>
            <p className='text-white'>{subTitle}</p>
            <Button cta={buttontext} className='bg-cerise-light text-white' polycolor='bg-cerise'/>
        </div>
    </div>
  )
}

export default SecurityHero