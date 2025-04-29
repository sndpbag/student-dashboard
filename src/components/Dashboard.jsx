// components/Dashboard.jsx - Dashboard page component
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create new chart
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['001', '002', '003', '004', '005', '006'],
          datasets: [{
            type: 'bar',
            label: 'Data',
            data: [75, 60, 35, 50, 75, 65],
            backgroundColor: function(context) {
              const chart = context.chart;
              const {ctx, chartArea} = chart;
              if (!chartArea) {
                return null;
              }
              const gradient = ctx.createLinearGradient(0, 0, 0, 400);
              gradient.addColorStop(0, 'rgba(255, 107, 139, 0.8)');
              gradient.addColorStop(1, 'rgba(255, 107, 139, 0.2)');
              return gradient;
            },
            borderRadius: 8,
            borderWidth: 0
          }, {
            type: 'line',
            label: 'Trend',
            data: [75, 60, 35, 50, 75, 65],
            borderColor: '#ff6b8b',
            tension: 0.3,
            fill: false,
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
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }

    // Cleanup function to destroy chart on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <>
      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="glass rounded-xl p-5">
          <div className="flex justify-between mb-2">
            <div className="p-2 bg-gradient-to-r from-pink-400 to-blue-300 rounded-lg text-white">
              <i className="fas fa-chart-line"></i>
            </div>
          </div>
          <div className="text-2xl font-bold">1</div>
          <div className="text-sm text-gray-600">Total Courses Enrolled</div>
        </div>
        
        <div className="glass rounded-xl p-5">
          <div className="flex justify-between mb-2">
            <div className="p-2 bg-gradient-to-r from-blue-400 to-purple-300 rounded-lg text-white">
              <i className="fas fa-users"></i>
            </div>
          </div>
          <div className="text-2xl font-bold">0</div>
          <div className="text-sm text-gray-600">Completed Courses</div>
        </div>
        
        <div className="glass rounded-xl p-5">
          <div className="flex justify-between mb-2">
            <div className="p-2 bg-gradient-to-r from-purple-400 to-pink-300 rounded-lg text-white">
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
          <div className="text-2xl font-bold">0%</div>
          <div className="text-sm text-gray-600">Grades / Marks Overview</div>
        </div>
        
        <div className="glass rounded-xl p-5">
          <div className="flex justify-between mb-2">
            <div className="p-2 bg-gradient-to-r from-indigo-400 to-blue-300 rounded-lg text-white">
              <i className="fas fa-percentage"></i>
            </div>
          </div>
          <div className="text-2xl font-bold">Rs.35/-</div>
          <div className="text-sm text-gray-600">Due Amount</div>
        </div>
      </div>
      
      {/* Charts & Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="glass rounded-xl p-5 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Analytics</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm rounded-md bg-gradient-to-r from-pink-400 to-blue-300 text-white">Weekly</button>
              <button className="px-3 py-1 text-sm rounded-md glass hover:bg-white/20">Monthly</button>
              <button className="px-3 py-1 text-sm rounded-md glass hover:bg-white/20">Yearly</button>
            </div>
          </div>
          <div className="chart-container">
            <canvas ref={chartRef}></canvas>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="text-center">
              <div className="text-3xl font-bold">12M</div>
              <div className="text-sm text-gray-600">Lorem Ipsum</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">125k</div>
              <div className="text-sm text-gray-600">Lorem Ipsum</div>
            </div>
          </div>
        </div>
        
        {/* Tasks */}
        <div className="glass rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Today's Tasks</h2>
            <span className="text-sm text-blue-500 cursor-pointer">See All</span>
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="glass p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-pink-400 to-blue-300 rounded-md p-1 text-white task-check cursor-pointer">
                  <i className="fas fa-check"></i>
                </div>
                <div className="flex-1">
                  <div className="font-medium">Update profile page</div>
                  <div className="text-sm text-gray-600">Due 10:00 AM</div>
                </div>
                <div className="px-2 py-1 text-xs rounded bg-red-100 text-red-500">High</div>
              </div>
            </div>
            
            <div className="glass p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="glass rounded-md p-1 task-check cursor-pointer">
                  <i className="fas fa-check"></i>
                </div>
                <div className="flex-1">
                  <div className="font-medium">Review new designs</div>
                  <div className="text-sm text-gray-600">Due 12:30 PM</div>
                </div>
                <div className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-500">Medium</div>
              </div>
            </div>
            
            <div className="glass p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="glass rounded-md p-1 task-check cursor-pointer">
                  <i className="fas fa-check"></i>
                </div>
                <div className="flex-1">
                  <div className="font-medium">Team meeting</div>
                  <div className="text-sm text-gray-600">Due 2:00 PM</div>
                </div>
                <div className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-500">Low</div>
              </div>
            </div>
            
            <div className="glass p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="glass rounded-md p-1 task-check cursor-pointer">
                  <i className="fas fa-check"></i>
                </div>
                <div className="flex-1">
                  <div className="font-medium">Client proposal</div>
                  <div className="text-sm text-gray-600">Due 5:00 PM</div>
                </div>
                <div className="px-2 py-1 text-xs rounded bg-red-100 text-red-500">High</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="glass rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Lorem Ipsum</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula 
            arcu, rutrum non metus vel, efficitur egestas justo. Phasellus congue 
            erat sed augue aliquet, eu vehicula nisl efficitur.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-4 rounded-lg flex items-center justify-center flex-col">
              <div className="text-pink-500 text-2xl mb-2">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="text-sm font-medium">LOREM IPSUM</div>
            </div>
            <div className="glass p-4 rounded-lg flex items-center justify-center flex-col">
              <div className="text-pink-500 text-2xl mb-2">
                <i className="fas fa-comment-dots"></i>
              </div>
              <div className="text-sm font-medium">LOREM IPSUM</div>
            </div>
          </div>
        </div>
        
        <div className="glass rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Lorem Ipsum</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula 
            arcu, rutrum non metus vel, efficitur egestas justo. Phasellus congue 
            erat sed augue aliquet, eu vehicula nisl efficitur.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-4 rounded-lg flex items-center justify-center flex-col">
              <div className="text-pink-500 text-2xl mb-2">
                <i className="fas fa-cog"></i>
              </div>
              <div className="text-sm font-medium">LOREM IPSUM</div>
            </div>
            <div className="glass p-4 rounded-lg flex items-center justify-center flex-col">
              <div className="text-pink-500 text-2xl mb-2">
                <i className="fas fa-search"></i>
              </div>
              <div className="text-sm font-medium">LOREM IPSUM</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;