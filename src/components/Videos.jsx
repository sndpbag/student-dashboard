// components/Videos.jsx
import React, { useState } from 'react';

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const videoData = [
    { id: 1, title: 'Getting Started Tutorial', duration: '12:45' },
    { id: 2, title: 'Advanced Dashboard Features', duration: '08:32' },
    { id: 3, title: 'Data Analysis Masterclass', duration: '15:20' }
  ];
  
  const playVideo = (video) => {
    setSelectedVideo(video);
    setTimeout(() => {
      document.getElementById('videoPlayer').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  return (
    <>
      <div className="glass rounded-xl p-5 mb-6">
        <h2 className="text-xl font-semibold mb-4">Video Library</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoData.map(video => (
            <div key={video.id} className="glass rounded-xl p-4 overflow-hidden">
              <div className="video-container mb-3">
                <img src="/api/placeholder/400/225" alt="Video thumbnail" className="rounded-xl w-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="bg-white/20 glass hover:bg-white/30 transition p-3 rounded-full cursor-pointer"
                    onClick={() => playVideo(video)}
                  >
                    <i className="fas fa-play text-white"></i>
                  </div>
                </div>
              </div>
              <h3 className="font-medium">{video.title}</h3>
              <p className="text-sm text-gray-600">Duration: {video.duration}</p>
            </div>
          ))}
        </div>
      </div>
      
      {selectedVideo && (
        <div id="videoPlayer" className="glass rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{selectedVideo.title}</h2>
            <button 
              onClick={() => setSelectedVideo(null)} 
              className="glass p-2 rounded-lg hover:bg-white/20"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="video-container mb-4">
            <img src="/api/placeholder/800/450" alt="Video player" className="rounded-xl w-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 glass p-4 rounded-full">
                <i className="fas fa-play text-white text-xl"></i>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-2 glass rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-pink-400 to-blue-300 h-full" style={{width: '35%'}}></div>
            </div>
            <span className="text-sm">3:45 / 10:30</span>
          </div>
          <div className="flex justify-center gap-4">
            <button className="glass p-3 rounded-full hover:bg-white/20">
              <i className="fas fa-step-backward"></i>
            </button>
            <button className="glass p-3 rounded-full hover:bg-white/20">
              <i className="fas fa-play"></i>
            </button>
            <button className="glass p-3 rounded-full hover:bg-white/20">
              <i className="fas fa-step-forward"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Videos;