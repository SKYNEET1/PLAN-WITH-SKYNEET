


App Component (Main Component)
jsx

import { useState } from "react";
import React from "react";
import data from  "./data";
import Tours from "./components/Tours";
useState: This is a React Hook that lets you use state in a functional component. State allows React components to remember values between renders.
React: This is the main library needed to create React components and use features like JSX (HTML-like syntax in JavaScript).
data: This imports a list of tour information from the data file.
Tours: This imports the Tours component, which will handle rendering the list of tours.

jsx

const App = () => {
  const [tours, settours] = useState(data);
[tours, settours]: Here, the useState hook is used. tours holds the data of all tours, and settours is the function to update that data.
data: This is the initial state, which contains all the tour information from the imported data file.

jsx

function removetour(id) {
  const newtours = tours.filter(tour => tour.id !== id);
  settours(newtours);
}
removetour(id): This function takes an id as an argument and filters out the tour with that id. It then updates the tours state with the remaining tours using settours.
tours.filter: This method creates a new array excluding the tour whose ID matches the one passed into the function.
settours(newtours): Updates the state with the filtered tours.

jsx

if(tours.length === 0) {
  return (
    <div className="refresh">
      <h1>STAY AT HOME</h1>
      <button className="btn-white" onClick={() => settours(data)}>
        IF YOU EVER CHANGE YOUR MIND
      </button>
    </div>
  );
}
This part checks if the tours array is empty. If no tours are left (because they've all been removed), a message saying "STAY AT HOME" is shown along with a button.
settours(data): If the button is clicked, the tours list is reset to the original data, restoring all tours.

jsx

return (
  <div>
    <Tours tours={tours} removetour={removetour}></Tours>
  </div>
);
If there are still tours available, this renders the Tours component, passing down the tours and removetour function as props.
Tours Component

jsx

function Tours({tours, removetour}) {
  return (
    <div className="container">
      <div>
        <h1 className="title">Plan with SKYNEET!!</h1>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return (
            <Card key={tour.id} {...tour} removetour={removetour}></Card>
          );
        })}
      </div>
    </div>
  );
}
tours.map((tour)): This loops through the tours array and renders a Card component for each tour.
{...tour}: This is the spread operator, which passes all properties of the tour object (like id, name, info, etc.) as props to the Card component.
removetour={removetour}: This passes the removetour function to each Card component.
Card Component

jsx

function Card({id, image, info, price, name, removetour}) {
  const [readmore, setreadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0,200)}....`;

  function readmoreHandler() {
    setreadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image"></img>
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `show less` : `read more`}
          </span>
        </div>
      </div>
      <button className="btn-red" onClick={() => removetour(id)}>
        Not Interested
      </button>
    </div>
  );
}
readmore state: Controls whether the full description (info) of the tour is shown or just the first 200 characters.
readmoreHandler(): This function toggles the readmore state between true and false, showing either the full description or a shortened version.
onClick={() => removetour(id)}: When the "Not Interested" button is clicked, it triggers the removetour function with the current tour's id, removing the tour.
Data File

jsx

const data = [ 
  { id: 1, name: "Agra", ... },
  { id: 2, name: "Jaipur", ... },
  // More tour objects here
];

export default data;
This file contains an array of tour objects, each having properties like id, name, info, image, and price.
It exports the array as data, which is imported into the App component to be used as the initial state for the tours.