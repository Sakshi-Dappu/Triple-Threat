import React, { createContext, useContext, useState } from "react";
const ThemeContext = createContext(null);
import "../src/App.css";
export default function App() {
  const [theme, setTheme] = useState("light");

  function Form({ children }) {
    return (
      <Panel title="Welcome">
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </Panel>
    );
  }

  function Panel({ title, children }) {
    const theme = useContext(ThemeContext);
    const className = "panel-" + theme;
    return (
      <section className={className}>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }

  function Button({ children }) {
    const theme = useContext(ThemeContext);
    const className = "button-" + theme;
    return <button className={className}>{children}</button>;
  }

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Form />
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(e) => {
              setTheme(e.target.checked ? "dark" : "light");
            }}
          />
          Use Dark Mode
        </label>
      </ThemeContext.Provider>
    </div>
  );
}
