//Way1
// export default function TabButton({ children }){
//     return(
//         <li><button>{children}</button></li>
//     );
// }

// Way2
export default function TabButton({ label, isSelected, ...props }) {
  console.log('TABUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>{label}</button>
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


// function handleSelect(){
//   console.log("Hello world! -onSelect"); 
// }
//   function onSelect({user}){
//       <li>
//       <button onClick = {onSelect}>{user.loggedIn = true}</button>
//       </li>
//   } 

// function handleSelect(){
//   console.log("Hello world! -onSelect"); 
// }
//   function onSelect({user}){
//       <li>
//       <button onClick = {onSelect}>{user.loggedIn = true}</button>
//       </li>
//   } 