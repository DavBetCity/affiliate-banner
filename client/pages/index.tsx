import tw from 'twin.macro';
import Meta from '../components/core/Meta';

//######################### COMPONENT TYPES ################################################
import type { NextPage } from 'next';
type Props = {};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw.div``;

//######################### COMPONENT ######################################################

const Home: NextPage<Props> = () => {
  return (
    <>
      <Meta title='Homepage' />
      <Wrapper></Wrapper>
    </>
  );
};

export default Home;
