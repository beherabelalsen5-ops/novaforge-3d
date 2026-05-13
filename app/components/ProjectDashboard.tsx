"use client";

import { useModelStore } from "../lib/modelStore";

export default function ProjectDashboard() {
  const { projects } = useModelStore();

  return (
    <section className="py-32 px-6 bg-black">

      <div className="max-w-7xl mx-auto">

        <div className="mb-16">

          <h2 className="text-5xl font-bold">
            Saved Projects
          </h2>

          <p className="text-gray-400 mt-4 text-xl">
            Previously uploaded models and manufacturing jobs.
          </p>

        </div>

        {projects.length === 0 ? (

          <div className="p-10 rounded-3xl border border-gray-800 text-center text-gray-500">
            No projects uploaded yet.
          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project) => (

              <div
                key={project.id}
                className="p-6 rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-md hover:border-cyan-400 transition"
              >

                <div className="h-40 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 flex items-center justify-center mb-6">

                  <span className="text-6xl">
                    🛰️
                  </span>

                </div>

                <h3 className="text-2xl font-bold break-all">
                  {project.fileName}
                </h3>

                <p className="text-gray-400 mt-4">
                  Manufacturing project ready for slicing and quotation.
                </p>

                <button className="mt-6 px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition">
                  Open Project
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}