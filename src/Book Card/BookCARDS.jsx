function Card({ title, author, image }) {
    return (
      <div style={styles.card}>
        <img src={image} alt={title} style={styles.image} />
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
    );
  }

  const styles = {
    card: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      margin: "16px",
      maxWidth: "300px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    image: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
      borderRadius: "8px",
    },
  };

export default Card;