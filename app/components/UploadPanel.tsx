"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import STLViewer from "./STLViewer";
import { useModelStore } from "../lib/modelStore";

export default function UploadPanel() {
  const [fileName, setFileName] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const { addProject } = useModelStore();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (file) {
        setFileName(file.name);

        const url = URL.createObjectURL(file);

        setFileUrl(url);

        addProject({
          id: Date.now(),
          fileName: file.name,
          fileUrl: url,
        });
      }
    },
    [addProject]
  );

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
      accept: {
        "model/stl": [".stl"],
        "application/octet-stream": [".obj", ".3mf"],
      },
      onDrop,
    });

  return (
    <section className="py-32 px-6 bg-black">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Upload Your 3D Model
          </h2>

          <p className="text-gray-400 mt-6 text-xl">
            Upload STL, OBJ, or 3MF files for live analysis,
            slicing configuration, and manufacturing estimation.
          </p>

        </div>

        {/* DROPZONE */}
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-3xl p-20 text-center cursor-pointer transition duration-300
          ${
            isDragActive
              ? "border-cyan-400 bg-cyan-500/10"
              : "border-gray-700 hover:border-cyan-400"
          }`}
        >

          <input {...getInputProps()} />

          <div className="text-7xl mb-8">
            🚀
          </div>

          {isDragActive ? (
            <p className="text-2xl text-cyan-400">
              Drop your model here...
            </p>
          ) : (
            <div>

              <p className="text-2xl font-semibold">
                Drag & Drop Your STL File
              </p>

              <p className="text-gray-500 mt-4">
                Supports STL, OBJ, and 3MF
              </p>

            </div>
          )}

        </div>

        {/* FILE INFO */}
        {fileName && (
          <div className="mt-10 p-6 rounded-2xl border border-cyan-500/30 bg-cyan-500/5">

            <p className="text-lg">
              Uploaded File
            </p>

            <p className="text-cyan-400 text-2xl font-semibold mt-2 break-all">
              {fileName}
            </p>

          </div>
        )}

        {/* STL VIEWER */}
        {fileUrl && (
          <div className="mt-16">

            <STLViewer fileUrl={fileUrl} />

          </div>
        )}

      </div>

    </section>
  );
}