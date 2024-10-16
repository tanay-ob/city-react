function CityCard({ city }) {
  return (
    <div class="card bg-white shadow-lg rounded-lg overflow-hidden">
      <div
        class="city-image"
        style={{
          backgroundImage: `linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.7)
        ),
        url(${city.image})`,
        }}
      ></div>
      <div class="p-4">
        <h2 class="text-3xl font-semibold text-gray-800">{city.name}</h2>
        <p class="text-gray-600 mt-2">State: {city.state}</p>
        <p class="text-gray-600">Population: {city.population}</p>
        <p class="text-gray-600">
          Summer: {city.summerTemp} | Winter: {city.winterTemp}
        </p>
        <a
          href="https://example.com/mumbai"
          class="inline-block mt-4 bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Like &amp; Explore
        </a>
      </div>
    </div>
  );
}

export default CityCard;
