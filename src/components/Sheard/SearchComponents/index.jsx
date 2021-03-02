import React, { memo } from "react";

import { Link } from "react-router-dom";

import styles from "./button.module.css";
import youtube from "assets/images/logo.png";
import search from "assets/images/search.png";

const SearchComponents = memo(
  ({ searchValue, handleSearch, handleSearchButton, handleKeyPress }) => {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/react-youtube">
            <img src={youtube} alt="logo" />
          </Link>
          <h1 className="logoText">YouTube</h1>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className={styles.input}
          value={searchValue}
          onChange={handleSearch}
          onKeyPress={handleKeyPress}
        />
        <button className={styles.button} onClick={handleSearchButton}>
          <img src={search} className={styles.buttonImg} alt="search" />
        </button>
      </header>
    );
  }
);

export default SearchComponents;
