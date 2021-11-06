import StarRating from "../Ratings/StarRating";
import { FaTrash } from "react-icons/fa";

const Color = (props) => {
  const { id, title, color, rating, onRemove, onRate } = props;

  const onRateHandler = (rating) => {
    onRate(id, rating);
  };
  return (
    <section style={{ margin: 20 }}>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div
        style={{
          height: 50,
          width: "50%",
          margin: 10,
          marginLeft: 0,
          backgroundColor: color,
        }}
      />
      <StarRating selectedStars={rating} onRate={onRateHandler} />
    </section>
  );
};

export default Color;
