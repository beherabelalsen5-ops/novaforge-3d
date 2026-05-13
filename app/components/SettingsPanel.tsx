"use client";

import { useState } from "react";
import { useModelStore } from "../lib/modelStore";

export default function SettingsPanel() {
  const { dimensions } = useModelStore();

  const [infill, setInfill] = useState(20);
  const [scale, setScale] = useState(100);
  const [supports, setSupports] = useState(true);

  const [material, setMaterial] = useState("PLA");
  const [layerHeight, setLayerHeight] = useState(0.2);
  const [nozzleSize, setNozzleSize] = useState(0.4);
  const [printSpeed, setPrintSpeed] = useState(60);

  const [infillPattern, setInfillPattern] =
    useState("Gyroid");

  const [adhesionType, setAdhesionType] =
    useState("Skirt");

  const [supportType, setSupportType] =
    useState("Tree");

  const materialDensity =
    material === "PLA"
      ? 1.24
      : material === "ABS"
      ? 1.04
      : material === "PETG"
      ? 1.27
      : material === "TPU"
      ? 1.21
      : 1.3;

  const scaledVolume =
    dimensions.volume * Math.pow(scale / 100, 3);

  const effectiveVolume =
    scaledVolume * (infill / 100);

  const estimatedWeight =
    (effectiveVolume * materialDensity * 0.001).toFixed(2);

  const estimatedTime =
    (
      effectiveVolume *
      (0.12 / layerHeight) *
      (80 / printSpeed)
    ).toFixed(0);

  const estimatedCost =
    (
      Number(estimatedWeight) * 6 +
      Number(estimatedTime) * 0.5 +
      (supports ? 80 : 0)
    ).toFixed(0);

  return (
    <section className="py-32 px-6 bg-black">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold">
            Advanced Slicer Settings
          </h2>

          <p className="text-gray-400 mt-6 text-xl">
            Configure professional 3D printing parameters.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT PANEL */}
          <div className="space-y-8 p-8 rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-md">

            {/* INFILL */}
            <div>

              <div className="flex justify-between mb-4">

                <h3 className="text-xl font-semibold">
                  Infill Density
                </h3>

                <span className="text-cyan-400">
                  {infill}%
                </span>

              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={infill}
                onChange={(e) =>
                  setInfill(Number(e.target.value))
                }
                className="w-full"
              />

            </div>

            {/* SCALE */}
            <div>

              <div className="flex justify-between mb-4">

                <h3 className="text-xl font-semibold">
                  Model Scale
                </h3>

                <span className="text-cyan-400">
                  {scale}%
                </span>

              </div>

              <input
                type="range"
                min="50"
                max="200"
                value={scale}
                onChange={(e) =>
                  setScale(Number(e.target.value))
                }
                className="w-full"
              />

            </div>

            {/* LAYER HEIGHT */}
            <div>

              <h3 className="text-xl font-semibold mb-4">
                Layer Height
              </h3>

              <select
                value={layerHeight}
                onChange={(e) =>
                  setLayerHeight(Number(e.target.value))
                }
                className="w-full bg-black border border-gray-700 rounded-xl p-4"
              >
                <option value={0.12}>0.12 mm</option>
                <option value={0.2}>0.20 mm</option>
                <option value={0.28}>0.28 mm</option>
              </select>

            </div>

            {/* NOZZLE */}
            <div>

              <h3 className="text-xl font-semibold mb-4">
                Nozzle Size
              </h3>

              <select
                value={nozzleSize}
                onChange={(e) =>
                  setNozzleSize(Number(e.target.value))
                }
                className="w-full bg-black border border-gray-700 rounded-xl p-4"
              >
                <option value={0.2}>0.2 mm</option>
                <option value={0.4}>0.4 mm</option>
                <option value={0.6}>0.6 mm</option>
                <option value={0.8}>0.8 mm</option>
              </select>

            </div>

            {/* PRINT SPEED */}
            <div>

              <div className="flex justify-between mb-4">

                <h3 className="text-xl font-semibold">
                  Print Speed
                </h3>

                <span className="text-cyan-400">
                  {printSpeed} mm/s
                </span>

              </div>

              <input
                type="range"
                min="20"
                max="200"
                value={printSpeed}
                onChange={(e) =>
                  setPrintSpeed(Number(e.target.value))
                }
                className="w-full"
              />

            </div>

            {/* INFILL PATTERN */}
            <div>

              <h3 className="text-xl font-semibold mb-4">
                Infill Pattern
              </h3>

              <select
                value={infillPattern}
                onChange={(e) =>
                  setInfillPattern(e.target.value)
                }
                className="w-full bg-black border border-gray-700 rounded-xl p-4"
              >
                <option>Gyroid</option>
                <option>Grid</option>
                <option>Cubic</option>
                <option>Triangles</option>
                <option>Honeycomb</option>
              </select>

            </div>

            {/* ADHESION */}
            <div>

              <h3 className="text-xl font-semibold mb-4">
                Build Plate Adhesion
              </h3>

              <select
                value={adhesionType}
                onChange={(e) =>
                  setAdhesionType(e.target.value)
                }
                className="w-full bg-black border border-gray-700 rounded-xl p-4"
              >
                <option>Skirt</option>
                <option>Brim</option>
                <option>Raft</option>
              </select>

            </div>

            {/* SUPPORT TYPE */}
            <div>

              <h3 className="text-xl font-semibold mb-4">
                Support Type
              </h3>

              <select
                value={supportType}
                onChange={(e) =>
                  setSupportType(e.target.value)
                }
                className="w-full bg-black border border-gray-700 rounded-xl p-4"
              >
                <option>Tree</option>
                <option>Normal</option>
              </select>

            </div>

            {/* SUPPORTS TOGGLE */}
            <div className="flex items-center justify-between">

              <h3 className="text-xl font-semibold">
                Generate Supports
              </h3>

              <button
                onClick={() => setSupports(!supports)}
                className={`px-6 py-3 rounded-xl font-semibold transition
                ${
                  supports
                    ? "bg-cyan-400 text-black"
                    : "bg-gray-700 text-white"
                }`}
              >
                {supports ? "Enabled" : "Disabled"}
              </button>

            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="p-8 rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-md">

            <h3 className="text-3xl font-bold mb-10">
              Manufacturing Estimation
            </h3>

            <div className="space-y-8">

              <InfoRow
                label="Material"
                value={material}
              />

              <InfoRow
                label="Infill Pattern"
                value={infillPattern}
              />

              <InfoRow
                label="Adhesion"
                value={adhesionType}
              />

              <InfoRow
                label="Support Type"
                value={supportType}
              />

              <InfoRow
                label="Estimated Weight"
                value={`${estimatedWeight} g`}
              />

              <InfoRow
                label="Print Time"
                value={`${estimatedTime} mins`}
              />

              <InfoRow
                label="Supports"
                value={supports ? "ON" : "OFF"}
              />

              <div className="flex justify-between items-center pt-6">

                <span className="text-2xl font-semibold">
                  Estimated Cost
                </span>

                <span className="text-5xl font-black text-cyan-400">
                  ₹{estimatedCost}
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between items-center border-b border-gray-800 pb-4">

      <span className="text-gray-400 text-xl">
        {label}
      </span>

      <span className="text-cyan-400 text-2xl font-bold">
        {value}
      </span>

    </div>
  );
}