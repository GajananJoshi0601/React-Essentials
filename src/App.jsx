import Header from './Header'; 
import CoreConcepts from './CoreConcepts.jsx';
import Examples from './Examples.jsx';
// import { Component } from 'react';

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
