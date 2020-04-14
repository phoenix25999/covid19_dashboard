import React, { useState } from "react";
import ReactToolTip from "react-tooltip";

import styles from './Map.module.css';

import MapChart from "./MapChart";

function Map(){
  const [content, setContent] = useState("");
  return (
    <div>
        <div className={styles.Map}>
            <h3>COVID-19 Affected Areas</h3>
            
                <p>Most Affected</p>
                <p>Less Affected</p>
        </div>
        <MapChart setTooltipContent={setContent} />
        <ReactToolTip>{content}</ReactToolTip>
    </div>
  );
}

export default Map;