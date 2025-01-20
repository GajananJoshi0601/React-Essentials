import './CoreConcept.css';

export default function CoreConcept({image, title, description}) {  //rather than props we can use destructuring.
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li> // Custom html components are called props.
  );
} //It creates a collection of props in a single props.