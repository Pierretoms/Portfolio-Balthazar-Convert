import React from 'react'
import './ArtworkGrid.scss'

const ArtworkGrid = ({ artworks }) => {
  return (
    <div className="artworks">
      {artworks.map(art => (
        <div key={art.id} className="artwork-card">
          <img src={art.imageUrl} alt={art.title} />
          <p>{art.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ArtworkGrid