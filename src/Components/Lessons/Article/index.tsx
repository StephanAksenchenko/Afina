import styles from "./index.module.scss";
import { Meta, Header, Content, Conclusion } from "./ArticleSections";

import React from "react";

type Chunk = {
  type: string;
  content: any;
};

export type Article = {
  header: string;
  meta: {
    author: string;
    readingTime: string;
    published: string;
    rating: string;
  };
  content: Chunk[];
  conclusion: Chunk[];
};

export const Article = ({ header, meta, content, conclusion }: Article) => {
  return (
    <div className={styles.article}>
      <Header content={header} />
      <Meta {...meta} />
      <Content content={content} />
      <Conclusion content={conclusion} />
    </div>
  );
};
