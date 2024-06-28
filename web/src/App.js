import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import { ThemeProviderWrapper } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  return (
    <ThemeProviderWrapper>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/dashboard' element={<DashboardPage/>} />
        </Routes>
      </Router>
    </ThemeProviderWrapper>
  );
};

export default App;