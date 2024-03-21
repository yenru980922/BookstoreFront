// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import HomePage from './Pages/HomePage/HomePage';
import AddUsedBook from './Pages/UseBookCreate/index';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="usedbooks/create" element={<AddUsedBook />} />
          
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
