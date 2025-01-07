import React, { ReactElement } from 'react'
import Polygon from '../Polygon'
import { cn } from '@/lib/utils'

const Lightbg = ({children, classname}: {children: ReactElement, classname?: string}) => {
  return (
    <div className="relative bg-cerise-light text-white w-fit mx-auto">
        {/* Cut Corner */}
        <Polygon className={cn(
          classname
        )} />
        {children}
    </div>
  )
}

export default Lightbg