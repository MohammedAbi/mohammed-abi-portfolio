import HeroImage from "../assets/profile-pic-3.png";

function Hero() {
  // Funksjon for smooth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="bg-gray-900 text-gray-100 py-32 md:py-40 flex flex-col items-center px-4"
    >
      {/* Profilbilde */}
      <img
        src={HeroImage}
        alt="Mohammed Abi"
        className="mb-8 w-60 h-60 rounded-full object-cover shadow-xl transition-transform duration-300 hover:scale-105"
      />

      {/* Overskrift */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center max-w-3xl mx-auto">
        Hi, I&apos;m Mohammed Abi – Frontend Developer | React & JavaScript
      </h1>

      {/* Kort beskrivelse */}
      <div className="mt-6 max-w-lg mx-auto">
        <p className="text-center text-gray-200 text-lg md:text-xl font-medium leading-relaxed">
          I build responsive, accessible web applications using React and
          JavaScript. Passionate about creating user-friendly interfaces and
          contributing to collaborative teams.
        </p>
      </div>

      {/* CTA-knapper */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => scrollToSection("projects")}
          className="bg-white text-gray-900 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 hover:-translate-y-1"
        >
          See My Projects
        </button>
        <a
          href="https://github.com/MohammedAbi"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 hover:-translate-y-1"
        >
          GitHub
        </a>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 hover:-translate-y-1"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}

export default Hero;
