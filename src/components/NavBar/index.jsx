'use client';
import { useEffect, useState } from "react";
import styles from './NavBar.module.css';
import './hamburger.css';
import Link from 'next/link';
const nav_logo = '/assets/Indian_Institute_of_Technology__Jammu_Logo.svg' ;


export default function Nav_bar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navTop, setNavTop] = useState("0");
  const navbarHeight = 100;
  const scrollThreshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (Math.abs(prevScrollPos - currentScrollPos) > scrollThreshold) {
        if (currentScrollPos > prevScrollPos) {
          // Scrolling down
          setNavTop(`-${navbarHeight}px`);
        } else {
          // Scrolling up
          setNavTop("0");
        }
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={styles['nav']} style={{ top: navTop }}>
      <div className={styles['logo']} style={{ backgroundImage: `url('${nav_logo}')` }}>
        <Link href="/"></Link>
      </div>
      <div id="nav-menu" className={styles['nav-menu']}>
        <div className={styles['obj']}><Link href="/">Home</Link></div>
        <div className={styles['obj']}><Link href="/about">About</Link></div>
        <div className={styles['obj']}><Link href="/activity">Activities</Link></div>
        <div className={`${styles['obj']} ${styles['drop']}`}>
          <Link href="/research">Research
            <div>
              <div className={styles['arrow']}></div>
            </div>
          </Link>
          <ul>
            <li><Link href="/collaboration">Collaboration</Link></li>
            <li><Link href="/facilities">Facilities</Link></li>
          </ul>
        </div>
        <div className={`${styles['obj']} ${styles['drop']}`}>
          <Link href="/members">Members
            <div>
              <div className={styles['arrow']}></div>
            </div>
          </Link>
          <ul>
            <li><Link href="/ug">UG</Link></li>
            <li><Link href="/pg">PG</Link></li>
            <li><Link href="/PhD">PHD</Link></li>
            <li><Link href="/Intern">Intern</Link></li>
          </ul>
        </div>
        <div className={styles['obj']}><Link href="/news">News</Link></div>
        <div className={styles['obj']}><Link href="/publication">Publications</Link></div>
        <div className={styles['obj']}><Link href="/contact">Contact</Link></div>
        <div className={styles['indic']}></div>
      </div>
      <button className="hamburger hamburger--elastic" id="hamburgerButton" type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </nav>
  );
}
