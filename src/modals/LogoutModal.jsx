import React from 'react';

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="glass backdrop-blur-xl rounded-xl p-6 w-full max-w-md mx-4 shadow-xl animate-fadeIn">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
            <i className="fas fa-sign-out-alt text-red-500 text-2xl"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">Log Out</h2>
          <p className="text-gray-600">Are you sure you want to log out of your account?</p>
        </div>
        
        <div className="flex gap-3 justify-center">
          <button 
            onClick={onClose}
            className="px-6 py-2 glass rounded-lg flex-1 hover:bg-white/20 transition"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm}
            className="px-6 py-2 bg-gradient-to-r from-pink-400 to-blue-300 text-white rounded-lg flex-1 hover:opacity-90 transition"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;