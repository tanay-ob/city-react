import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CityCard from "./CityCard";

function App() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8001/cities?sortBy=name").then((res) => {
      setCities(res.data);
    });
  }, []);

  return (
    <div class="container mx-auto p-6">
      <h1 class="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Explore Indian Cities
      </h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <!-- City Card 1: Mumbai --> */}
        {cities.map((city) => (
          <CityCard city={city} />
        ))}
      </div>
    </div>
  );
}

export default App;
