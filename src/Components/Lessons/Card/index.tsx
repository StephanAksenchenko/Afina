import { Card } from "../../UI/Card";
import { H2 } from "../../Common/Headers";
import { Text } from "../../Common/Text";
import { ButtonLink } from "../../Common/Button";

export interface ILessonCard {
  header: string;
  description: string;
  link: string;
}

export const LessonCard = ({ header, description, link }: ILessonCard) => {
  return (
    <Card>
      <H2> {header}</H2>
      <Text>{description}</Text>
      <ButtonLink href={link}> Learn </ButtonLink>
    </Card>
  );
};
