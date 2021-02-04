import React, { memo } from "react";
import styles from "./video_item.module.css";

const ListItem = memo(({ title, name, thumbnail, onVideoClick, display }) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <li className={`${styles.container} ${displayType}`} onClick={onVideoClick}>
      <div className={styles.video}>
        <img className={styles.thumbnail} src={thumbnail} alt="thumbnail" />
        <div className={styles.metadata}>
          <p className={styles.title}>{title}</p>
          <p className={styles.channel}>{name}</p>
        </div>
      </div>
    </li>
  );
});

export default ListItem;
