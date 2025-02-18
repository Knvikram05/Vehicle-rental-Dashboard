import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import LandingPage from './component/LandingPage';
import Footer from './component/Footer';
import FeaturedVehicles from './component/FeaturedVehicles';
import ClientFeedback from './component/ClientFeedback';
import PopularDestinations from './component/PopularDestinations';
import { Sidebar } from 'lucide-react';
import VehicleList from './component/VehicleList';
import Header from './component/Header';
import Dashboard from './component/Dashboard';


function App() {
  return (
    <div className="App">
      
      <Dashboard />
      
    </div>
  );
}

export default App;
