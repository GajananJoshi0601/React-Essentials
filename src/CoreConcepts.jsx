import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "./data";


export default function CoreConcepts(){
    return (
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {/* Map produces a new array based on existing array */}
          {CORE_CONCEPTS.map((conceptItem)=>
          <CoreConcept key={conceptItem.title} {...conceptItem}/>)}  
        </ul>
      </section>
    );
} 