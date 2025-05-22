import React, { useState } from 'react';
import axios from 'axios';
import VerifiedContentCard from './VerifiedContentCard';

const ContentVerifier = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [result, setResult] = useState(null);

  const handleVerify = async () => {
    try {
      const res = await axios.post('/api/verify/', { image_url: imageUrl });
      setResult(res.data);
    } catch (err) {
      alert("Error verifying content.");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Verify Content Originality</h2>
      <input
        type="text"
        placeholder="Paste image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button onClick={handleVerify}>Check</button>

      {result && <VerifiedContentCard data={result} />}
    </div>
  );
};

export default ContentVerifier;
