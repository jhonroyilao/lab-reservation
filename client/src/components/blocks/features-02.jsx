const features = [
  {
    title: "Room Booking",
    description: "Easily reserve laboratory rooms for your classes and activities.",
    image: "/lab_pic.jpg"
  },
  {
    title: "Equipment Management",
    description: "Track and manage laboratory equipment efficiently.",
    image: "/equipment.jpg"
  },
  {
    title: "Real-time Availability",
    description: "Check room and equipment availability in real-time.",
    image: "/calendar.jpg"
  },
];

const Features02Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="w-full">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Streamline Your Lab Experience
        </h2>
        <div
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col text-start">
              <div className="mb-5 sm:mb-6 w-full aspect-[4/5] overflow-hidden rounded-xl">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-2xl font-semibold tracking-tight">
                {feature.title}
              </span>
              <p className="mt-2 max-w-[25ch] text-muted-foreground text-[17px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features02Page;
