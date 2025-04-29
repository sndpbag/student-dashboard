// components/Analytics.jsx
import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

const Analytics = () => {
  const lineChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const lineChartInstance = useRef(null);
  const pieChartInstance = useRef(null);

  useEffect(() => {
    // Line Chart
    if (lineChartRef.current) {
      if (lineChartInstance.current) {
        lineChartInstance.current.destroy();
      }

      const ctx = lineChartRef.current.getContext('2d');
      lineChartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
          datasets: [{
            label: 'Study Hours',
            data: [5, 8, 12, 7, 10, 15],
            borderColor: '#ff6b8b',
            backgroundColor: 'rgba(255, 107, 139, 0.2)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#ff6b8b',
            pointRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: true,
                color: 'rgba(255, 255, 255, 0.1)'
              },
              ticks: {
                color: '#6b7280'
              }
            },
            y: {
              grid: {
                display: true,
                color: 'rgba(255, 255, 255, 0.1)'
              },
              ticks: {
                color: '#6b7280'
              },
              beginAtZero: true
            }
          }
        }
      });
    }

    // Pie Chart
    if (pieChartRef.current) {
      if (pieChartInstance.current) {
        pieChartInstance.current.destroy();
      }

      const ctx = pieChartRef.current.getContext('2d');
      pieChartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Videos', 'Quizzes', 'Readings', 'Projects'],
          datasets: [{
            data: [35, 25, 20, 20],
            backgroundColor: [
              'rgba(255, 107, 139, 0.7)',
              'rgba(56, 195, 247, 0.7)',
              'rgba(133, 105, 241, 0.7)',
              'rgba(102, 189, 178, 0.7)'
            ],
            borderColor: [
              'rgba(255, 107, 139, 1)',
              'rgba(56, 195, 247, 1)',
              'rgba(133, 105, 241, 1)',
              'rgba(102, 189, 178, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: '#6b7280',
                padding: 20,
                font: {
                  size: 12
                }
              }
            }
          }
        }
      });
    }

    return () => {
      if (lineChartInstance.current) {
        lineChartInstance.current.destroy();
      }
      if (pieChartInstance.current) {
        pieChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="glass rounded-xl p-5 mb-6">
        <h2 className="text-xl font-semibold mb-4">Learning Analytics</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-3xl font-bold mb-1">85%</div>
            <div className="text-gray-600">Course Completion</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-3xl font-bold mb-1">12.5</div>
            <div className="text-gray-600">Avg. Hours/Week</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-3xl font-bold mb-1">92%</div>
            <div className="text-gray-600">Quiz Performance</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="glass rounded-xl p-5">
          <h3 className="text-lg font-semibold mb-4">Study Time Trend</h3>
          <div className="chart-container">
            <canvas ref={lineChartRef}></canvas>
          </div>
        </div>

        <div className="glass rounded-xl p-5">
          <h3 className="text-lg font-semibold mb-4">Learning Activity Distribution</h3>
          <div className="chart-container">
            <canvas ref={pieChartRef}></canvas>
          </div>
        </div>
      </div>

      <div className="glass rounded-xl p-5">
        <h3 className="text-lg font-semibold mb-4">Skill Progress</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-medium">UI Design</span>
              <span>78%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-pink-400 to-blue-300 h-full" style={{width: '78%'}}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="font-medium">HTML/CSS</span>
              <span>92%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-pink-400 to-blue-300 h-full" style={{width: '92%'}}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="font-medium">JavaScript</span>
              <span>65%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-pink-400 to-blue-300 h-full" style={{width: '65%'}}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="font-medium">React</span>
              <span>45%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-pink-400 to-blue-300 h-full" style={{width: '45%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;