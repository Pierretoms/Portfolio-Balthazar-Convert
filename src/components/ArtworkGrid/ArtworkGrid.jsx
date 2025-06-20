import React from 'react'
import './ArtworkGrid.scss'

const ArtworkGrid = ({ artworks }) => {
  return (
    <div className="artworks">
      {artworks.map((art, index) => (
        <div 
          key={art.id} 
          className="artwork-card"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <a href={art.imageUrl} target="_blank" rel="noopener noreferrer">
            <img src={art.imageUrl} alt={art.title} />
          </a>
          <h3>{art.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ArtworkGrid