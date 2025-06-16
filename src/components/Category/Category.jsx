import React from 'react'
import "./Category.scss"

const Category = ({ years, selectedYear, onFilter }) => {
    return (
      <div className="year-filters">
        <button
          className={selectedYear === "Tous" ? "active" : ""}
          onClick={() => onFilter("Tous")}
        >
          Tous
        </button>
        {years.map(year => (
          <button
            key={year}
            className={selectedYear === year ? "active" : ""}
            onClick={() => onFilter(year)}
          >
            {year}
          </button>
        ))}
      </div>
    );
  };

export default Category