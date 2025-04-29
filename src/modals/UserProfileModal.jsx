import React, { useState } from 'react';

const UserProfileModal = ({ isOpen, onClose, user }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  if (!isOpen) return null;
  
  // Default user data in case none is provided
  const defaultUser = {
    name: 'Alex Johnson',
    role: 'UI/UX Designer',
    email: 'alex@example.com',
    bio: 'UI/UX Designer with 5+ years of experience in creating user-centered design solutions. Passionate about crafting beautiful, functional interfaces.',
    avatar: 'AJ',
    skills: ['UI Design', 'User Research', 'Wireframing', 'Prototyping', 'HTML/CSS', 'JavaScript'],
    projects: [
      { name: 'UI/UX Design Project', progress: 75 },
      { name: 'Frontend Development', progress: 40 }
    ],
    activities: [
      { type: 'comment', text: 'Commented on Design Brief', time: '2 hours ago' },
      { type: 'complete', text: 'Completed Wireframe Task', time: '1 day ago' },
      { type: 'join', text: 'Joined UI/UX Design Project', time: '3 days ago' }
    ]
  };
  
  const userData = user || defaultUser;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="glass backdrop-blur-xl rounded-xl w-full max-w-2xl mx-4 my-8 shadow-xl animate-fadeIn">
        <div className="relative">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-pink-400 to-blue-300 rounded-t-xl p-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">User Profile</h2>
            <button 
              onClick={onClose}
              className="glass p-2 rounded-full hover:bg-white/20 transition text-white"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          {/* User info section */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-400 to-blue-300 flex items-center justify-center text-white text-3xl font-bold">
                  {userData.avatar}
                </div>
                <div className="mt-4 text-center">
                  <p className="font-semibold text-lg">{userData.name}</p>
                  <p className="text-gray-600">{userData.role}</p>
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="mb-4">
                  <h3 className="text-lg font-medium mb-2">About</h3>
                  <p className="text-gray-600">{userData.bio}</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-lg font-medium mb-2">Contact</h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <i className="fas fa-envelope"></i>
                    <span>{userData.email}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {userData.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 glass rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs section */}
          <div className="border-t border-gray-200 p-6">
            <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                  activeTab === 'overview' 
                    ? 'bg-gradient-to-r from-pink-400 to-blue-300 text-white' 
                    : 'glass hover:bg-white/20'
                }`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('projects')}
                className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                  activeTab === 'projects' 
                    ? 'bg-gradient-to-r from-pink-400 to-blue-300 text-white' 
                    : 'glass hover:bg-white/20'
                }`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveTab('activity')}
                className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                  activeTab === 'activity' 
                    ? 'bg-gradient-to-r from-pink-400 to-blue-300 text-white' 
                    : 'glass hover:bg-white/20'
                }`}
              >
                Activity
              </button>
            </div>
            
            {/* Tab content */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="glass rounded-xl p-4">
                  <h3 className="font-medium mb-3">Statistics</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">85%</div>
                      <div className="text-sm text-gray-600">Course Progress</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">12</div>
                      <div className="text-sm text-gray-600">Completed Tasks</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">3</div>
                      <div className="text-sm text-gray-600">Active Projects</div>
                    </div>
                  </div>
                </div>
                
                <div className="glass rounded-xl p-4">
                  <h3 className="font-medium mb-3">Current Progress</h3>
                  <div className="space-y-3">
                    {userData.projects.map((project, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{project.name}</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-pink-400 to-blue-300 h-full" 
                            style={{width: `${project.progress}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'projects' && (
              <div className="space-y-4">
                <div className="glass rounded-xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">UI/UX Design Project</h3>
                    <span className="px-3 py-1 glass rounded-full text-xs">In Progress</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Create wireframes and prototypes for a mobile application</p>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span className="font-medium">75%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-pink-400 to-blue-300 h-full" 
                        style={{width: '75%'}}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs border-2 border-white">A</div>
                      <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center text-white text-xs border-2 border-white">S</div>
                      <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center text-white text-xs border-2 border-white">M</div>
                    </div>
                    <div>
                      <i className="far fa-calendar mr-1"></i>
                      <span>May 15, 2025</span>
                    </div>
                  </div>
                </div>
                
                <div className="glass rounded-xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Frontend Development</h3>
                    <span className="px-3 py-1 glass rounded-full text-xs">In Progress</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Implement responsive dashboard with React and Tailwind CSS</p>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span className="font-medium">40%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-pink-400 to-blue-300 h-full" 
                        style={{width: '40%'}}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-pink-400 flex items-center justify-center text-white text-xs border-2 border-white">P</div>
                      <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-white text-xs border-2 border-white">D</div>
                    </div>
                    <div>
                      <i className="far fa-calendar mr-1"></i>
                      <span>May 30, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'activity' && (
              <div className="space-y-4">
                {userData.activities.map((activity, index) => (
                  <div key={index} className="glass rounded-xl p-4">
                    <div className="flex gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                        activity.type === 'comment' ? 'bg-blue-400' : 
                        activity.type === 'complete' ? 'bg-green-400' : 'bg-purple-400'
                      }`}>
                        <i className={`fas ${
                          activity.type === 'comment' ? 'fa-comment' : 
                          activity.type === 'complete' ? 'fa-check' : 'fa-user-plus'
                        }`}></i>
                      </div>
                      <div>
                        <p className="font-medium">{activity.text}</p>
                        <p className="text-sm text-gray-600">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer section */}
          <div className="border-t border-gray-200 p-6 flex justify-between">
            <button 
              onClick={onClose}
              className="px-6 py-2 glass rounded-lg hover:bg-white/20 transition"
            >
              Close
            </button>
            <button 
              className="px-6 py-2 bg-gradient-to-r from-pink-400 to-blue-300 text-white rounded-lg hover:opacity-90 transition"
            >
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;