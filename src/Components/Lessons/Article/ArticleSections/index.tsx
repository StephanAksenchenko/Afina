import { Flexbox } from "../../../Common/Flexbox";
import { Text } from "../../../Common/Text";
import { H1, H2 } from "../../../Common/Headers";
import { ArticleRenderer } from "../../ArticleChunks";

export interface IMeta {
  author: string;
  readingTime: string;
  published: string;
  rating: string;
}

export interface IContent {
  content: any;
}

export const Meta = ({ author, readingTime, published, rating }: IMeta) => {
  return (
    <Flexbox justifyContent="space-between">
      <Text size="s" view="secondary">
        {" "}
        Author - {author}
      </Text>
      <Text size="s" view="secondary">
        ReadingTime - {readingTime}
      </Text>
      <Text size="s" view="secondary">
        Published at - {published}
      </Text>
      <Text size="s" view="secondary">
        Rating - {rating}/5
      </Text>
    </Flexbox>
  );
};

export const Header = ({ content }: IContent) => {
  return <H1 align="center">{content}</H1>;
};

export const Content = ({ content }: IContent) => {
  return (
    <>
      <ArticleRenderer content={content} />
    </>
  );
};

export const Conclusion = ({ content }: IContent) => {
  return (
    <>
      <H2 align="center"> Conclustion</H2>
      <hr />
      <ArticleRenderer content={content} />
    </>
  );
};
