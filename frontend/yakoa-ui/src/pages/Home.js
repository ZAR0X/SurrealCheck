import React from 'react';
import ContentVerifier from '../components/ContentVerifier';

const Home = () => {
  return (
    <div className="container">
      <h1>✨ SurrealCheck</h1>
      <p>Verify content authenticity & push to Story — powered by Yakoa</p>
      <ContentVerifier />
    </div>
  );
};

export default Home;
