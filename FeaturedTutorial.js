import React from 'react';
import './FeaturedTutorial.css'; // Import the CSS file with the correct filename

const featuredTutorialsData = [
  {
    id: 1,
    name: "random header in C++ ",
    description: "This header introduces random number generation facilities. This library allows to produce random numbers using combinations of generators and distributions.Generators: Objects that generate uniformly distributed numbers.",
    image: "https://media.geeksforgeeks.org/img-practice/banner/cpp-programming-basic-to-advanced-thumbnail.webp?v=19598.jpg",
    rating: 4.7,
    username: "geeksforgeeks",
  },
  {
    id: 2,
    name: "Getting Started with the ESP32 Development Board",
    description: "New to ESP32? Start here! The ESP32 is a series of low-cost and low-power System on a Chip (SoC) microcontrollers developed by Espressif that include Wi-Fi and Bluetooth wireless capabilities and dual-core processor. If you’re familiar with the ESP8266, the ESP32 is its successor, loaded with lots of new features.",
    image: "https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2022/10/ESP32-Getting-Started.jpg?resize=1024%2C576&quality=100&strip=all&ssl=1.jpg",
    rating: 4.2,
    username: "randomnerdtutorials",
  },
  {
    id: 3,
    name: "How to Add Random Header Images to Your WordPress Blog",
    description: "Random Header Images Using WordPress Theme CustomizerThis method is easier and is recommended for most WordPress users.You need to head over to Appearance » Customize page to launch WordPress theme customizer.",
    image: "https://www.wpbeginner.com/wp-content/uploads/2017/02/randomheaderimages.jpg",
    rating: 4.8,
    username: "wpbeginner",
  },
];

const FeaturedTutorials = () => {
  return (
    <div className="featured-tutorials">
      <h2 className="featured-tutorials-heading">Featured Tutorials</h2>
      <div className="tutorial-list">
        {featuredTutorialsData.map((tutorial) => (
          <div className="tutorial-card" key={tutorial.id}>
            <img src={tutorial.image} alt={tutorial.name} className="tutorial-image" />
            <div className="tutorial-details">
              <h3>{tutorial.name}</h3>
              <p>{tutorial.description}</p>
              <div className="tutorial-ratings">{tutorial.rating} stars</div>
              <p>By {tutorial.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="center-button">
        <button className="see-all-button">See All Tutorials</button>
      </div>
    </div>
  );
};

export default FeaturedTutorials;
