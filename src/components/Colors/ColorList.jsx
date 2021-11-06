import Color from "./Color";

const ColorList = (props) => {
  const { colors, onRemoveColor, onRateColor } = props;

  if (!colors.length) return <div>No Colors.</div>;
  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
};

export default ColorList;
