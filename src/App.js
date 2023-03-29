import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero'
import WhatGet from './components/WhatGet/WhatGet';
import WhatLook from './components/WhatLook/WhatLook';
function App() {
  return (
    <div className="App">
      <Hero />
      <WhatGet />
      <WhatLook />
    </div>
  );
}

export default App;
