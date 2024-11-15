/*     Create an App component that renders at least three tweets.   */

const App = () => (
  <div>
      <Tweet 
        username="olga14"
        name="Olga"
        date="11/24/2024"
        message="Holidays, holidays, holidays!!!" 
      />
      <Tweet 
        username="pepa20"
        name="Pepa"
        date="11/22/2024"
        message="Working all day." 
      />
      <Tweet 
        username="enrico455"
        name="Enrico"
        date="10/22/2024"
        message="The weekend begins!" 
      /> 
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
