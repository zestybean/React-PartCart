import React from "react";
import Header from "./components/Layout/Header";
import Parts from "./components/Parts/Parts";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Parts />
      </main>
    </>
  );
}

export default App;
