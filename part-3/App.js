
const App = () => (
    <div>
        <Person 
            name="Eva" 
            age={22} 
            hobbies={["Reading", "Traveling", "Gardening"]} 
        />
        <Person 
            name="Jose Antonio" 
            age={17} 
            hobbies={["Gaming", "Cooking", "Cycling"]} 
        />
        <Person 
            name="Doria" 
            age={19} 
            hobbies={["Photography", "Drawing", "Dancing"]} 
        />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));



