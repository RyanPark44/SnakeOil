import React from "react";
import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});

export default function Gauge({ value }) {
  return (
    <div className="w-1/3 bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-xl font-bold text-gray-800">Snake Meter</h2>
      <GaugeComponent
        value={value}
        type="radial"
        label={{
          tickLabels: {
            type: "outer",
            ticks: [
              { value: "Snake Oil" },
              { value: "Useful" },
              { value: "Outstanding" },
            ],
          },
        }}
        arc={{
          colorArray: ["#393e41", "#5BE12C"],
          subArcs: [{ length: 0.25 }, {}, { length: 0.25 }],
          padding: 0.02,
          width: 0.3,
        }}
        pointer={{
          elastic: true,
          animationDelay: 0,
        }}
      />
    </div>
  );
}
