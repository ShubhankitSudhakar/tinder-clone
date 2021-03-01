import React from "react"
import './App.css';
import Header from "./Header";
import Tindercards from "./tindercards";
import SwipeButtons from "./Swipebuttons";


function App() {
  return (
    <div className="app">
      
      
      {/*Header*/}
      <Header />
      { /*Tinder Card */}
      <Tindercards />

      { /*Swipe buttons*/}
        <SwipeButtons />
    </div>
  );
}

export default App;
