import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import styles from './styles/Bookapp.module.scss';

const Navbar = () => (
  <nav className={styles.nav}>
    <h1>Bookstore CMS</h1>
    <div className={styles.navLink}>
      <NavLink to="/">BOOKS</NavLink>
      <NavLink to="categories">CATEGORIES</NavLink>
    </div>
    <FaUserCircle className={styles.end} />
  </nav>
);

export default Navbar;
