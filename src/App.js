// Import dependencies
import React, { useRef, useState, useEffect } from "react";

// 1. TODO - Import required model here
// e.g. import * as tfmodel from "@tensorflow-models/tfmodel";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./App.css";
// 2. TODO - Import drawing utility here
// e.g. import { drawRect } from "./utilities";
import ReactPlayer from "react-player";

const videoUrl =
  "https://www.youtube.com/watch?t=145&v=i5To6IgQLKc&feature=youtu.be";

function App() {
  const canvasRef = useRef(null);

  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network
    // e.g. const net = await cocossd.load();
    const net = await cocossd.load();
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    return;

    // Get Video Properties
    // const videoWidth = reactplayerRef.current.props.width;
    // const videoHeight = reactplayerRef.current.props.height;

    // Set canvas height and width
    // canvasRef.current.width = videoWidth;
    // canvasRef.current.height = videoHeight;

    // 4. TODO - Make Detections
    // e.g. const obj = await net.detect(video);
    const obj = await net.detect();

    // Draw mesh
    const ctx = canvasRef.current.getContext("2d");

    // 5. TODO - Update drawing utility
    // drawSomething(obj, ctx)
  };

  useEffect(() => {
    runCoco();
  }, []);

  return (
    <div className="App">
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
        }}
      />
    </div>
  );
}

export default App;
