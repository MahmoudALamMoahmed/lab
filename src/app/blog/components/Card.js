/* import React from "react";
import styles from "../blog.module.css";
const Card = ({ title, body, userId }) => {
  return (
    <div className={styles.card}>
      <span>{userId}</span>
      <h2>Title : {title}</h2>
      <p>Body : {body}</p>
    </div>
  );
};

export default Card;
 */

/* import React from "react";
import Link from "next/link";
import styles from "../blog.module.css";

const Card = ({ id, title, body,image }) => {
  return (
    <Link href={`/post/${id}`} passHref>
      <div className={styles.card}>
        <h2>{title}</h2>
        <p>{body}</p>
        
      </div>
    </Link>
  );
};

export default Card;
 */

import React from "react";
import Link from "next/link";
import styles from "../blog.module.css";

const Card = ({ id, title, body, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} style={{ width: '200px', height: '200px' }} />
      <p>{title}</p>
      
      <Link href={`/product/${id}`} passHref>
        <button style={{ marginTop: '10px' }}>Go Details</button>
      </Link>
    </div>
  );
};

export default Card;
