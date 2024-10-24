import { useState } from "react";
import React from "react";
import data from  "./data";
import Tours from "./components/Tours"

const App = () => {
  const [tours,settours] = useState(data);
  function removetour(id){
    const newtours = tours.filter(tour => tour.id !== id);
    settours(newtours);
  }
  if(tours.length === 0){
    return(
      <div className="refresh">
        <h1>STAY AT HOME</h1>
        <button className="btn-white" onClick={()=> settours(data)}>
          IF YOU EVER CHANGE YOUR MIND
        </button>
      </div>
    );
  }

  return <div>
    
    <Tours tours={tours} removetour={removetour}></Tours>
    {/* removetour={removetour} means props is passed */}
  </div>;
};

export default App;
