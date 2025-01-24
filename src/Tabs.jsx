import TabButton from "./TabButton";

// setting ButtonContainer = menu as a default prop value 
export default function Tabs({children, button, ButtonContainer = 'menu'}){
    return(
    <>
       <ButtonContainer>{button}</ButtonContainer>
        {children}
    </>
    );
}
