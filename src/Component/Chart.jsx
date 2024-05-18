import React from 'react'
import {Chart as Chartjs, defaults} from 'chart.js/auto'
import {Doughnut} from 'react-chartjs-2'

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Chart = ({complete,remove,swap}) => {
    console.log('complete',complete);
  return (
    <div className="h-64 w-64 ">  
      <Doughnut
        data={{
          labels: ["Complete", "Remove", "Swap"],
          datasets: [{
            label: "task",
            data: [complete,remove,swap],
          }]
        }}
      />
    </div>
  )
}

export default Chart

