export default function Products() {
  const products = [
    {
      title: "CubeSat Models",
      desc: "Highly detailed educational satellite models.",
    },
    {
      title: "Rocket Components",
      desc: "Custom aerospace-grade prototype parts.",
    },
    {
      title: "Engineering Prototypes",
      desc: "Rapid manufacturing for student and industry projects.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-black">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold">
            Featured Services
          </h2>

          <p className="text-gray-400 mt-6 text-xl">
            Advanced 3D printing solutions for aerospace and engineering.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {products.map((product, index) => (
            <div
              key={index}
              className="group border border-cyan-500/20 rounded-3xl p-8 bg-white/5 backdrop-blur-md hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
            >

              <div className="h-48 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 mb-8 flex items-center justify-center">

                <span className="text-5xl">
                  🚀
                </span>

              </div>

              <h3 className="text-2xl font-bold mb-4">
                {product.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {product.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}