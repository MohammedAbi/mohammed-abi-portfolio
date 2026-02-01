import CountUp from "react-countup";

function About() {
  const skills = [
    { label: "HTML & CSS", level: "w-11/12" },
    { label: "JavaScript", level: "w-11/12" },
    { label: "TypeScript", level: "w-10/12" },
    { label: "React JS", level: "w-10/12" },
    { label: "Node JS", level: "w-10/12" },
    { label: "Tailwind CSS", level: "w-9/12" },
    { label: "Git & GitHub", level: "w-9/12" },
    { label: "REST APIs", level: "w-9/12" },
  ];

  const stats = [
    { number: 3, label: "Years of Learning" },
    { number: 20, label: "Projects Completed" },
    { number: 10, label: "Team Experiences" },
  ];

  return (
    <section
      id="about"
      className="bg-gray-900 text-gray-100 py-20 scroll-mt-32"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">
          About Me
        </h2>

        <div className="max-w-3xl mx-auto space-y-8 text-gray-300">
          <p className="text-lg leading-relaxed">
            I enjoy creating clean, responsive websites using modern tools and
            frameworks. My training gave me a strong foundation in HTML, CSS,
            JavaScript, and React. I focus on building user-friendly, accessible
            web applications that provide seamless experiences.
          </p>
          <p className="text-lg leading-relaxed">
            I’m motivated by continuous learning and excited to contribute to
            collaborative teams that value creativity and growth.
          </p>
        </div>

        {/* Skills + Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Skills */}
          <div className="space-y-5">
            {skills.map(({ label, level }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="w-32 font-medium text-gray-300">{label}</span>
                <div className="flex-1 bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full transition-all duration-700 bg-gradient-to-r from-indigo-500 to-purple-500 ${level}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-col justify-center gap-6 text-center text-gray-300">
            {stats.map(({ number, label }) => (
              <div key={label} className="space-y-1">
                <h3 className="text-3xl md:text-4xl font-bold">
                  <CountUp end={number} duration={1.5} />+
                </h3>
                <p className="uppercase text-sm md:text-base tracking-wider">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
