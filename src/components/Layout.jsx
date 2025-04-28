// components/Layout.jsx - Main layout with sidebar and header
import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import UserProfileModal from './modals/UserProfileModal';
import LogoutModal from './modals/LogoutModal';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserProfileModalOpen, setIsUserProfileModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    alert('Logged out successfully!');
    setIsLogoutModalOpen(false);
    // Add actual logout logic here
  };

  return (
    <div className="bg-gradient min-h-screen text-gray-800 overflow-x-hidden">
      {/* Decorative blobs */}
      <div className="blob bg-pink-300 w-96 h-96 top-0 right-0"></div>
      <div className="blob bg-blue-200 w-96 h-96 bottom-0 left-0"></div>
      <div className="blob bg-red-200 w-72 h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="glass rounded-xl p-4 mb-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button onClick={toggleMobileMenu} className="md:hidden glass p-2 rounded-lg">
              <i className="fas fa-bars"></i>
            </button>
            <div className="bg-gradient-to-r from-pink-400 to-blue-300 p-2 rounded-lg text-white">
              <i className="fas fa-chart-pie"></i>
            </div>
            <h1 className="text-xl font-semibold">Student Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="glass p-2 rounded-lg cursor-pointer">
              <i className="fas fa-bell"></i>
            </div>
            <div 
              onClick={() => setIsUserProfileModalOpen(true)}
              className="flex items-center gap-2 glass p-1 pl-3 pr-3 rounded-lg cursor-pointer"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-blue-300 rounded-full flex items-center justify-center text-white">
                JD
              </div>
              <span className="hidden md:inline">sndp bag</span>
              <i className="fas fa-chevron-down text-xs ml-1"></i>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
          {/* Mobile Sidebar Overlay */}
          {isMobileMenuOpen && (
            <div 
              onClick={closeMobileMenu}
              className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
            ></div>
          )}
          
          {/* Sidebar */}
          <div className={`md:col-span-3 lg:col-span-2 glass rounded-xl p-4 h-max z-40 fixed md:static inset-y-0 left-0 w-64 md:w-auto mobile-menu md:transform-none ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="flex justify-between items-center md:hidden mb-6">
              <h2 className="font-semibold">Menu</h2>
              <button onClick={closeMobileMenu} className="p-2">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              <NavLink 
                to="/" 
                className={({isActive}) => `flex items-center gap-3 p-3 rounded-lg ${isActive ? 'bg-gradient-to-r from-pink-400/30 to-blue-300/30' : 'hover:bg-white/20'} transition`}
                onClick={closeMobileMenu}
              >
                <i className="fas fa-home"></i>
                <span>Dashboard</span>
              </NavLink>
              <NavLink 
                to="/videos" 
                className={({isActive}) => `flex items-center gap-3 p-3 rounded-lg ${isActive ? 'bg-gradient-to-r from-pink-400/30 to-blue-300/30' : 'hover:bg-white/20'} transition`}
                onClick={closeMobileMenu}
              >
                <i className="fas fa-video"></i>
                <span>Videos</span>
              </NavLink>
              <NavLink 
                to="/quiz" 
                className={({isActive}) => `flex items-center gap-3 p-3 rounded-lg ${isActive ? 'bg-gradient-to-r from-pink-400/30 to-blue-300/30' : 'hover:bg-white/20'} transition`}
                onClick={closeMobileMenu}
              >
                <i className="fas fa-question-circle"></i>
                <span>Quiz</span>
              </NavLink>
              <NavLink 
                to="/analytics" 
                className={({isActive}) => `flex items-center gap-3 p-3 rounded-lg ${isActive ? 'bg-gradient-to-r from-pink-400/30 to-blue-300/30' : 'hover:bg-white/20'} transition`}
                onClick={closeMobileMenu}
              >
                <i className="fas fa-chart-line"></i>
                <span>Analytics</span>
              </NavLink>
              <NavLink 
                to="/team" 
                className={({isActive}) => `flex items-center gap-3 p-3 rounded-lg ${isActive ? 'bg-gradient-to-r from-pink-400/30 to-blue-300/30' : 'hover:bg-white/20'} transition`}
                onClick={closeMobileMenu}
              >
                <i className="fas fa-users"></i>
                <span>Team</span>
              </NavLink>
              <NavLink 
                to="/projects" 
                className={({isActive}) => `flex items-center gap-3 p-3 rounded-lg ${isActive ? 'bg-gradient-to-r from-pink-400/30 to-blue-300/30' : 'hover:bg-white/20'} transition`}
                onClick={closeMobileMenu}
              >
                <i className="fas fa-folder"></i>
                <span>Projects</span>
              </NavLink>
              <NavLink 
                to="/calendar" 
                className={({isActive}) => `flex items-center gap-3 p-3 rounded-lg ${isActive ? 'bg-gradient-to-r from-pink-400/30 to-blue-300/30' : 'hover:bg-white/20'} transition`}
                onClick={closeMobileMenu}
              >
                <i className="fas fa-calendar"></i>
                <span>Calendar</span>
              </NavLink>
              <NavLink 
                to="/settings" 
                className={({isActive}) => `flex items-center gap-3 p-3 rounded-lg ${isActive ? 'bg-gradient-to-r from-pink-400/30 to-blue-300/30' : 'hover:bg-white/20'} transition`}
                onClick={closeMobileMenu}
              >
                <i className="fas fa-cog"></i>
                <span>Settings</span>
              </NavLink>
              <button 
                onClick={() => setIsLogoutModalOpen(true)} 
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition text-red-500 mt-6"
              >
                <i className="fas fa-sign-out-alt"></i>
                <span>Logout</span>
              </button>
            </nav>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-9 lg:col-span-10 md:ml-0 transition-all duration-300">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Modals */}
      {isUserProfileModalOpen && (
        <UserProfileModal onClose={() => setIsUserProfileModalOpen(false)} />
      )}
      
      {isLogoutModalOpen && (
        <LogoutModal 
          onClose={() => setIsLogoutModalOpen(false)}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
};

export default Layout;