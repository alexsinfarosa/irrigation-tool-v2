import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import format from "date-fns/format";
import subYears from "date-fns/sub_years";
import * as d3 from "d3";

@inject("store")
@observer
export default class Widget extends Component {
  render() {
    const {
      observedDataToGraph,
      projectedData2040ToGraph,
      projectedData2070ToGraph,
      days,
      isProjection1,
      isProjection2,
      observedDataMax,
      projectedData2040Max,
      projectedData2070Max,
      isProjectionDataLoaded,
      temperature
    } = this.props.store.app;
    console.log(`%cobservedDataToGraph: ${observedDataToGraph}`, `color: red`);
    console.log(
      `%cprojectedData2040ToGraph: ${projectedData2040ToGraph}`,
      `color: blue`
    );
    console.log(
      `%cprojectedData2070ToGraph: ${projectedData2070ToGraph}`,
      `color: green`
    );

    const margin = {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    };

    const width = 600 - margin.left - margin.right;
    const height = 460;
    const radius = Math.min(width, height) / 1.6;
    const colors = [
      "#9E9E9E",
      "#108EE9",
      "#00A854",
      "#FFBF00",
      "#F04134",
      "#9E9E9E"
    ];

    // Creating pie chart and path
    const pie = d3
      .pie()
      .sort(null)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    const pathCY = d3
      .arc()
      .outerRadius(radius - 80)
      .innerRadius(radius - 51)
      .padAngle(0.000);
    const pathPs = d3
      .arc()
      .outerRadius(radius - 49)
      .innerRadius(radius - 20)
      .padAngle(0.000);

    // Observed Data
    const currentYear = pie([1, 1, 1, 1, 1, 1]).map((e, i) => {
      return (
        <g key={i}>
          <path d={pathCY(e)} fill={colors[i]} />
        </g>
      );
    });

    // Projection 2040-2069
    const projection1 = pie([1, 1, 1, 1, 1, 1]).map((e, i) => {
      return (
        <g key={i}>
          <path d={pathPs(e)} fill={colors[i]} />
        </g>
      );
    });

    // Projection 2070-2099
    const projection2 = pie([1, 1, 1, 1, 1, 1]).map((e, i) => {
      return (
        <g key={i}>
          <path d={pathPs(e)} fill={colors[i]} />
        </g>
      );
    });

    // max sets the scale of the graph
    let max;
    if (isProjection1) {
      max = projectedData2040Max;
    } else if (isProjection2) {
      max = projectedData2070Max;
    } else {
      max = observedDataMax;
    }

    // The block below creates the first circle with numbers
    const percentToDeg = percent => -90 + percent * 180 / max;
    const scale = d3.scaleLinear().domain([0, max]).range([0, 1]);

    const innerTicks = scale
      .ticks(15)
      .map(tick => ({ value: tick, label: tick }));

    const rotate = d => {
      const ratio = scale(d.value);
      const newAngle = -90 + ratio * 180;
      return `rotate(${newAngle}) translate(0, ${-(radius - 100)})`;
    };

    return (
      <svg width={width} height={height}>
        <g transform={`translate(${width / 2}, ${height / 1.5})`}>
          {currentYear}
          {isProjection1 && isProjectionDataLoaded ? projection1 : null}
          {isProjection2 && isProjectionDataLoaded ? projection2 : null}

          <circle cx={0} cy={0} r={9} />
          <line
            stroke="black"
            strokeWidth={1}
            x1={0}
            y1={0}
            x2={0}
            y2={-radius + 103}
            transform={`rotate(${percentToDeg(days)})`}
          />
          <circle cx={0} cy={0} r={3} fill="#aaa" />

          <text
            textAnchor="middle"
            x={0}
            y={-60}
            style={{
              fontSize: "1.4em",
              fill: "#00D1B2",
              fontWeight: "bold"
            }}
          >
            {days}

          </text>

          <g>
            {innerTicks.map((e, i) => {
              if (e.value % 1 === 0) {
                return (
                  <text
                    style={{ fill: "#333", fontSize: "11px" }}
                    textAnchor="middle"
                    key={i}
                    transform={rotate(e)}
                  >
                    {e.label}
                  </text>
                );
              }
              return null;
            })}
          </g>

          {(isProjection1 || isProjection2) && isProjectionDataLoaded
            ? <g>
                <path
                  d=" M -223 5
            L -223 70
            L -180 70"
                  stroke="#7F7F7F"
                  strokeWidth="1"
                  fill="none"
                />
                <text
                  textAnchor="middle"
                  x={-145}
                  y={73}
                  style={{ fontSize: ".8rem" }}
                >
                  Observed
                </text>

                <path
                  d=" M -253 5
            L -253 100
            L -180 100"
                  stroke="#7F7F7F"
                  strokeWidth="1"
                  fill="none"
                />
                <text
                  textAnchor="middle"
                  x={-144}
                  y={103}
                  style={{ fontSize: ".8rem" }}
                >
                  Projection
                </text>
              </g>
            : <text
                textAnchor="middle"
                x={0}
                y={-260}
                style={{ fontSize: "1rem" }}
              >
                From
                {" "}
                {format(subYears(new Date(), 1), "YYYY-MM-DD")}
                {" "}
                to
                {" "}
                {format(new Date(), "YYYY-MM-DD")}
                {" "}
                {days > 1
                  ? `there have been ${days} days above ${temperature}`
                  : `there has been ${days} day above ${temperature}`}
              </text>}
        </g>
      </svg>
    );
  }
}