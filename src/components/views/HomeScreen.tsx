import React, { useState, useEffect } from "react";

export default function HomeScreen() {
  const [images, setImages] = useState([]);
  const [loadProduct, setLoadProduct] = useState(false);

  //TODO: Implementar API
  useEffect(() => {
    // Exemplo
    fetch("http://localhost:3000/api/images")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setLoadProduct(true);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {loadProduct && (
        <div>
          {images.map((images, index) => (
            <img key={index} src={images} alt={`Image ${index}`} />
          ))}
        </div>
      )}
    </div>
  );
}
