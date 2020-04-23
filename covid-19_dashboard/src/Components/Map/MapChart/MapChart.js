import React, {Component } from "react";
import {connect} from 'react-redux';
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  ZoomableGroup
} from "react-simple-maps";
import * as actions from '../../../store/action/index';

class MapChart extends Component{
  
  rounded = num => {
    if (num > 1000000000) {
      return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
      return Math.round(num / 100000) / 10 + "M";
    } else {
      return Math.round(num / 100) / 10 + "K";
    }
  };

  render(){
    const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  

const colorScale = scaleLinear()
  .domain([2000, 80000])
  .range(["#ffc4c6", "#ff0019"]);
  return (
    <ComposableMap
    style={{background:'#fbf6f6', borderRadius:'7px'}}
      data-tip=""
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 167
      }}
    >
      <ZoomableGroup >
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
        
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const d = this.props.countryData.find(s => s.code === geo.properties.ISO_A2);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={d ? colorScale(d["totalCases"]) : "#FFF"}
                    onMouseEnter={() => {
                      this.props.setTooltipContent(`${d.name} — ${d.totalCases > 999 ?this.rounded(d.totalCases): d.totalCases}`);
                    }}
                    onMouseLeave={() => {
                      this.props.setTooltipContent("");
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
        
    </ZoomableGroup>
    </ComposableMap>
  );
}
}

const mapStateToProps = state=> {
  return{
      countryData: state.countryData
  }
};

const mapDispatchToProps = dispatch=> {
  return{
      fetchCountryData: ()=> dispatch(actions.fetchCountryData())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MapChart);