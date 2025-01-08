import { CORE_CONCEPTS } from './data.js';
import Header from './Header';
import CoreConcept from './CoreConcept';
import TabButton from './TabButton.jsx';

function App() {
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
            <TabButton label = 'Component'></TabButton>
            <TabButton label = 'JSX'></TabButton>
            <TabButton label = 'Props'></TabButton>
            <TabButton label = 'State'></TabButton>
        </menu>
        </section>
      </main>
    </div>
  );
}

export default App;