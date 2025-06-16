import React, { useState, useEffect } from 'react';
import "./Gallery.scss"
import ArtworkGrid from '../../components/ArtworkGrid/ArtworkGrid'
import Category from '../../components/Category/Category'
import data from '../../back-end.json'

const Gallery = () => {

    const [filteredData, setFilteredData] = useState([]);
    const [selectedYear, setSelectedYear] = useState("Tous");
    const [years, setYears] = useState([]);

    useEffect(() => {
        const allYears = [...new Set(data.map(item => item.date))].sort((a, b) => b - a);
        setYears(allYears);
        setFilteredData(data);
    }, []);

    const handleFilter = (year) => {
        setSelectedYear(year);
        if (year === "Tous") {
        setFilteredData(data);
        } else {
        setFilteredData(data.filter(item => item.date === year));
        }
    };

  return (
    <section className='gallery' id='gallery'>
        <h2>Galerie</h2>
        <Category 
           years={years}
           selectedYear={selectedYear}
           onFilter={handleFilter} 
        />
        <ArtworkGrid artworks={filteredData} />
    </section>
  )
}

export default Gallery