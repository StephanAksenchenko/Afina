import { Main } from "../../src/Components/Layouts/Main";
import { H1 } from "../../src/Components/Common/Headers";
import { Grid } from "../../src/Components/Common/Grid";
import { LessonCard } from "../../src/Components/Lessons/Card";
import { GetServerSideProps } from "next";

type LessonData = {
  id: number;
  header: string;
  description: string;
  link: string;
};

interface ILessons {
  data: LessonData[];
}

export default function Lessons({ data }: ILessons) {
  return (
    <Main>
      <H1> Lessons </H1>
      <Grid cols={4}>
        {data.map(({ id, ...rest }) => (
          <LessonCard key={id} {...rest} />
        ))}
      </Grid>
    </Main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data: LessonData[] = [
    {
      id: 1,
      header: "lesson1",
      description: "description",
      link: "/lessons/1",
    },
    {
      id: 2,
      header: "lesson1",
      description: "description",
      link: "/1",
    },
    {
      id: 3,
      header: "lesson1",
      description: "description",
      link: "/1",
    },
    {
      id: 4,
      header: "lesson1",
      description: "description",
      link: "/1",
    },
    {
      id: 5,
      header: "lesson1",
      description: "description",
      link: "/1",
    },
  ];

  return {
    props: {
      data,
    },
  };
};
