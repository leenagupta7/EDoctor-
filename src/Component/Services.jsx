import React from 'react'

const Services = ({icon,heading,para}) => {
  return (
    <div className=" bg-gray-100 hover:bg-gray-200 p-8 rounded-2xl space-y-4 space-x-3">
      {icon}
      <span className="font-bold text-xl">{heading}</span>
      <p className="text-gray-700">{para}</p>
    </div>
  )
}

export default Services
