//Way1
// export default function TabButton({ children }){
//     return(
//         <li><button>{children}</button></li>
//     );
// }

// Way2
export default function TabButton({ label }) {
    function handleClick(){
        console.log("Hello world!"); 
    }
  return (
    <li>
      <button onClick={handleClick}>{label}</button>
    </li>
  );
}

// Way3
// export default function TabButton(props){
//     return(
//         <li><button>{props.children}</button></li>
//     );
// }

//The children is a special build-in props
