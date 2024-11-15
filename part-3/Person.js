/*    Create a component called Person. Inside of this component, render a p tag which displays “Learn some information about this person”. Each person should have name and age properties.   

If the person is over 18 years old, display an additional h3 that says “please go vote!”. Otherwise, display an h3 that says “you must be 18”. If the person’s name is longer than 8 characters, only display the first six characters of their name.        

Add a property called hobbies to your Person component that accepts an array of hobbies (an array of strings). Your Person component should list each one of these hobbies as an li.       */

const Person = (props) => {
    const displayName = props.name.length > 8 ? props.name.slice(0, 6) : props.name;

    let reply;
    if (props.age > 18) {
        reply = <h3>Please go vote!</h3>;
    } else {
        reply = <h3>You must be 18.</h3>;
    }

    return (
        <div>
            <p>Learn some information about this person:</p>
            <p>Name: {displayName}</p>
            <p>Age: {props.age}</p>
            {reply}
            <h4>Hobbies:</h4>
            <ul>
                {props.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
};

