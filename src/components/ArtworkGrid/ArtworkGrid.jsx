import React from 'react'
import './ArtworkGrid.scss'

const ArtworkGrid = ({ artworks }) => {
  return (
    <div className="artworks">
      {artworks.map(art => (
        <div key={art.id} className="artwork-card">
          <img src={art.imageUrl} alt={art.title} />
          <h3>{art.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ArtworkGrid