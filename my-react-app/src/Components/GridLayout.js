import React from 'react';

const GridLayout = () => {
  const posts = [
    {
      date: 'April 24, 2017',
      title: 'SED MAGNA IPSUM FAUCIBUS',
      color: 'white'
    },
    {
      date: 'April 22, 2017',
      title: 'PRIMIS EGET IMPERDIET LOREM',
      color: 'white'
    },
    {
      date: 'April 18, 2017',
      title: 'ANTE MATTIS INTERDUM DOLOR',
      color: 'lightblue'
    },
    {
      date: 'April 14, 2017',
      title: 'TEMPUS SED NULLA IMPERDIET',
      color: 'white'
    }
  ];

  return (
    <div className="grid-layout">
      <div className="grid-container">
        {posts.map((post, index) => (
          <div key={index} className="grid-item">
            <div className="post-date">{post.date}</div>
            <h3 className="post-title" style={{ color: post.color }}>
              {post.title}
            </h3>
            <div className="post-image">
              <div className="image-placeholder">
                {index === 0 && <span>Vintage Volkswagen Beetle</span>}
                {index === 1 && <span>Person in suit</span>}
                {index === 2 && <span>Vintage camera</span>}
                {index === 3 && <span>Mountain formation</span>}
              </div>
            </div>
            <p className="post-description">
              Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.
            </p>
            <button className="full-story-btn">FULL STORY</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridLayout;
