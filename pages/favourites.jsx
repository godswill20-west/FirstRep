export default function Favourite(props){

    // Props
    // We use props in Reactg to 
    // pass data from one component to another
    // (from a parent component to a child component(s)).
    // Props is just a shorter way of saying properties.
    // They are useful when you want the flow of data in your 
    // app to be dynamic.

    let Myname = "henry"
    return(
        <>
            my name is { Myname }
            <h1>My name is {props.name}, my favourite player is namyar</h1>
        </>
        
    )
}