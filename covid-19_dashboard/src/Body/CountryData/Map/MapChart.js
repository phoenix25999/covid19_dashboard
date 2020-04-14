import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  ZoomableGroup
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const rounded = num => {
    if (num > 1000000000) {
      return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
      return Math.round(num / 100000) / 10 + "M";
    } else {
      return Math.round(num / 100) / 10 + "K";
    }
  };

const colorScale = scaleLinear()
  .domain([2000, 80000])
  .range(["#FFC4C6", "#ff0019"]);

const MapChart = ({ setTooltipContent }, props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/country-data.csv`).then(data => {
      setData(data);
    });
  }, []);
  
  return (
    <ComposableMap
      data-tip=""
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 175
      }}
    >
      <ZoomableGroup >
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
        {data.length > 0 && (
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const d = data.find(s => s.ISO3 === geo.properties.ISO_A3);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={d ? colorScale(d["total"]) : "#FFF"}
                    onMouseEnter={() => {
                      setTooltipContent(`${d.Name} — ${d.total > 999 ?rounded(d.total): d.total}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      hover: {
                        fill: "#8b123b",
                        outline: "none"
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none"
                      }
                    }}
                  />
                );
              })
            }
          </Geographies>
        )}
    </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;