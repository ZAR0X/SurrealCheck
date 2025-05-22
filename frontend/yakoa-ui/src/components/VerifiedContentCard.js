import React from 'react';

const VerifiedContentCard = ({ data }) => {
  const story = data.story || {};

  return (
    <div className="verified-card">
      <h3>Originality Check Result</h3>
      <p><strong>Creator:</strong> {data.creator}</p>
      <p><strong>Original:</strong> {data.original ? 'Yes ✅' : 'No ❌'}</p>
      <p><strong>Confidence:</strong> {data.confidence}%</p>
      <p><strong>Source:</strong> <a href={data.source}>{data.source}</a></p>
      <p><strong>Verified by:</strong> {data.verified_by}</p>

      {story.license_link && (
        <div className="story-actions">
          <a href={story.license_link} target="_blank" rel="noopener noreferrer">
            <button>📜 License</button>
          </a>
          <a href={story.extend_link} target="_blank" rel="noopener noreferrer">
            <button>🔧 Extend</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default VerifiedContentCard;
