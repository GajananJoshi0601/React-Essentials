import { useState } from 'react';
import Header from './Header'; 
import CoreConcepts from './CoreConcepts.jsx';
import Examples from './Examples.jsx';
// import { Component } from 'react';
import { EXAMPLES } from './data.js';

function App() {
  return (
    //Rather than div we can also use <> p </>
  <>  
  <Header/>
  <main>
    <CoreConcepts/>
    <Examples/>
 </main>
</>
  );
}

export default App;
