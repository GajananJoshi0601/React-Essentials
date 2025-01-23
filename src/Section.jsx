
// This section is used to build our own section rather than to use a default section
// By using this we can reduce our code
export default function Section({title ,id ,children}){
    return(
        <section id={id}>
            <h2>{title}</h2>
            {children}
        </section>

    );
}