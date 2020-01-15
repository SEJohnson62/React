import React from 'react';
import './App.css';

import RenderProducts from './RenderProducts.js';
import RenderCompanies from './RenderCompanies.js';
import RenderUsers from './RenderUsers.js';


function App() {
  return (
    <main>
      <RenderProducts />
      <RenderUsers />
      <RenderCompanies />
    </main>
  );
}

export default App;
