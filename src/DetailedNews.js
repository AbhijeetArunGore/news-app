import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css'; // Ensure your CSS file is imported for styles

const DetailedNews = ({ newsList }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const news = newsList.find((newsItem) => newsItem.id === parseInt(id));

  if (!news) return <p>News not found</p>;

  return (
    <div className="detailed-news">
      <h1>{news.title}</h1>
      <img
        src={news.imgSrc}
        alt={news.title}
        style={{ display: 'block', margin: '0 auto', width: '50%', height: 'auto' }}
      />
      <p>{news.description}</p>

      {/* Centered Back Button */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  );
};

export default DetailedNews;
