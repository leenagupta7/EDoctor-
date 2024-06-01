import React from 'react'
import { Chart as Chartjs, defaults } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Chart = ({ complete, remove, swap }) => {
    console.log('complete', complete);
    return (
        <div className="w-64" style={{ height: '300px' }}>
            <Bar
                data={{
                    labels: ["Complete", "Remove", "Swap"],
                    datasets: [{
                        label: "Tasks",
                        data: [complete, remove, swap],
                        backgroundColor: [
                            'rgba(75, 192, 192)',
                            'rgba(255, 99, 132)',
                            'rgba(255, 206, 86)'
                        ],
                      
                        borderWidth: 1
                    }]
                }}
                options={{
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }}
            />
        </div>
    )
}

export default Chart


