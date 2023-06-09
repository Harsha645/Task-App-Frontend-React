import React from 'react'

const StatesIcon = (props) => {
    const {icon,bgColor} = props
  return (
    <div className={`flex justify-center items-center w-16 h-16 ${bgColor} rounded-full`}>
                {icon}
            </div>
  )
}

export default StatesIcon