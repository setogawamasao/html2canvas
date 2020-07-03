import React, { useState } from "react";
import html2camvas from "html2canvas";

const App = () => {
  const [text, setText] = useState<string>("Hello html2Canpas");
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
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          style={{ fontSize: "50px" }}
        />
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
