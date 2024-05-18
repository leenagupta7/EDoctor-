import React from 'react'
import Home1 from '../Component/Home1'
import Chart from '../Component/Chart'

const Home = () => {
  return (
    <div className="m-12">
      <Home1/>
      <Chart complete="200" remove="400" swap="300" />
    </div>
  )
}

export default Home
