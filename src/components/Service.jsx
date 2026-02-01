const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Designing clean, accessible, and user-friendly websites.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Creating responsive, interactive, and dynamic user interfaces with modern web technologies.",
  },
  {
    id: 3,
    title: "JavaScript Development",
    description:
      "Building interactive web applications using JavaScript frameworks like React.",
  },
  {
    id: 4,
    title: "CSS & HTML",
    description:
      "Crafting well-structured, semantic, and visually appealing websites with HTML5 and CSS3.",
  },
  {
    id: 5,
    title: "Responsive Design",
    description:
      "Ensuring websites look great and function properly across devices, from desktops to mobile phones.",
  },
  {
    id: 6,
    title: "Website Maintenance",
    description:
      "Providing ongoing support and improvements for websites to keep them up to date.",
  },
];

const Service = () => {
  return (
    <section
      className="bg-gray-900 text-gray-100 py-20 scroll-mt-32"
      id="service"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2
          id="services-heading"
          className="text-4xl font-bold text-center mb-12 tracking-wide"
        >
          My Services
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16"
          role="list"
        >
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              role="listitem"
              tabIndex={0} 
              aria-labelledby={`service-title-${service.id}`}
            >
              {/* Number */}
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-right">
                {service.id}
              </div>

              {/* Title */}
              <h3
                id={`service-title-${service.id}`}
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500"
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-gray-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
