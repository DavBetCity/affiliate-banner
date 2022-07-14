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
      <Meta title="Homepage" />
      <Wrapper></Wrapper>
      {/* <iframe
        src="http://localhost:3000/"
        width="100%"
        height="136"
        frameBorder="0"
      ></iframe> */}
    </>
  );
};

export default Home;
