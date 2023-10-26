import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Colombo",
    },
    {
      id: 2,
      title: "Jaffna",
    },
    {
      id: 3,
      title: "Batticaloa",
    },
    {
      id: 4,
      title: "Anuradhapura",
    },
    {
      id: 5,
      title: "Matara",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-black text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
