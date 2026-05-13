"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { STLLoader } from "three-stdlib";
import { useRef, useEffect } from "react";
import { useModelStore } from "../lib/modelStore";

type STLModelProps = {
  url: string;
  onDimensionsCalculated: (dims: {
    width: number;
    height: number;
    depth: number;
    volume: number;
  }) => void;
};

function STLModel({
  url,
  onDimensionsCalculated,
}: STLModelProps) {
  const geometry = useLoader(STLLoader, url);

  useEffect(() => {
    geometry.computeBoundingBox();

    if (geometry.boundingBox) {
      const box = geometry.boundingBox;

      const width = box.max.x - box.min.x;
      const height = box.max.y - box.min.y;
      const depth = box.max.z - box.min.z;

      const volume = width * height * depth;

      onDimensionsCalculated({
        width,
        height,
        depth,
        volume,
      });
    }
  }, [geometry, onDimensionsCalculated]);

  return (
    <Center>
      <mesh geometry={geometry} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#22d3ee"
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
    </Center>
  );
}

type STLViewerProps = {
  fileUrl: string;
};

export default function STLViewer({
  fileUrl,
}: STLViewerProps) {
  const controlsRef = useRef<any>(null);

  const { dimensions, setDimensions } = useModelStore();

  const resetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div className="relative">

      {/* Reset Button */}
      <button
        onClick={resetView}
        className="absolute top-4 right-4 z-20 px-4 py-2 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
      >
        Reset View
      </button>

      {/* Dimensions Panel */}
      <div className="absolute bottom-4 left-4 z-20 p-4 rounded-2xl bg-black/70 border border-cyan-500/20 backdrop-blur-md">

        <h3 className="text-cyan-400 font-bold mb-3">
          Model Dimensions
        </h3>

        <div className="space-y-2 text-sm">

          <p>
            Width: {dimensions.width.toFixed(2)} mm
          </p>

          <p>
            Height: {dimensions.height.toFixed(2)} mm
          </p>

          <p>
            Depth: {dimensions.depth.toFixed(2)} mm
          </p>

          <p className="text-cyan-400">
            Volume: {dimensions.volume.toFixed(2)}
          </p>

        </div>

      </div>

      {/* Viewer */}
      <div className="h-[650px] w-full rounded-3xl overflow-hidden border border-cyan-500/20 bg-black">

        <Canvas camera={{ position: [0, 0, 120], fov: 45 }}>

          {/* Lights */}
          <ambientLight intensity={1.5} />

          <directionalLight
            position={[100, 100, 100]}
            intensity={2}
          />

          <directionalLight
            position={[-100, -100, -100]}
            intensity={1}
          />

          {/* Model */}
          <STLModel
            url={fileUrl}
            onDimensionsCalculated={setDimensions}
          />

          {/* Controls */}
          <OrbitControls
            ref={controlsRef}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={20}
            maxDistance={300}
          />

        </Canvas>

      </div>

    </div>
  );
}