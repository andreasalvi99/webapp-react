export default function Rating({ vote, maxVote }) {
  const stars = [];

  function createStars() {
    for (let i = 1; i <= maxVote; i++) {
      const starClass = i <= vote ? "bi-star-fill" : "bi-star";
      stars.push(<i key={i} className={`text-warning bi ${starClass}`}></i>);
    }
    return stars;
  }

  return createStars();
}
