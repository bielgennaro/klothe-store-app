import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, Image } from "react-native";

export default function HomeScreen() {
  const [images, setImages] = useState([]);
  const [loadProduct, setLoadProduct] = useState(false);

  //TODO: Implementar API de
  useEffect(() => {
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
    <SafeAreaView>
      <Text>Home</Text>
      {loadProduct && (
        <View>
          {images.map((images, index) => (
            <Image key={index} src={images} alt={`Image ${index}`} />
          ))}
        </View>
      )}
    </SafeAreaView>
  );
}
