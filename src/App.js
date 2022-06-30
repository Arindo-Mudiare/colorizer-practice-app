import "./App.css";
import React, { useState } from "react";
import colorData from "./data/color-data.json";
import ColorList from "./components/ColorList";
import { v4 } from "uuid";
import AddColorForm2 from "./components/AddColorForm2";

function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <div className="App">
      <header className="App-header">
        <AddColorForm2
          onNewColor={(title, color) => {
            const newColors = [
              ...colors,
              {
                id: v4(),
                rating: 0,
                title,
                color,
              },
            ];
            setColors(newColors);
          }}
        />
        <ColorList
          colors={colors}
          onRateColor={(id, rating) => {
            const newColors = colors.map((color) =>
              color.id === id ? { ...color, rating } : color
            );
          }}
          onRemoveColor={(id) => {
            const newColors = colors.filter((color) => color.id !== id);
            setColors(newColors);
          }}
        />
        ;
      </header>
    </div>
  );
}

export default App;
