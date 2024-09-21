"use client";
import jsVectorMap from "jsvectormap";
import React, { useEffect } from "react";
import "../../js/us-aea-en";
import "jsvectormap/dist/maps/world.js";

const MapOne: React.FC = () => {
  useEffect(() => {
    const mapElement = document.getElementById("mapOne");

    if (!mapElement) {
      console.error("Map element not found");
      return;
    }

    const vectorMapOne = new jsVectorMap({
      selector: "#mapOne",
      map: "world",
      zoomButtons: false,

      regionStyle: {
        initial: {
          fill: "#C8D0D8",
        },
        hover: {
          fillOpacity: 1,
          fill: "#3056D3",
        },
      },
      regionLabelStyle: {
        initial: {
          fontFamily: "Satoshi",
          fontWeight: "semibold",
          fill: "#fff",
        },
        hover: {
          cursor: "pointer",
        },
      },

      labels: {
        regions: {
          render(code: string) {
            return code.split("-")[1];
          },
        },
      },

      onRegionTooltipShow({ event, tooltip, code }: any) {
        tooltip.text(
          `<h5>${tooltip.text()}</h5>` +
            `<p class="text-xs">Downloads: ${code}</p>`,
          true
        );
      },

      series: {
        regions: [
          {
            attribute: "fill",
            legend: {
              title: "Downloads",
            },
            scale: {
              "1-100": "#93c5fd",
              "100-1K": "#60a5fa",
              "1K-10K": "#3b82f6",
              "10K-100K": "#2563eb",
              "100K-1M": "#1d4ed8",
              "1M-50M": "#1e40af",
            },
            values: {
              CN: "1-100",
              MX: "100-1K",
              IN: "1M-50M",
              RU: "10K-100K",
              IR: "1K-10K",
            },
          },
        ],
      },
    });

    return () => {
      if (vectorMapOne) {
        vectorMapOne.destroy();
      } else {
        console.error("Vector map instance not found during cleanup");
      }
    };
  }, []);

  return (
    <div className="col-span-12 rounded-[10px] bg-white p-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
      <div className="flex gap-4 mb-7 text-xs font-medium text-dark dark:text-white"></div>
      <div className="h-[422px]">
        <div id="mapOne" className="mapOne map-btn"></div>
      </div>
    </div>
  );
};

export default MapOne;
