import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNews = ({ addNews }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use default values if no input is provided
    const newNews = {
      title: title || 'Default Title',
      description: description || 'This is the default description of the news article.',
      imgSrc: imgSrc || 'https://via.placeholder.com/300x200',
    };

    addNews(newNews);
    navigate('/');
  };

  return (
    <div className="add-news-form">
      <h1>Add News</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Image URL</label>
          <input type="text" value={imgSrc} onChange={(e) => setImgSrc(e.target.value)} />
        </div>
        <button type="submit">Submit News</button>
      </form>
    </div>
  );
};

export default AddNews;
