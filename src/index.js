//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentHour = date.getHours();

let greeting;
const customtyling = {
  color: ""
};

if (currentHour < 12) {
  greeting = "Good Morning";
  customtyling.color = "red";
} else if (currentHour < 18) {
  greeting = "Good Afternoon";
  customtyling.color = "green";
} else {
  greeting = "Good Night";
  customtyling.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customtyling}>
    {greeting}
  </h1>,
  document.getElementById("root")
);

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
