import React from 'react'

const MainComponentWrapper = ({ children }: { children: React.ReactNode }) => {
   return (
      <div>
         {children}
      </div>
   )
}

export default MainComponentWrapper