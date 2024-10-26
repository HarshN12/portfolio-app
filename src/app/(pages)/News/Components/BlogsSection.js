// BlogsSection.js

import React from 'react';
import styles from './BlogsSection.module.css'; // Import CSS module

const BlogsSection = () => {
  const blogs = [
    {
      heading: "Monster Black Holes are Everywhere",
      description: "Supermassive black holes lie at the heart of nearly every galaxy.",
      source: "NASA",
      link: "https://science.nasa.gov/mission/hubble/science/science-highlights/monster-black-holes-are-everywhere/",
      image: "https://science.nasa.gov/wp-content/uploads/2023/04/behemoth_blackhole-jpg.webp?w=1536&format=jpg"
    },
    {
      heading: "Studying the Outer Planets and Moons",
      description: "Hubble’s systematic observations chart the ever-changing environments of our solar system's giant planets and their moons.",
      source: "NASA",
      link: "https://science.nasa.gov/mission/hubble/science/science-highlights/studying-the-outer-planets-and-moons/",
      image: "https://science.nasa.gov/wp-content/uploads/2023/04/hubble_opal_composite.png?w=1536&format=jpg"
    },
    {
      heading: "SETI searches for alien signals synchronized with supernova 1987A",
      description: "Aliens might time their signals with a burst of supernova light.",
      source: "by Keith Cooper ",
      link: "https://www.space.com/seti-alien-signals-supernova-1987a-ellipsoid",
      image: "https://cdn.mos.cms.futurecdn.net/X5sv6oSE8Rg39vk7sndJEd-650-80.png.webp"
    },
    {
      heading: "All Astronomical Events 2024",
      description: "  ",
      source: "timeanddate",
      link: "https://www.timeanddate.com/astronomy/sights-to-see.html",
      image: "https://c.tadst.com/gfx/900x506/istock-505409706-cropped.jpg"
    },
    {
      heading: "Bizarre Galaxy Discovered With Seemingly No Stars Whatsoever",
      description: "  ",
      source: "By MICHELLE STARR",
      link: "https://www.sciencealert.com/bizarre-galaxy-discovered-with-seemingly-no-stars-whatsoever",
      image: "https://www.sciencealert.com/images/2024/01/starless-galaxy.jpg"
    },
    {
      heading: "All Astronomical Events 2024",
      description: "  ",
      source: "By MICHELLE STARR",
      link: "https://www.timeanddate.com/astronomy/sights-to-see.html",
      image: "https://c.tadst.com/gfx/900x506/istock-505409706-cropped.jpg"
    },
    // here you can add more
  ];

  return (
    <section className={styles.blogs + ' ' + styles.pageSection}>
      <h2>Article</h2>
      <div className={styles.band}>
        {blogs.map((blog, index) => (
          <div key={index} className={`${styles['item-' + (index + 1)]} ${styles.item}`}>
            <a href={blog.link} target="_blank" className={styles.card}>
              <div className={styles.thumb} style={{ backgroundImage: `url(${blog.image})` }}></div>
              <article>
                <h1>{blog.heading}</h1>
                <p>{blog.description}</p>
                <span>Source: {blog.source}</span>
              </article>
            </a>
          </div>
        ))}
      </div>
      <div className={styles.overlay}></div>
    </section>
  );
};

export default BlogsSection;
