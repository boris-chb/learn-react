import Color from "./Color";

const ColorList = (props) => {
  const { colors } = props;

  if (!colors.length) return <div>No Colors.</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
};

export default ColorList;
