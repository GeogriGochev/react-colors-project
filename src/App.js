import React from 'react';
import Palette from './components/Sections/Palette/Palette.component';
import seedColors from './data/seedColors';

function App() {
  return (
    <div >
      <Palette palette={seedColors[5]}/>
    </div>
  );
}

export default App;
