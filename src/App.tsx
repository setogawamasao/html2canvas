import React, { useState } from "react";
import html2camvas from "html2canvas";

const App = () => {
  const [imageData, setImageData] = useState<string>();

  const capture = () => {
    const target = document.getElementById("target");

    if (!target) {
      return;
    }

    html2camvas(target).then((canvas) => {
      const imgData = canvas.toDataURL();
      setImageData(imgData);
    });
  };
  return (
    <>
      <div id="target">
        <h1>HELLO REACT + TYPESCRIPT WORLD</h1>
      </div>
      <div>
        <input type="button" onClick={capture} value="capture" />
      </div>
      <div>
        <a href={imageData} id="ss" download="ss.png">
          download
        </a>
      </div>
    </>
  );
};

export default App;
