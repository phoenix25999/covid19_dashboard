import React, { useState } from "react";
import ReactToolTip from "react-tooltip";


import MapChart from "./MapChart";

function Map(){
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactToolTip>{content}</ReactToolTip>
    </div>
  );
}

export default Map;