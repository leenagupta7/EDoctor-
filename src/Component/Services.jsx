import React from 'react'

const Services = ({icon,heading,para}) => {
  return (
    <div className="w-96 shadow-md p-4">
      <div className="flex  items-center justify-center space-x-4">
        {icon}
        <div className="flex flex-col ">
          <span className="text-xl">{heading}</span>
          <p className="text-sm text-gray-600">{para}</p>
        </div>
      </div>
    </div>
  )
}

export default Services
