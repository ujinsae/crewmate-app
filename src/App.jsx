import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Summary from './pages/Summary.jsx';
import CreateCrewmate from './pages/CreateCrewmate.jsx';
import Detail from './pages/Detail.jsx';
import EditCrewmate from './pages/EditCrewmate.jsx';

export default function App() {
  return (
    <div className="app-container">
      <nav style={{ padding: 16, borderBottom: '1px solid #eee' }}>
        <Link to="/">Summary</Link> | <Link to="/create">Create</Link>
      </nav>

      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/create" element={<CreateCrewmate />} />
          <Route path="/crewmate/:id" element={<Detail />} />
          <Route path="/crewmate/:id/edit" element={<EditCrewmate />} />
        </Routes>
      </main>
    </div>
  );
}