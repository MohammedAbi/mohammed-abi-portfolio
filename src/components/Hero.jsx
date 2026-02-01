import HeroImage from "../assets/profile-pic-3.png";

function Hero() {
  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      element.focus({ preventScroll: true }); // For keyboard users
    }
  };

  return (
    <section
      id="hero"
      className="bg-gray-900 text-gray-100 py-32 md:py-40 flex flex-col items-center px-4"
      aria-label="Hero section introducing Mohammed Abdul Abi"
    >
      {/* Profile Image */}
      <img
        src={HeroImage}
        alt="Portrait of Mohammed Abdul Abi, Frontend Developer"
        className="mb-8 w-60 h-60 rounded-full object-cover shadow-xl transition-transform duration-300 hover:scale-105"
      />

      {/* Heading */}
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center max-w-3xl mx-auto"
        tabIndex={0} // Makes heading focusable for screen readers
      >
        Hi, I&apos;m Mohammed Abi – Frontend Developer | React & JavaScript
      </h1>

      {/* Short Description */}
      <p
        className="mt-6 max-w-lg mx-auto text-center text-gray-200 text-lg md:text-xl font-medium leading-relaxed"
        tabIndex={0}
      >
        I build responsive, accessible web applications using React and
        JavaScript. Passionate about creating user-friendly interfaces and
        contributing to collaborative teams.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => scrollToSection("projects")}
          className="bg-white text-gray-900 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
        >
          See My Projects
        </button>
        <a
          href="https://github.com/MohammedAbi"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          aria-label="Visit Mohammed Abi's GitHub profile"
        >
          GitHub
        </a>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}

export default Hero;
