import StarRating from "../Ratings/StarRating";

const Color = (props) => {
  const { title, color, rating } = props;

  return (
    <section>
      <h1>{title}</h1>
      <div style={{ heigth: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} />
    </section>
  );
};

export default Color;
