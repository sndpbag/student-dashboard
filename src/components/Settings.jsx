// // components/Settings.jsx
// import React, { useState } from 'react';

// const Settings = () => {
//   const [activeTab, setActiveTab] = useState('profile');
  
//   return (
//     <div className="glass rounded-xl p-5 mb-6">
//       <h2 className="text-xl font-semibold mb-6">Settings</h2>
      
//       <div className="flex flex-wrap gap-2 mb-6">
//         <button 
//           onClick={() => setActiveTab('profile')}
//           className={`px-4 py-2 rounded-lg ${
//             activeTab === 'profile' 
//               ? 'bg-gradient-to-r from-pink-400 to-blue-300 text-white' 
//               : 'glass hover:bg-white/20'
//           }`}
//         >
//           Profile
//         </button>
//         <button 
//           onClick={() => setActiveTab('account')}
//           className={`px-4 py-2 rounded-lg ${
//             activeTab === 'account' 
//               ? 'bg-gradient-to-r from-pink-400 to-blue-300 text-white' 
//               : 'glass hover:bg-white/20'
//           }`}
//         >
//           Account
//         </button>
//         <button 
//           onClick={() => setActiveTab('notifications')}
//           className={`px-4 py-2 rounded-lg ${
//             activeTab === 'notifications' 
//               ? 'bg-gradient-to-r from-pink-400 to-blue-300 text-white' 
//               : 'glass hover:bg-white/20'
//           }`}
//         >
//           Notifications
//         </button>
//         <button 
//           onClick={() => setActiveTab('appearance')}
//           className={`px-4 py-2 rounded-lg ${
//             activeTab === 'appearance' 
//               ? 'bg-gradient-to-r from-pink-400 to-blue-300 text-white' 
//               : 'glass hover:bg-white/20'
//           }`}
//         >
//           Appearance
//         </button>
//       </div>
      
//       {/* Profile Settings */}
//       {activeTab === 'profile' && (
//         <div className="glass rounded-xl p-6">
//           <h3 className="text-lg font-medium mb-6">Profile Settings</h3>
          
//           <div className="flex flex-col md:flex-row gap-6 mb-6">
//             <div className="flex-shrink-0">
//               <div className="w-32 h-32 rounded-xl bg-gradient-to-r from-pink-400 to-blue-300 flex items-center justify-center text-white text-4xl font-bold">
//                 JS
//               </div>
//               <button className="mt-3 w-full text-center glass px-3 py-2 rounded-lg hover:bg-white/20 text-sm">
//                 Change Photo
//               </button>
//             </div>
            
//             <div className="flex-grow space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">First Name</label>
//                   <input 
//                     type="text" 
//                     className="glass w-full rounded-lg px-4 py-2 focus:outline-none" 
//                     placeholder="John"
//                     defaultValue="John"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Last Name</label>
//                   <input 
//                     type="text" 
//                     className="glass w-full rounded-lg px-4 py-2 focus:outline-none" 
//                     placeholder="Smith"
//                     defaultValue="Smith"
//                   />
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium mb-1">Email</label>
//                 <input 
//                   type="email" 
//                   className="glass w-full rounded-lg px-4 py-2 focus:outline-none" 
//                   placeholder="john@example.com"
//                   defaultValue="john@example.com"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium mb-1">Bio</label>
//                 <textarea 
//                   className="glass w-full rounded-lg px-4 py-2 focus:outline-none" 
//                   rows="3"
//                   placeholder="Tell us about yourself"
//                   defaultValue="UI/UX Designer and Frontend Developer passionate about creating beautiful, functional interfaces."
//                 ></textarea>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex justify-end">
//             <button className="px-6 py-2 bg-gradient-to-r from-pink-400 to-blue-300 text-white rounded-lg hover:opacity-90 transition">
//               Save Changes
//             </button>
//           </div>
//         </div>
//       )}
      
//       {/* Account Settings */}
//       {activeTab === 'account' && (
//         <div className="glass rounded-xl p-6">
//           <h3 className="text-lg font-medium mb-6">Account Settings</h3>
          
//           <div className="space-y-6">
//             <div>
//               <h4 className="font-medium mb-3">Change Password</h4>
//               <div className="space-y-3">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Current Password</label>
//                   <input 
//                     type="password" 
//                     className="glass w-full rounded-lg px-4 py-2 focus:outline-none" 
//                     placeholder="••••••••"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">New Password</label>
//                   <input 
//                     type="password" 
//                     className="glass w-full rounded-lg px-4 py-2 focus:outline-none" 
//                     placeholder="••••••••"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Confirm New Password</label>
//                   <input 
//                     type="password" 
//                     className="glass w-full rounded-lg px-4 py-2 focus:outline-none" 
//                     placeholder="••••••••"
//                   />
//                 </div>
//               </div>
//               <div className="mt-3">
//                 <button className="px-6 py-2 bg-gradient-to-r from-pink-400 to-blue-300 text-white rounded-lg hover:opacity-90 transition">
//                   Update Password
//                 </button>
//               </div>
//             </div>
            
//             <div className="border-t border-gray-200 pt-6">
//               <h4 className="font-medium mb-3">Linked Accounts</h4>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center gap-3">
//                     <div className="glass p-2 rounded-lg">
//                       <i className="fab fa-google"></i>
//                     </div>
//                     <div>
//                       <p className="font-medium">Google</p>
//                       <p className="text-sm text-gray-600">Connected</p>
//                     </div>
//                   </div>
//                   <button className="glass px-3 py-1 rounded-lg hover:bg-white/20 text-sm">
//                     Disconnect
//                   </button>
//                 </div>
                
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center gap-3">
//                     <div className="glass p-2 rounded-lg">
//                       <i className="fab fa-github"></i>
//                     </div>
//                     <div>
//                       <p className="font-medium">GitHub</p>
//                       <p className="text-sm text-gray-600">Not Connected</p>
//                     </div>
//                   </div>
//                   <button className="glass px-3 py-1 rounded-lg hover:bg-white/20 text-sm">
//                     Connect
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             <div className="border-t border-gray-200 pt-6">
//               <h4 className="font-medium mb-3 text-red-500">Danger Zone</h4>
//               <div>
//                 <button className="glass px-4 py-2 rounded-lg text-red-500 hover:bg-red-50 transition">
//                   Delete Account
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Notifications Settings */}
//       {activeTab === 'notifications' && (
//         <div className="glass rounded-xl p-6">
//           <h3 className="text-lg font-medium mb-6">Notification Settings</h3>
          
//           <div className="space-y-4">
//             <div className="flex justify-between items-center pb-3 border-b border-gray-200">
//               <div>
//                 <h4 className="font-medium">Email Notifications</h4>
//                 <p className="text-sm text-gray-600">Receive notifications via email</p>
//               </div>
//               <div className="relative inline-block w-12 h-6">
//                 <input type="checkbox" id="toggle-email" className="opacity-0 w-0 h-0" defaultChecked />
//                 <label htmlFor="toggle-email" className="glass block overflow-hidden h-6 rounded-full cursor-pointer">
//                   <span className="absolute left-1 top-1 bg-gradient-to-r from-pink-400 to-blue-300 block w-4 h-4 rounded-full transform translate-x-0 transition"></span>
//                 </label>
//               </div>
//             </div>
            
//             <div className="flex justify-between items-center pb-3 border-b border-gray-200">
//               <div>
//                 <h4 className="font-medium">Push Notifications</h4>
//                 <p className="text-sm text-gray-600">Receive notifications on your device</p>
//               </div>
//               <div className="relative inline-block w-12 h-6">
//                 <input type="checkbox" id="toggle-push" className="opacity-0 w-0 h-0" defaultChecked />
//                 <label htmlFor="toggle-push" className="glass block overflow-hidden h-6 rounded-full cursor-pointer">
//                   <span className="absolute left-1 top-1 bg-gradient-to-r from-pink-400 to-blue-300 block w-4 h-4 rounded-full transform translate-x-0 transition"></span>
//                 </label>
//               </div>
//             </div>
            
//             <div className="flex justify-between items-center pb-3 border-b border-gray-200">
//               <div>
//                 <h4 className="font-medium">Assignment Reminders</h4>
//                 <p className="text-sm text-gray-600">Get reminders about due assignments</p>
//               </div>
//               <div className="relative inline-block w-12 h-6">
//                 <input type="checkbox" id="toggle-assignment" className="opacity-0 w-0 h-0" defaultChecked />
//                 <label htmlFor="toggle-assignment" className="glass block overflow-hidden h-6 rounded-full cursor-pointer">
//                   <span className="absolute left-1 top-1 bg-gradient-to-r from-pink-400 to-blue-300 block w-4 h-4 rounded-full transform translate-x-0 transition"></span>
//                 </label>
//               </div>
//             </div>
            
//             <div className="flex justify-between items-center pb-3 border-b border-gray-200">
//               <div>
//                 <h4 className="font-medium">Team Updates</h4>
//                 <p className="text-sm text-gray-600">Get notified about team activities</p>
//               </div>
//               <div className="relative inline-block w-12 h-6">
//                 <input type="checkbox" id="toggle-team" className="opacity-0 w-0 h-0" />
//                 <label htmlFor="toggle-team" className="glass block overflow-hidden h-6 rounded-full cursor-pointer">
//                   <span className="absolute left-1 top-1 bg-gradient-to-r from-pink-400 to-blue-300 block w-4 h-4 rounded-full transform translate-x-0 transition"></span>
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Appearance Settings */}
//       {activeTab === 'appearance' && (
//         <div className="glass rounded-xl p-6">
//           <h3 className="text-lg font-medium mb-6">Appearance Settings</h3>
          
//           <div className="space-y-6">
//             <div>
//               <h4 className="font-medium mb-3">Theme</h4>
//               <div className="grid grid-cols-3 gap-4">
//                 <div className="glass p-4 rounded-lg flex flex-col items-center cursor-pointer bg-gradient-to-r from-pink-400/20 to-blue-300/20">
//                   <div className="w-full h-16 rounded-lg bg-gradient-to-r from-pink-400 to-blue-300 mb-2"></div>
//                   <span className="text-sm font-medium">Glassmorphism</span>
//                 </div>
//                 <div className="glass p-4 rounded-lg flex flex-col items-center cursor-pointer">
//                   <div className="w-full h-16 rounded-lg bg-gray-900 mb-2"></div>
//                   <span className="text-sm font-medium">Dark</span>
//                 </div>
//                 <div className="glass p-4 rounded-lg flex flex-col items-center cursor-pointer">
//                   <div className="w-full h-16 rounded-lg bg-white mb-2"></div>
//                   <span className="text-sm font-medium">Light</span>
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h4 className="font-medium mb-3">Accent Color</h4>
//               <div className="grid grid-cols-5 gap-4">
//                 <div className="flex flex-col items-center">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-blue-300 mb-2 ring-2 ring-blue-300"></div>
//                   <span className="text-xs">Default</span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 mb-2"></div>
//                   <span className="text-xs">Indigo</span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-teal-500 mb-2"></div>
//                   <span className="text-xs">Teal</span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500 mb-2"></div>
//                   <span className="text-xs">Amber</span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 mb-2"></div>
//                   <span className="text-xs">Blue</span>
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h4 className="font-medium mb-3">Font Size</h4>
//               <div className="flex items-center space-x-4">
//                 <span className="text-sm">A</span>
//                 <input type="range" min="1" max="5" step="1" defaultValue="3" className="w-full" />
//                 <span className="text-lg">A</span>
//               </div>
//             </div>
            
//             <div className="border-t border-gray-200 pt-6">
//               <div className="flex justify-end">
//                 <button className="px-6 py-2 bg-gradient-to-r from-pink-400 to-blue-300 text-white rounded-lg hover:opacity-90 transition">
//                   Apply Changes
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Settings;


// components/Settings.jsx
import React, { useState, useRef } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Smith',
    email: 'john@example.com',
    bio: 'UI/UX Designer and Frontend Developer passionate about creating beautiful, functional interfaces.',
  });
  const [currentTheme, setCurrentTheme] = useState('glassmorphism');
  const [accentColor, setAccentColor] = useState('default');
  const [fontSize, setFontSize] = useState(3);
  const [profileImage, setProfileImage] = useState(null);
  const [toggles, setToggles] = useState({
    email: true,
    push: true,
    assignment: true,
    team: false
  });
  
  const fileInputRef = useRef(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle toggle changes
  const handleToggleChange = (toggle) => {
    setToggles({
      ...toggles,
      [toggle]: !toggles[toggle]
    });
  };

  // Handle file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Handle theme selection
  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  // Handle accent color selection
  const handleAccentColorChange = (color) => {
    setAccentColor(color);
  };

  // Get initials for avatar
  const getInitials = () => {
    return `${formData.firstName.charAt(0)}${formData.lastName.charAt(0)}`;
  };

  return (
    <div className="glass rounded-xl p-5 mb-6">
      <h2 className="text-xl font-semibold mb-6">Settings</h2>
      
      <div className="flex flex-wrap gap-2 mb-6">
        <button 
          onClick={() => setActiveTab('profile')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'profile' 
              ? 'bg-gradient-to-r from-pink-400 to-blue-300 text-white' 
              : 'glass hover:bg-white/20'
          }`}
        >
          Profile
        </button>
        <button 
          onClick={() => setActiveTab('account')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'account' 
              ? 'bg-gradient-to-r from-pink-400 to-blue-300 text-white' 
              : 'glass hover:bg-white/20'
          }`}
        >
          Account
        </button>
        <button 
          onClick={() => setActiveTab('notifications')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'notifications' 
              ? 'bg-gradient-to-r from-pink-400 to-blue-300 text-white' 
              : 'glass hover:bg-white/20'
          }`}
        >
          Notifications
        </button>
        <button 
          onClick={() => setActiveTab('appearance')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'appearance' 
              ? 'bg-gradient-to-r from-pink-400 to-blue-300 text-white' 
              : 'glass hover:bg-white/20'
          }`}
        >
          Appearance
        </button>
      </div>
      
      {/* Profile Settings */}
      {activeTab === 'profile' && (
        <div className="glass rounded-xl p-6">
          <h3 className="text-lg font-medium mb-6">Profile Settings</h3>
          
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-xl overflow-hidden">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-pink-400 to-blue-300 flex items-center justify-center text-white text-4xl font-bold">
                    {getInitials()}
                  </div>
                )}
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                onChange={handleImageUpload}
              />
              <button 
                className="mt-3 w-full text-center glass px-3 py-2 rounded-lg hover:bg-white/20 text-sm"
                onClick={triggerFileInput}
              >
                Change Photo
              </button>
            </div>
            
            <div className="flex-grow space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    className="glass w-full rounded-lg px-4 py-2 focus:outline-none" 
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    className="glass w-full rounded-lg px-4 py-2 focus:outline-none" 
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  className="glass w-full rounded-lg px-4 py-2 focus:outline-none" 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Bio</label>
                <textarea 
                  name="bio"
                  className="glass w-full rounded-lg px-4 py-2 focus:outline-none" 
                  rows="3"
                  placeholder="Tell us about yourself"
                  value={formData.bio}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button 
              className="px-6 py-2 bg-gradient-to-r from-pink-400 to-blue-300 text-white rounded-lg hover:opacity-90 transition"
              onClick={() => alert('Profile settings saved!')}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
      
      {/* Account Settings */}
      {activeTab === 'account' && (
        <div className="glass rounded-xl p-6">
          <h3 className="text-lg font-medium mb-6">Account Settings</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3">Change Password</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Current Password</label>
                  <input 
                    type="password" 
                    className="glass w-full rounded-lg px-4 py-2 focus:outline-none" 
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">New Password</label>
                  <input 
                    type="password" 
                    className="glass w-full rounded-lg px-4 py-2 focus:outline-none" 
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                  <input 
                    type="password" 
                    className="glass w-full rounded-lg px-4 py-2 focus:outline-none" 
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div className="mt-3">
                <button 
                  className="px-6 py-2 bg-gradient-to-r from-pink-400 to-blue-300 text-white rounded-lg hover:opacity-90 transition"
                  onClick={() => alert('Password updated!')}
                >
                  Update Password
                </button>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h4 className="font-medium mb-3">Linked Accounts</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="glass p-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Google</p>
                      <p className="text-sm text-gray-600">Connected</p>
                    </div>
                  </div>
                  <button 
                    className="glass px-3 py-1 rounded-lg hover:bg-white/20 text-sm"
                    onClick={() => alert('Google account disconnected!')}
                  >
                    Disconnect
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="glass p-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-gray-600">Not Connected</p>
                    </div>
                  </div>
                  <button 
                    className="glass px-3 py-1 rounded-lg hover:bg-white/20 text-sm"
                    onClick={() => alert('GitHub account connected!')}
                  >
                    Connect
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h4 className="font-medium mb-3 text-red-500">Danger Zone</h4>
              <div>
                <button 
                  className="glass px-4 py-2 rounded-lg text-red-500 hover:bg-red-50 transition"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                      alert('Account deletion initiated');
                    }
                  }}
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Notifications Settings */}
      {activeTab === 'notifications' && (
        <div className="glass rounded-xl p-6">
          <h3 className="text-lg font-medium mb-6">Notification Settings</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <div>
                <h4 className="font-medium">Email Notifications</h4>
                <p className="text-sm text-gray-600">Receive notifications via email</p>
              </div>
              <div className="relative inline-block w-12 h-6">
                <input 
                  type="checkbox" 
                  id="toggle-email" 
                  className="opacity-0 w-0 h-0" 
                  checked={toggles.email}
                  onChange={() => handleToggleChange('email')}
                />
                <label 
                  htmlFor="toggle-email" 
                  className="glass block overflow-hidden h-6 rounded-full cursor-pointer"
                >
                  <span 
                    className={`absolute top-1 bg-gradient-to-r from-pink-400 to-blue-300 block w-4 h-4 rounded-full transform transition ${
                      toggles.email ? 'left-7' : 'left-1'
                    }`}
                  ></span>
                </label>
              </div>
            </div>
            
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <div>
                <h4 className="font-medium">Push Notifications</h4>
                <p className="text-sm text-gray-600">Receive notifications on your device</p>
              </div>
              <div className="relative inline-block w-12 h-6">
                <input 
                  type="checkbox" 
                  id="toggle-push" 
                  className="opacity-0 w-0 h-0" 
                  checked={toggles.push}
                  onChange={() => handleToggleChange('push')}
                />
                <label 
                  htmlFor="toggle-push" 
                  className="glass block overflow-hidden h-6 rounded-full cursor-pointer"
                >
                  <span 
                    className={`absolute top-1 bg-gradient-to-r from-pink-400 to-blue-300 block w-4 h-4 rounded-full transform transition ${
                      toggles.push ? 'left-7' : 'left-1'
                    }`}
                  ></span>
                </label>
              </div>
            </div>
            
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <div>
                <h4 className="font-medium">Assignment Reminders</h4>
                <p className="text-sm text-gray-600">Get reminders about due assignments</p>
              </div>
              <div className="relative inline-block w-12 h-6">
                <input 
                  type="checkbox" 
                  id="toggle-assignment" 
                  className="opacity-0 w-0 h-0" 
                  checked={toggles.assignment}
                  onChange={() => handleToggleChange('assignment')}
                />
                <label 
                  htmlFor="toggle-assignment" 
                  className="glass block overflow-hidden h-6 rounded-full cursor-pointer"
                >
                  <span 
                    className={`absolute top-1 bg-gradient-to-r from-pink-400 to-blue-300 block w-4 h-4 rounded-full transform transition ${
                      toggles.assignment ? 'left-7' : 'left-1'
                    }`}
                  ></span>
                </label>
              </div>
            </div>
            
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <div>
                <h4 className="font-medium">Team Updates</h4>
                <p className="text-sm text-gray-600">Get notified about team activities</p>
              </div>
              <div className="relative inline-block w-12 h-6">
                <input 
                  type="checkbox" 
                  id="toggle-team" 
                  className="opacity-0 w-0 h-0" 
                  checked={toggles.team}
                  onChange={() => handleToggleChange('team')}
                />
                <label 
                  htmlFor="toggle-team" 
                  className="glass block overflow-hidden h-6 rounded-full cursor-pointer"
                >
                  <span 
                    className={`absolute top-1 bg-gradient-to-r from-pink-400 to-blue-300 block w-4 h-4 rounded-full transform transition ${
                      toggles.team ? 'left-7' : 'left-1'
                    }`}
                  ></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Appearance Settings */}
      {activeTab === 'appearance' && (
        <div className="glass rounded-xl p-6">
          <h3 className="text-lg font-medium mb-6">Appearance Settings</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3">Theme</h4>
              <div className="grid grid-cols-3 gap-4">
                <div 
                  className={`glass p-4 rounded-lg flex flex-col items-center cursor-pointer ${
                    currentTheme === 'glassmorphism' ? 'bg-gradient-to-r from-pink-400/20 to-blue-300/20 ring-2 ring-blue-300' : ''
                  }`}
                  onClick={() => handleThemeChange('glassmorphism')}
                >
                  <div className="w-full h-16 rounded-lg bg-gradient-to-r from-pink-400 to-blue-300 mb-2"></div>
                  <span className="text-sm font-medium">Glassmorphism</span>
                </div>
                <div 
                  className={`glass p-4 rounded-lg flex flex-col items-center cursor-pointer ${
                    currentTheme === 'dark' ? 'bg-gradient-to-r from-pink-400/20 to-blue-300/20 ring-2 ring-blue-300' : ''
                  }`}
                  onClick={() => handleThemeChange('dark')}
                >
                  <div className="w-full h-16 rounded-lg bg-gray-900 mb-2"></div>
                  <span className="text-sm font-medium">Dark</span>
                </div>
                <div 
                  className={`glass p-4 rounded-lg flex flex-col items-center cursor-pointer ${
                    currentTheme === 'light' ? 'bg-gradient-to-r from-pink-400/20 to-blue-300/20 ring-2 ring-blue-300' : ''
                  }`}
                  onClick={() => handleThemeChange('light')}
                >
                  <div className="w-full h-16 rounded-lg bg-white mb-2"></div>
                  <span className="text-sm font-medium">Light</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Accent Color</h4>
              <div className="grid grid-cols-5 gap-4">
                <div 
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => handleAccentColorChange('default')}
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-blue-300 mb-2 ${
                    accentColor === 'default' ? 'ring-2 ring-blue-300' : ''
                  }`}></div>
                  <span className="text-xs">Default</span>
                </div>
                <div 
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => handleAccentColorChange('indigo')}
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 mb-2 ${
                    accentColor === 'indigo' ? 'ring-2 ring-blue-300' : ''
                  }`}></div>
                  <span className="text-xs">Indigo</span>
                </div>
                <div 
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => handleAccentColorChange('teal')}
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-teal-500 mb-2 ${
                    accentColor === 'teal' ? 'ring-2 ring-blue-300' : ''
                  }`}></div>
                  <span className="text-xs">Teal</span>
                </div>
                <div 
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => handleAccentColorChange('amber')}
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500 mb-2 ${
                    accentColor === 'amber' ? 'ring-2 ring-blue-300' : ''
                  }`}></div>
                  <span className="text-xs">Amber</span>
                </div>
                <div 
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => handleAccentColorChange('blue')}
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 mb-2 ${
                    accentColor === 'blue' ? 'ring-2 ring-blue-300' : ''
                  }`}></div>
                  <span className="text-xs">Blue</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Font Size</h4>
              <div className="flex items-center space-x-4">
                <span className="text-sm">A</span>
                <input 
                  type="range" 
                  min="1" 
                  max="5" 
                  step="1" 
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full" 
                />
                <span className="text-lg">A</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-end">
                <button 
                  className="px-6 py-2 bg-gradient-to-r from-pink-400 to-blue-300 text-white rounded-lg hover:opacity-90 transition"
                  onClick={() => alert(`Theme settings applied: ${currentTheme} theme with ${accentColor} accent`)}
                >
                  Apply Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;