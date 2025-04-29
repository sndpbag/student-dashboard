// components/Calendar.jsx
import React, { useState } from 'react';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
  
  const renderCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const totalDays = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);
    
    const days = [];
    
    // Add empty cells for days before the first day of month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= totalDays; day++) {
      const isToday = new Date().getDate() === day && 
                     new Date().getMonth() === month && 
                     new Date().getFullYear() === year;
      
      const hasEvent = [5, 12, 18, 25].includes(day); // Sample events
      
      days.push(
        <div 
          key={day} 
          className={`h-12 flex items-center justify-center relative hover:bg-white/10 rounded-lg cursor-pointer ${
            isToday ? 'bg-gradient-to-r from-pink-400/30 to-blue-300/30' : ''
          }`}
        >
          <span className={isToday ? 'font-bold' : ''}>{day}</span>
          {hasEvent && (
            <span className="absolute bottom-1 h-1 w-1 rounded-full bg-pink-400"></span>
          )}
        </div>
      );
    }
    
    return days;
  };
  
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  return (
    <>
      <div className="glass rounded-xl p-5 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Calendar</h2>
          <div className="flex gap-2">
            <button onClick={prevMonth} className="glass p-2 rounded-lg hover:bg-white/20">
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="glass px-4 py-2 rounded-lg">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </div>
            <button onClick={nextMonth} className="glass p-2 rounded-lg hover:bg-white/20">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-2 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
            <div key={idx} className="text-center font-medium text-sm text-gray-600">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {renderCalendarDays()}
        </div>
      </div>
      
      <div className="glass rounded-xl p-5">
        <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
        <div className="space-y-4">
          <div className="glass p-4 rounded-lg">
            <div className="flex gap-4">
              <div className="bg-pink-100 text-pink-600 rounded-lg p-3 h-min">
                <i className="fas fa-laptop"></i>
              </div>
              <div>
                <h4 className="font-medium">Design Review Meeting</h4>
                <p className="text-sm text-gray-600 mb-2">Discussion of the latest UI improvements</p>
                <div className="flex items-center gap-4 text-sm">
                  <div>
                    <i className="far fa-calendar mr-1"></i>
                    <span>May 5, 2025</span>
                  </div>
                  <div>
                    <i className="far fa-clock mr-1"></i>
                    <span>10:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass p-4 rounded-lg">
            <div className="flex gap-4">
              <div className="bg-blue-100 text-blue-600 rounded-lg p-3 h-min">
                <i className="fas fa-book"></i>
              </div>
              <div>
                <h4 className="font-medium">Frontend Workshop</h4>
                <p className="text-sm text-gray-600 mb-2">Learning advanced React concepts</p>
                <div className="flex items-center gap-4 text-sm">
                  <div>
                    <i className="far fa-calendar mr-1"></i>
                    <span>May 12, 2025</span>
                  </div>
                  <div>
                    <i className="far fa-clock mr-1"></i>
                    <span>2:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass p-4 rounded-lg">
            <div className="flex gap-4">
              <div className="bg-purple-100 text-purple-600 rounded-lg p-3 h-min">
                <i className="fas fa-file-alt"></i>
              </div>
              <div>
                <h4 className="font-medium">Project Submission</h4>
                <p className="text-sm text-gray-600 mb-2">Final deadline for the UI/UX project</p>
                <div className="flex items-center gap-4 text-sm">
                  <div>
                    <i className="far fa-calendar mr-1"></i>
                    <span>May 15, 2025</span>
                  </div>
                  <div>
                    <i className="far fa-clock mr-1"></i>
                    <span>11:59 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;