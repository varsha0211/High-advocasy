const Rating = ({ rating }) => {
  return (
    <div className="text-yellow-500" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
      <span className="text-gray-700">{"★".repeat(5 - rating)}</span>
    </div>
  );
};

export default Rating;
