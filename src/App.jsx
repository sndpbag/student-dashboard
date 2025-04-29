// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Videos from './components/Videos';
import Quiz from './components/Quiz';
import Analytics from './components/Analytics';
import Team from './components/Team';
import Projects from './components/Projects';
import Calendar from './components/Calendar';
import Settings from './components/Settings';

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="videos" element={<Videos />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="team" element={<Team />} />
        <Route path="projects" element={<Projects />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
