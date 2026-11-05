import { Routes, Route } from 'react-router-dom';
import ServicesList from './pages/ServicesList';
import ServiceDetails from './pages/ServiceDetails';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ServicesList />} />
        <Route path="/:id/details" element={<ServiceDetails />} />
      </Routes>
    </div>
  );
}