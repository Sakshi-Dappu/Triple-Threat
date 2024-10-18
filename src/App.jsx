import React from "react";
import Counter from "./component/EBComponents/Counter";
import ErrorBoundary from "./component/EBComponents/ErrorBoundary";
// import Weather from "./component/Weather";
export default function App() {
  return (
    <div>
      {/* <Weather /> */}
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    </div>
  );
}
