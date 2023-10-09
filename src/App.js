import React from "react";
import Card from "./Card";

function App() {
  return (
   <>
   <h1>List of top 5 Series in 2023</h1>
   <div className="container">
    <div className="row">
      <div className="col-4">
      <Card imgSrc="https://picsum.photos/seed/picsum/200/300
"
   titleName="Netflix Originaal Series" 
   sName="strangr Things"
   Link='https://www.netflix.com/in/title/81697981'
   />
      </div>
      <div className="col-4">
 <Card imgSrc="https://picsum.photos/200/300?grayscale"
   titleName="Netflix Originaal Series" 
   sName="strangr Things"
   Link='https://www.netflix.com/tudum/squid-game-the-trials'
   /></div>

    <div className="col-4">
    <Card imgSrc="https://picsum.photos/id/237/200/300"
   titleName="Netflix Originaal Series" 
   sName="strangr Things"
   Link='https://www.netflix.com/tudum/articles/new-halloween-movies-shows-2023'
   /></div>


    </div>
   </div>
   
   </>
  );
}

export default App;
