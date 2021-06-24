import { Main } from "../src/Components/Layouts/Main";
import { H1, H2 } from "../src/Components/Common/Headers";
import { Flexbox } from "../src/Components/Common/Flexbox";
import { ButtonLink } from "../src/Components/Common/Button";

export default function Home() {
  return (
    <Main>
      <Flexbox justifyContent="center" alignItems="center">
        <H1>Afina</H1>
        <H2>
          Here will be modern, intelligent, full fantastic features platform for
          education
        </H2>
        <Flexbox flexDirection="row" style={{ marginTop: "48px" }}>
          <ButtonLink href="/lessons"> Learn </ButtonLink>
          <ButtonLink href="/login"> Login </ButtonLink>
        </Flexbox>
      </Flexbox>
    </Main>
  );
}
