import type { NextPage } from "next";
import { Button } from "../components/Button";
import { HTag } from "../components/H/index";
import { P } from "../components/P";
import { Rating } from "../components/Rating";
import { Tag } from "../components/Tag";
import { useState } from 'react';

const Home: NextPage = (): JSX.Element => {
  const [rating, setRating] = useState(4);
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
      <P size="M">
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </P>
      <Tag size="M" color="primary">tag</Tag>
      <Tag size="L" color="primary">tag</Tag>
      <Tag size="M" color="gray">tag</Tag>
      <Tag size="L" color="gray">tag</Tag>
      <Tag size="M" color="green">tag</Tag>
      <Tag size="L" color="green">tag</Tag>
      <Tag size="M" color="red">tag</Tag>
      <Tag size="L" color="red">tag</Tag>
      <Tag size="M" color="gray-light">tag</Tag>
      <Tag size="L" color="gray-light">tag</Tag>
      <Rating rating={rating} setRating={setRating}/>
      <Rating rating={rating} setRating={setRating} isEditable={true}/>
    </div>
  );
};

export default Home;
