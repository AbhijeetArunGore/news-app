import React from 'react';

const NewsCard = ({ imgSrc, title, onMoreClick }) => {
  return (
    <div className="news-card">
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <button onClick={onMoreClick}>More</button>
    </div>
  );
};

export default NewsCard;
