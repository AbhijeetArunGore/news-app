import React from 'react';
import { Link } from 'react-router-dom';

const NewsList = ({ newsList }) => {
  return (
    <div className="news-container">
      <h1>🗞️FAST-FEED
      </h1>
      {newsList.map((news) => (
        <div key={news.id} className="news-card">
          <img src={news.imgSrc} alt={news.title} />
          <h2>{news.title}</h2>
          <p>{news.description.substring(0, 100)}...</p>
          <Link to={`/news/${news.id}`}>Read More</Link>
        </div>
      ))}

      {/* Link to Add News Page */}
      <Link to="/add-news">
        <button>Add News</button>
      </Link>
    </div>
  );
};

export default NewsList;
