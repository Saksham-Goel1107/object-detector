import { useRef, useEffect, useCallback, useState } from 'react';
import * as cocossd from "@tensorflow-models/coco-ssd";
// Import the required backends
import '@tensorflow/tfjs-backend-webgl';  
import '@tensorflow/tfjs-backend-cpu';    
import Webcam from "react-webcam";
import "./App.css";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [modelLoading, setModelLoading] = useState(true);
  
  const drawRect = (detections, ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    ctx.font = "16px Arial";
    ctx.textBaseline = "top";

    detections.forEach(detection => {
      const [x, y, width, height] = detection.bbox;
      const text = `${detection.class} ${Math.round(detection.score * 100)}%`;
      
      const color = "green";
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.rect(x, y, width, height);
      ctx.stroke();
      
      ctx.fillStyle = color;
      const textWidth = ctx.measureText(text).width;
      ctx.fillRect(x, y, textWidth + 10, 24);
      
      ctx.fillStyle = "#FFFFFF";
      ctx.fillText(text, x + 5, y + 4);
    });
  };

  const detect = useCallback(async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      
      const obj = await net.detect(video);
      
      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx);
    }
  },[]);

  const runCoco = useCallback(async () => {
    setModelLoading(true);
    const net = await cocossd.load();
    console.log("COCO-SSD model loaded successfully!");
    setModelLoading(false);
    
    setInterval(() => {
      detect(net);
    }, 100); 
  }, [detect]);

  useEffect(() => {
    runCoco();
  }, [runCoco]);

  

  return (
    <div className="App">
      <header className="App-header">
        {modelLoading && (
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            color: "white",
            background: "rgba(0,0,0,0.5)",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center"
          }}>
            <h2>Loading Object Detection Model...</h2>
            <p>Please wait, this may take a moment.</p>
          </div>
        )}
        
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default App;
