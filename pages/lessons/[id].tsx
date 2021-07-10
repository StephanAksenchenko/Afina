import { Main } from "../../src/Components/Layouts/Main";
import { Article } from "../../src/Components/Lessons/Article";
import { BackButton } from "../../src/Components/Lessons/BackButton/BackButton";

interface ILesson {
  article: Article;
}

export default function Lesson({ article }: ILesson) {
  return (
    <Main>
      <BackButton />
      <Article {...article} />
    </Main>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      article: {
        header: "Article lesson 1",
        meta: {
          author: "Aksenchenko S.A.",
          readingTime: "5min",
          published: "01.01.2021",
          rating: 4,
        },
        content: [
          {
            type: "Preamble",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            quibusdam veniam quaerat ullam vero ea. Reprehenderit hic id nihil quo
            fugit atque. Dolorum perspiciatis at voluptatibus molestias dicta culpa
            autem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            quibusdam veniam quaerat ullam vero ea. Reprehenderit hic id nihil quo
            fugit atque. Dolorum perspiciatis at voluptatibus molestias dicta culpa
            autem.`,
          },
          {
            type: "Header2",
            content: `Section 1`,
          },
          {
            type: "Definition",
            content: {
              termin: "Hello",
              essence: "world is so beautiful",
            },
          },
          {
            type: "Text",
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            totam deleniti laborum quidem reprehenderit odit labore voluptatum
            provident eum nobis? Sint voluptates, eveniet iure rem laboriosam unde
            recusandae ex earum.`,
          },
          {
            type: "Text",
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            totam deleniti laborum quidem reprehenderit odit labore voluptatum
            provident eum nobis? Sint voluptates, eveniet iure rem laboriosam unde
            recusandae ex earum.`,
          },
          {
            type: "Header2",
            content: "Section 2",
          },
          {
            type: "UnorderedList",
            content: ["point 1", "point 2", "point 3", "point 4", "point 5"],
          },
          {
            type: "Header2",
            content: "Section 3",
          },
          {
            type: "OrderedList",
            content: ["point1", "point2", "point3"],
          },
        ],
        conclusion: [
          {
            type: "UnorderedList",
            content: [
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              praesentium perferendis quidem molestias quasi est autem voluptate
              quod dignissimos? Asperiores, repellat fugit sed ducimus rerum quos
              libero quod similique recusandae!`,
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              praesentium perferendis quidem molestias quasi est autem voluptate
              quod dignissimos? Asperiores, repellat fugit sed ducimus rerum quos
              libero quod similique recusandae!`,
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              praesentium perferendis quidem molestias quasi est autem voluptate
              quod dignissimos? Asperiores, repellat fugit sed ducimus rerum quos
              libero quod similique recusandae!`,
            ],
          },
        ],
      },
    },
  };
}
