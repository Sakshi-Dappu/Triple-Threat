import React from "react";
// import Counter from "./component/EBComponents/Counter";
// import ErrorBoundary from "./component/EBComponents/ErrorBoundary";
import Weather from "./component/Weather";
import ErrorBoundary from "./component/ErrorBoundary";
export default function App() {
  return (
    <div>
      <ErrorBoundary>
        <Weather />
      </ErrorBoundary>
    </div>
  );
}
