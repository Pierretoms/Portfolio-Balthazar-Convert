import React, { useState } from 'react';
import './ArtworkGrid.scss';

const ArtworkGrid = ({ artworks }) => {
  const STEP = 12;
  const [visibleCount, setVisibleCount] = useState(STEP);

  const handleSeeMore = () => {
    setVisibleCount(prev => Math.min(prev + STEP, artworks.length));
  };

  const handleSeeLess = () => {
    setVisibleCount(STEP);
  };

  const visibleArtworks = artworks.slice(0, visibleCount);

  return (
    <>
      <div className="artworks">
        {visibleArtworks.map((art, index) => (
          <div 
            key={art.id}
            className="artwork-card animated"
            style={{ animationDelay: `${(index % STEP) * 0.05}s` }}
          >
            <a href={art.imageUrl} target="_blank" rel="noopener noreferrer">
              <img src={art.imageUrl} alt={art.title} />
            </a>
            <h3>{art.title}</h3>
          </div>
        ))}
      </div>

      <div className="see-more-wrapper">
        {visibleCount < artworks.length && (
          <button onClick={handleSeeMore} className="see-more-button">
            Voir plus
          </button>
        )}
        {visibleCount > STEP && (
          <button onClick={handleSeeLess} className="see-more-button">
            Voir moins
          </button>
        )}
      </div>
    </>
  );
};

export default ArtworkGrid;
