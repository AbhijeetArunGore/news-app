import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsList from './NewsList';
import AddNews from './addnews';
import DetailedNews from './DetailedNews';

function App() {
  const [newsList, setNewsList] = useState([
    {
      id: 1,
      title: "PM MODI TALKS ON 'SWACHA BHARAT ABHIYAM IN MAN KI BAAT'",
      description: "In his latest edition of Man Ki Baat, Prime Minister Modi discussed the importance of cleanliness and hygiene as part of the Swacha Bharat Abhiyan initiative. He highlighted how the campaign has transformed the landscape of sanitation across the country. With a focus on rural areas, the Prime Minister emphasized the need for community participation in maintaining cleanliness. The efforts of local volunteers and organizations were commended for their unwavering commitment to creating a cleaner environment. He urged citizens to continue their efforts in promoting sanitation awareness and encouraged them to take ownership of their surroundings. The initiative has not only improved public health but also fostered a sense of pride among citizens. With ongoing projects aimed at furthering this cause, Modi reiterated that cleanliness is essential for a prosperous nation, stating that it reflects the values of society. He concluded by calling for collective efforts to ensure a sustainable and clean future for all.",
      imgSrc: "https://th.bing.com/th/id/OIP.LCrcIk00y4uqa5yTb8yXPQHaE8?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 2,
      title: "BITCOIN JUST CROSSED $65000 SEE THE LATEST UPDATES...",
      description: "Bitcoin has once again captured the attention of investors as its value recently crossed the $65,000 mark. This milestone has been driven by various factors, including increased institutional adoption, favorable regulatory news, and growing acceptance as a payment method. Analysts believe that Bitcoin's current rally is fueled by optimism surrounding upcoming technological upgrades and enhanced infrastructure that may attract more retail investors. Additionally, major financial institutions are beginning to offer Bitcoin-related services, further legitimizing the cryptocurrency. As the market continues to evolve, many enthusiasts are keen to see how this momentum will influence Bitcoin's price in the coming weeks. Experts recommend keeping an eye on market trends and developments that could affect cryptocurrency valuations. With Bitcoin becoming a hot topic in financial news, the push for mainstream acceptance is stronger than ever, promising an exciting future for digital currencies.",
      imgSrc: "https://th.bing.com/th/id/OIP.W0fCOF1D9uPYumG_itbAtgHaEE?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ]);

  const addNews = (news) => {
    setNewsList([...newsList, { ...news, id: newsList.length + 1 }]);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<NewsList newsList={newsList} />} />
          <Route path="/add-news" element={<AddNews addNews={addNews} />} />
          <Route path="/news/:id" element={<DetailedNews newsList={newsList} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
