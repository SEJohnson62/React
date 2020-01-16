import React from 'react';
import './App.css';

import RenderProducts from './RenderProducts.js';
import RenderCompanies from './RenderCompanies.js';
import RenderUsers from './RenderUsers.js';
import RenderStats from './RenderStats.js';


function App() {
  return (
    <main>
      <RenderProducts />
      <RenderUsers />
      <RenderCompanies />
      <RenderStats />
    </main>
  );
}

export default App;
