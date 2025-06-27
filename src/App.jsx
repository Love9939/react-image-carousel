import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [showData, setShowData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const userData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    const json = await data.json();
    setShowData(json.slice(0, 10)); // Show only first 10 images
  };

  useEffect(() => {
    userData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === showData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? showData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center bg-black p-6">
      {showData.length > 0 && (
        <div className="relative">
          {/* Display Current Image */}
          <img
            src={`https://picsum.photos/id/${showData[currentIndex].id}/600/400`}
            alt={showData[currentIndex].title}
            className="w-[400px] h-[250px] rounded-lg"
          />
          
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex space-x-4 mt-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 cursor-pointer"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
