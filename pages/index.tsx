import type { NextPage } from 'next';
import { HTag } from '../components/HTag/index';

const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <HTag tag='h1'>h1</HTag>
      <HTag tag='h2'>h1</HTag>
      <HTag tag='h3'>h1</HTag>
    </div>
  );
};

export default Home;
