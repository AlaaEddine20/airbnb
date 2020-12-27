import React from "react";
import { Button, Image } from "react-bootstrap";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div id="banner-info">
        <div id="banner-text">
          <h1>Go Near</h1>
        </div>
        <div id="banner-button">
          <Button variant="light">Explore nearby stays</Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
