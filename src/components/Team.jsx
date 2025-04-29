// components/Team.jsx
import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Instructor',
      email: 'alex@example.com',
      status: 'online'
    },
    {
      id: 2,
      name: 'Sarah Miller',
      role: 'Teaching Assistant',
      email: 'sarah@example.com',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Student',
      email: 'michael@example.com',
      status: 'online'
    },
    {
      id: 4,
      name: 'Priya Sharma',
      role: 'Student',
      email: 'priya@example.com',
      status: 'online'
    },
    {
      id: 5,
      name: 'David Wilson',
      role: 'Student',
      email: 'david@example.com',
      status: 'offline'
    }
  ];

  return (
    <div className="glass rounded-xl p-5 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Team Members</h2>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search members..." 
            className="glass rounded-lg pl-8 pr-4 py-2 w-full focus:outline-none"
          />
          <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-200">
              <th className="pb-3 px-2">Name</th>
              <th className="pb-3 px-2">Role</th>
              <th className="pb-3 px-2">Status</th>
              <th className="pb-3 px-2">Contact</th>
              <th className="pb-3 px-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map(member => (
              <tr key={member.id} className="border-b border-gray-200 hover:bg-white/10">
                <td className="py-4 px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-blue-300 flex items-center justify-center text-white font-medium">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-gray-600">{member.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-2">
                  <span className="px-3 py-1 glass rounded-full text-sm">
                    {member.role}
                  </span>
                </td>
                <td className="py-4 px-2">
                  <div className="flex items-center">
                    <span className={`h-2 w-2 rounded-full mr-2 ${member.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                    <span className="capitalize">{member.status}</span>
                  </div>
                </td>
                <td className="py-4 px-2">
                  <div className="flex space-x-2">
                    <button className="glass p-2 rounded-lg hover:bg-white/20">
                      <i className="fas fa-envelope"></i>
                    </button>
                    <button className="glass p-2 rounded-lg hover:bg-white/20">
                      <i className="fas fa-video"></i>
                    </button>
                  </div>
                </td>
                <td className="py-4 px-2">
                  <button className="glass px-3 py-1 rounded-lg hover:bg-white/20 text-sm">
                    View Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Team;