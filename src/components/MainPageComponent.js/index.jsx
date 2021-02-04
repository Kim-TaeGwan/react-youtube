import React from "react";
import styles from "./mainPage.module.css";

import SearchComponents from "components/Sheard/SearchComponents";

const MainPageComponent = ({
  searchValue,
  handleSearch,
  handleSearchButton,
  handleKeyPress,
  children,
}) => {
  return (
    <div className={styles.mainCatainer}>
      <SearchComponents
        searchValue={searchValue}
        handleSearch={handleSearch}
        handleSearchButton={handleSearchButton}
        handleKeyPress={handleKeyPress}
      />
      <section className={styles.content}>{children}</section>
    </div>
  );
};

export default MainPageComponent;
