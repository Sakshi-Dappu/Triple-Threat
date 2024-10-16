import React from "react";
import { useState } from "react";

export default function App() {
  const [joke, setJoke] = useState("");

  const URL = "https://official-joke-api.appspot.com/jokes/random";

  const JokeGenerator = async () => {
    let response = await fetch(URL);
    let JSONResponse = await response.json();
    console.log(JSONResponse);
    setJoke({ setup: JSONResponse.setup, punchline: JSONResponse.punchline });
  };

  return (
    <div>
      <h3>Random Joke Generator</h3>
      <br />
      <button onClick={JokeGenerator}>Get Joke</button>
      <div className="joke">
        <h4>{joke.setup}</h4>
<p>{joke.punchline}</p>
      </div>
    </div>
  );
}
