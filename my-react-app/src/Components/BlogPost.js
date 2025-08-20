import React from 'react';

const BlogPost = () => {
  return (
    <section className="post">
      <header className="major">
        <span className="date">About Me</span>
        <h1>Justin Sowden<br />
        Web Developer & Designer</h1>
        <p>Passionate about creating beautiful, functional, and user-centered digital experiences.<br />
        I specialize in modern web technologies and creative problem-solving.</p>
      </header>
      <div className="image main"><img src={process.env.PUBLIC_URL + '/images/pic01.jpg'} alt="Justin Sowden" /></div>
      <p>Hello! I'm Justin, a web developer and designer with a passion for creating meaningful digital experiences. With expertise in modern web technologies like React, Node.js, and responsive design, I bring ideas to life through clean code and intuitive user interfaces.</p>
      <p>My approach combines technical expertise with creative problem-solving. I believe in writing maintainable code, creating accessible designs, and building applications that not only look great but also provide exceptional user experiences. Whether it's a portfolio website, e-commerce platform, or custom web application, I'm committed to delivering high-quality solutions that exceed expectations.</p>
    </section>
  );
};

export default BlogPost;
