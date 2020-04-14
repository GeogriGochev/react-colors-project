import React from 'react';
import Palette from './components/Palette/Palette.component';
import seedColors from './data/seedColors';

function App() {
  return (
    <div >
      <Palette palette={seedColors[4]}/>
    </div>
  );
}

export default App;
