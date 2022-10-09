import type { NextPage } from "next";
import { Button } from "../components/Button";
import { HTag } from "../components/HTag/index";

const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <HTag tag="h1">h1</HTag>
      <HTag tag="h2">h1</HTag>
      <HTag tag="h3">h1</HTag>
      <Button appearance={"primary"} handler={() => alert("primary")} arrow={"right"}>
        primary
      </Button>
      <Button appearance={"ghost"} handler={() => alert("ghost")} arrow={"right"}>
        ghost
      </Button>
    </div>
  );
};

export default Home;
