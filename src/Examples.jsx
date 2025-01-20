import { useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from './data.js';

export default function (){
      //Here in a states there must be two values 
  // one is to store the re-rendered value (must be always up-to-date).
  //Second value is used to state-updater-function (assigns new value). 
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton){
    // selectedButtons = "components", "jsx", "props", "state";
    setSelectedTopic(selectedButton);
    console.log(selectedTopic); 
}
 
let tabContent = <p>Please select a topic.</p>;

if(selectedTopic){
   tabContent = (<div id="tab-content">
   <h3>{EXAMPLES[selectedTopic].title}</h3>
   <p>{EXAMPLES[selectedTopic].description}</p>
   <pre>
     <code>{EXAMPLES[selectedTopic].code}</code>
   </pre>
 </div> 
 );
}
    return(         
    <section id='examples'>
            <h2>Examples</h2>
            <menu>
                {/* <TabButton>Component</TabButton> */}
                <TabButton isSelected={selectedTopic === 'components'} 
                onSelect={() => handleSelect('components')} label = 'Components'></TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')} label = 'JSX'></TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')} label = 'Props'></TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')} label = 'State'></TabButton>
        </menu>
        {tabContent}
    </section>
    );
}