import React from 'react';

const Intro = () => (
  <div id="intro" className="intro">
    <h1>Justin Sowden<br />
    Portfolio</h1>
    <p>Welcome to my portfolio showcasing my work in web development, design, and creative projects.<br />
    Explore my projects and get in touch to discuss collaboration opportunities.</p>
    <ul className="actions">
      <li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
    </ul>
  </div>
);

const FeaturedPost = () => (
  <article className="post featured">
    <header className="major">
      <span className="date">Latest Project</span>
      <h2><a href="#">Featured Work<br />
      Showcase</a></h2>
      <p>Here you'll find my most recent and impactful projects.<br />
      Each piece represents my passion for creating meaningful digital experiences.</p>
    </header>
    <a href="#" className="image main"><img src={process.env.PUBLIC_URL + '/images/pic01.jpg'} alt="" /></a>
    <ul className="actions special">
      <li><a href="#" className="button large">View Project</a></li>
    </ul>
  </article>
);

const BlogPost = ({ date, title, image, description }) => (
  <article>
    <header>
      <span className="date">{date}</span>
      <h2><a href="#">{title}</a></h2>
    </header>
    <a href="#" className="image fit"><img src={image} alt="" /></a>
    <p>{description}</p>
    <ul className="actions special">
      <li><a href="#" className="button">View Project</a></li>
    </ul>
  </article>
);

const Pagination = () => (
  <footer>
    <div className="pagination">
      <a href="#" className="page active">1</a>
      <a href="#" className="page">2</a>
      <a href="#" className="page">3</a>
      <span className="extra">&hellip;</span>
      <a href="#" className="page">8</a>
      <a href="#" className="page">9</a>
      <a href="#" className="page">10</a>
      <a href="#" className="next">Next</a>
    </div>
  </footer>
);

const LandingPage = () => {
  const blogPosts = [
    {
      date: 'Web Development',
      title: 'React Portfolio\nWebsite',
      image: process.env.PUBLIC_URL + '/images/pic02.jpg',
      description: 'A modern, responsive portfolio built with React and featuring the Massively theme. Demonstrates clean code structure and modern web development practices.'
    },
    {
      date: 'UI/UX Design',
      title: 'Mobile App\nInterface',
      image: process.env.PUBLIC_URL + '/images/pic03.jpg',
      description: 'User-centered design approach for mobile applications. Focus on intuitive navigation and engaging user experiences.'
    },
    {
      date: 'Full Stack',
      title: 'E-commerce\nPlatform',
      image: process.env.PUBLIC_URL + '/images/pic04.jpg',
      description: 'Complete e-commerce solution with payment processing, inventory management, and responsive design.'
    },
    {
      date: 'Creative Design',
      title: 'Brand Identity\nPackage',
      image: process.env.PUBLIC_URL + '/images/pic05.jpg',
      description: 'Comprehensive brand development including logo design, color schemes, and marketing materials.'
    },
    {
      date: 'Backend Development',
      title: 'API Development\n& Integration',
      image: process.env.PUBLIC_URL + '/images/pic06.jpg',
      description: 'Robust backend systems with RESTful APIs, database design, and third-party service integration.'
    },
    {
      date: 'Frontend Development',
      title: 'Interactive\nWeb Applications',
      image: process.env.PUBLIC_URL + '/images/pic07.jpg',
      description: 'Dynamic web applications with modern JavaScript frameworks and responsive design principles.'
    }
  ];

  return (
    <>
      <Intro />
      <FeaturedPost />
      <section className="posts">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </section>
      <Pagination />
    </>
  );
};

export default LandingPage;
