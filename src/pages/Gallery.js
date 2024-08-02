// src/pages/Gallery.js
import React, { useState } from 'react';
import '../styles/Gallery.css'; // Assuming you will add CSS styles for the gallery

const photos = [
  { src: 'path/to/sports_day.jpg', alt: 'Students participating in various sports events.' },
  { src: 'path/to/science_exhibition.jpg', alt: 'Students presenting their science projects.' },
  { src: 'path/to/cultural_fest.jpg', alt: 'Students performing in the cultural fest.' },
  { src: 'path/to/classroom.jpg', alt: 'A glimpse of our interactive classrooms.' },
  { src: 'path/to/library.jpg', alt: 'Students reading and studying in the school library.' },
];

const videos = [
  { src: 'path/to/school_tour.mp4', title: 'Virtual tour of Springdale Public School.' },
  { src: 'path/to/annual_function.mp4', title: 'Highlights from the Annual Function 2023.' },
];

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredPhotos = photos.filter(photo => filter === 'all' || photo.alt.includes(filter));
  const filteredVideos = videos.filter(video => filter === 'all' || video.title.includes(filter));

  return (
    <div>
      <header>
        <h1>Gallery</h1>
      </header>

      <section>
        <h2>Filter Gallery</h2>
        <select onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="sports">Sports</option>
          <option value="science">Science</option>
          <option value="cultural">Cultural</option>
          <option value="classroom">Classroom</option>
          <option value="library">Library</option>
        </select>
      </section>

      <section>
        <h2>Photos</h2>
        <div className="gallery-grid">
          {filteredPhotos.map((photo, index) => (
            <div key={index} className="gallery-item">
              <img src={photo.src} alt={photo.alt} />
              <p>{photo.alt}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Videos</h2>
        <div className="gallery-grid">
          {filteredVideos.map((video, index) => (
            <div key={index} className="gallery-item">
              <video controls src={video.src}>
                Your browser does not support the video tag.
              </video>
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
