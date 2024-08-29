/* import React from "react";
import Card from "./components/Card";
import styles from "./blog.module.css";
import BlogSelect from "../post/[id]/page";

const Blog = async () => {
  const postsJson = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await postsJson.json();

  return (
    <div className={styles.container}>
      {posts.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          body={item.body}
        />
      ))}
    </div>
  );
};

export default Blog;
 */

/* import React from "react";
import Card from "./components/Card";
import styles from "./blog.module.css";

const Blog = async () => {
  const postsJson = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await postsJson.json();

  return (
    <div className={styles.container}>
      {posts.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          body={item.body}
        />
      ))}
    </div>
  );
};

export default Blog; */

import React from "react";
import Card from "./components/Card";
import styles from "./blog.module.css";

const Blog = async () => {
  const postsJson = await fetch("https://fakestoreapi.com/products");
  const posts = await postsJson.json();

  return (
    <div className={styles.container}>
      {posts.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          body={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Blog;

