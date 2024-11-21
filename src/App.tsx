import React from "react";
import ImageSlider from "./components/ImageSlider";
import "./App.css"; // Add your global styling for the app if needed

//@ts-ignore
import sound from "./mp3/Silent-Night.mp3";
const App = () => {
  return (
    <>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Questionary pt 2
      </h1>
      <div className="app-container" style={{ overflow: "hidden" }}>
        <div style={{ height: "calc(100vh - 300px)" }}>
          <ImageSlider />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <audio
          ref={(audio) => {
            if (audio) audio.currentTime = 8;
          }}
          controls
          autoPlay
          src={sound}
        />
      </div>
    </>
  );
};

export default App;
