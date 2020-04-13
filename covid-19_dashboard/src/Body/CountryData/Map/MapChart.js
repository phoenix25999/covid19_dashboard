import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
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
  .domain([0.29, 0.68])
  .range(["#ffedea", "#ff5233"]);

  const objToCsv = (data) => {
                
    const csvRows = [];
    const headers = Object.keys(data[0])
    csvRows.push(headers.join(','));

    // console.log(csvRows)

    for (const row of data) {
        const values = headers.map(header => {
        const escaped = ('' + row[header]).replace(/"/g, '\\"')
        return `"${escaped}"`
        })
        csvRows.push(values.join(','))
    }

    return csvRows.join('\n')
}

const MapChart = ({ setTooltipContent }, props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv('./vulnerability.csv').then(data => {
      setData(data);
    });
  }, []);
  //   fetch('https://corona-api.com/countries').then(response => response.json())
  //       .then(result=> {
  //           const updatedCountryData = [];
  //           for(let i in result.data){
  //               updatedCountryData.push({
  //                   code: result.data[i].code,
  //                   totalCases: result.data[i].latest_data.confirmed,
  //                   latitude: result.data[i].coordinates.latitude,
  //                   longitude: result.data[i].coordinates.longitude
  //               });
  //           }
  //       let csvData = objToCsv(updatedCountryData);
  //       console.log(csvData);
  //     setData(csvData);
  //   });
  // }, []);

  return (
    <ComposableMap
      data-tip=""
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147
      }}
    >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      {data.length > 0 && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const d = data.find(s => s.ISO3 === geo.properties.ISO_A3);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d["2017"]) : "#F5F4F6"}
                  onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    hover: {
                      fill: "#F53",
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
    </ComposableMap>
  );
};

export default MapChart;