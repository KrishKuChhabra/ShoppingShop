import React from 'react'

interface ConatinerProps{
    children:React.ReactNode;
    className?:string;
}
const Container= ({children, className}:ConatinerProps) => {
  return (
    <div className={`${className} max-w-screen-xl mx-auto px-4 xl:px-0 py-10`}>
       {children}
    </div>
  )
}

export default Container
