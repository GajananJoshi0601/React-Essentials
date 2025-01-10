import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './Header';
import CoreConcept from './CoreConcept';
import TabButton from './TabButton.jsx';
import { Component } from 'react';

function App() {
  //Here in a states there must be two values 
  // one is to store the re-rendered value (must be always up-to-date).
  //Second value is used to state-updater-function (assigns new value). 
  const [ selectedTopic, setSelectedTopic ] = useState('Please click the button ');

  function handleSelect(selectedButton){
    // selectedButtons = "components", "jsx", "props", "state";
    setSelectedTopic(selectedButton);
    console.log(selectedTopic); 
}
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
        <h2>Examples</h2>
        <menu>
            {/* <TabButton>Component</TabButton> */}
            <TabButton onSelect={() => handleSelect('Component')} label = 'Component'></TabButton>
            <TabButton onSelect={() => handleSelect('jsx')} label = 'JSX'></TabButton>
            <TabButton onSelect={() => handleSelect('props')} label = 'Props'></TabButton>
            <TabButton onSelect={() => handleSelect('state')} label = 'State'></TabButton>
        </menu>   
        {selectedTopic};
        </section>
      </main>
    </div>
  );
}

export default App;
