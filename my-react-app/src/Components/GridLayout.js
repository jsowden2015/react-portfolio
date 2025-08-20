import React from 'react';

const GridItem = ({ date, title, color, imageDescription, description }) => (
  <div className="grid-item">
    <div className="post-date">{date}</div>
    <h3 className="post-title" style={{ color }}>
      {title}
    </h3>
    <div className="post-image">
      <div className="image-placeholder">
        <span>{imageDescription}</span>
      </div>
    </div>
    <p className="post-description">
      {description}
    </p>
    <button className="full-story-btn">FULL STORY</button>
  </div>
);

const GridLayout = () => {
  const posts = [
    {
      date: 'April 24, 2017',
      title: 'SED MAGNA IPSUM FAUCIBUS',
      color: 'white',
      imageDescription: 'Vintage Volkswagen Beetle',
      description: 'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.'
    },
    {
      date: 'April 22, 2017',
      title: 'PRIMIS EGET IMPERDIET LOREM',
      color: 'white',
      imageDescription: 'Person in suit',
      description: 'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.'
    },
    {
      date: 'April 18, 2017',
      title: 'ANTE MATTIS INTERDUM DOLOR',
      color: 'lightblue',
      imageDescription: 'Vintage camera',
      description: 'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.'
    },
    {
      date: 'April 14, 2017',
      title: 'TEMPUS SED NULLA IMPERDIET',
      color: 'white',
      imageDescription: 'Mountain formation',
      description: 'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.'
    }
  ];

  return (
    <div className="grid-layout">
      <div className="grid-container">
        {posts.map((post, index) => (
          <GridItem key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default GridLayout;
