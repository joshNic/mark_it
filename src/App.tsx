import React from "react";
import { Store } from "./Store";

import { Link } from "@reach/router";

function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  console.log(state);
  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episodes!!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">
            Favourite Episode(s): {state.favourites.length}
          </Link>
        </div>
      </header>

      {props.children}
    </React.Fragment>
  );
}

export default App;
