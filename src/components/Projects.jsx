// components/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'UI/UX Design Project',
      description: 'Create wireframes and prototypes for a mobile application',
      deadline: 'May 15, 2025',
      progress: 75,
      team: ['Alex', 'Sarah', 'Michael']
    },
    {
      id: 2,
      title: 'Frontend Development',
      description: 'Implement responsive dashboard with React and Tailwind CSS',
      deadline: 'May 30, 2025',
      progress: 40,
      team: ['Priya', 'David']
    },
    {
      id: 3,
      title: 'User Research',
      description: 'Conduct user interviews and create personas',
      deadline: 'June 10, 2025',
      progress: 15,
      team: ['Michael', 'Sarah']
    }
  ];

  return (
    <div className="glass rounded-xl p-5 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Active Projects</h2>
        <button className="px-4 py-2 bg-gradient-to-r from-pink-400 to-blue-300 text-white rounded-lg text-sm">
          <i className="fas fa-plus mr-2"></i>New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="glass rounded-xl p-5 hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">{project.title}</h3>
              <div className="glass p-1 rounded-md">
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-pink-400 to-blue-300 h-full" 
                  style={{width: `${project.progress}%`}}
                ></div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex -space-x-2">
                {project.team.map((member, index) => (
                  <div 
                    key={index}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-blue-300 flex items-center justify-center text-white text-xs border-2 border-white"
                  >
                    {member.charAt(0)}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <i className="far fa-calendar mr-1"></i>
                <span>{project.deadline}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;