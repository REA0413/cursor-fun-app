"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";


export default function Home() {
  const [interiorImage, setInteriorImage] = useState("");
  const [exteriorImage, setExteriorImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [interiorImage, exteriorImage];

  useEffect(() => {
    const fetchImages = async () => {
      const interiorResponse = await axios.get(
        `https://api.unsplash.com/photos/random?query=restaurant,interior&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&w=700&h=500`
      );
      const exteriorResponse = await axios.get(
        `https://api.unsplash.com/photos/random?query=restaurant,exterior&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&w=700&h=500`
      );

      setInteriorImage(interiorResponse.data.urls.small);
      setExteriorImage(exteriorResponse.data.urls.small);
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center mb-4 text-amber-600">
          Welcome to Eleven Cafe Labuan Bajo
        </h1>
        <h2 className="text-xl font-semibold text-center mb-3 text-amber-600">
          Experience Culinary Delight
        </h2>
        <p className="text-center mb-6 text-gray-800 text-sm">
          Indulge in a unique dining experience with our exquisite menu and warm
          hospitality.<br/>Whether you&#39;re up to a local delicacy or longing for you home country comfort food, we&#39;ve got you covered!
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-center p-4 text-amber-600">
          Enjoy Our Peaceful Atmosphere
        </h2>
      </div>
      <div className="bg-gray-100 rounded shadow-md object-contain overflow-visible flex items-center justify-center pb-8">
        <div className="relative flex-grow-0 items-center justify-center">
          {images[currentIndex] ? (
            <Image
              src={images[currentIndex]}
              alt="building-atmosphere"
              width={700}
              height={500}
              layout="fixed"
              className="transition-opacity duration-1000"
              style={{ opacity: 1 }}
              onLoad={() => {
                console.log("Image loaded");
              }}
              onError={() => {
                console.error("Image failed to load");
              }}
            />
          ) : (
            <p>Loading image...</p> // Fallback message while loading
          )}
        </div>
      </div>
    </>
  );
}
