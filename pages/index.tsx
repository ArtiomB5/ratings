import type { NextPage } from "next";
import { Button } from "../components/Button";
import { HTag } from "../components/HTag/index";
import { PTag } from "../components/PTag";

const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <HTag tag="h1">h1</HTag>
      <HTag tag="h2">h1</HTag>
      <HTag tag="h3">h1</HTag>
      <Button
        appearance={"primary"}
        handler={() => alert("primary")}
        arrow={"right"}
      >
        primary
      </Button>
      <Button
        appearance={"ghost"}
        handler={() => alert("ghost")}
        arrow={"right"}
      >
        ghost
      </Button>
      <PTag size="M">
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </PTag>
    </div>
  );
};

export default Home;
