import React, { useState } from "react";
import ReactToolTip from "react-tooltip";

import styles from './Map.module.css';

import MapChart from './MapChart/MapChart';

function Map(){
  const [content, setContent] = useState("");
  return (
    <div className={styles.Map}>
      <div>
        <h4>COVID-19 Affected Areas</h4>
          <div>
          <p><span style={{background:'#ff0019'}}></span>Most affected</p>
          <p><span style={{background:'#ffc4c6'}}></span>Less affected</p>
          </div>
      </div>
        <MapChart setTooltipContent={setContent} />
        <ReactToolTip>{content}</ReactToolTip>
        <p>*Scroll over the map to zoom-in or zoom-out</p>
    </div>
  );
}

export default Map;