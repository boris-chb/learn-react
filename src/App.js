import React, { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./components/Colors/ColorList";

function App() {
  const [colors, setColors] = useState(colorData);

  const onRemoveColorHandler = (id) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };

  const onRateColorHandler = (id, rating) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newColors);
  };
  return (
    <>
      <ColorList
        colors={colors}
        onRemoveColor={onRemoveColorHandler}
        onRateColor={onRateColorHandler}
      />
    </>
  );
}

export default App;
