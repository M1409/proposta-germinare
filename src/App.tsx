import React from 'react';
import { LayoutSection } from './Components/LayoutSection';

function App() {
  const img = require('./assets/img.png')

  return (
    <div className="App">
      <LayoutSection   height = '600px' src = {img} > 
          <p style = {{color: 'white'}}> Texto Teste</p>
      </LayoutSection>

    </div>
  );
}

export default App;
